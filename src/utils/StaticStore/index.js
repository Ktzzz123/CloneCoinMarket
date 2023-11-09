import { io } from 'socket.io-client'
import { eventList } from '../constants/eventLists'
import MarketSymbolInfo from '../DataModel/MarketSymbolInfo'
import { glb_sv } from '..'
const { Subject } = require('rxjs')

class StaticStoreClass {
    constructor() {
        // ------- Liên quan tới socket
        this.idRequest = 0
        this.getIdRequest = () => {
            return this.idRequest++
        }
        this.socket_stream = io("http://localhost:2022", {
            timeout: 5000,
            secure: true,
            reconnection: true,
            transports: ['websocket'],
            // transports: ['polling'],
        });
        this.requestMap = new Map()
        this.connect_socket = (stream_server) => {
            this.socket_stream.connect();

            if (!this.socket_stream.connected) {
                setTimeout(() => {
                    this.connect_socket()
                    console.log('connecting to socket....   ☁️☁️☁️☁️☁️☁️☁️', this.socket_stream.connected, glb_sv.Stream_server)
                }, 3000)
            } else if (this.socket_stream.connected) {
                console.log('connect socket successful   ☁️☁️☁️☁️☁️☁️☁️', this.socket_stream.connected)
                this.listen_socket_stream(this.socket_stream)
            }
        }
        this.listen_socket_stream = (socket) => {
            socket.on('connect', () => {
                socket.on('market-data', (msg) => {
                    // console.log('msg',msg)
                    const StructureData = this.StructureData
                    if (!StructureData[msg.symbol_id]) {
                        StructureData[msg.symbol_id] = new MarketSymbolInfo()
                    }

                    if (msg.type === 'trade') {
                        StructureData[msg.symbol_id]['trade'] = msg
                    }
                    if (msg.type === 'ohlcv') {
                        if (msg.period_id === '1DAY') {
                            StructureData[msg.symbol_id]['ohlcv']['1DAY'] = msg
                        }
                        if (msg.period_id === '12HRS') {
                            StructureData[msg.symbol_id]['ohlcv']['12HRS'] = msg
                        }
                        if (msg.period_id === '1HRS') {
                            StructureData[msg.symbol_id]['ohlcv']['1HRS'] = msg
                        }

                    }
                    for (var i in StructureData) {
                        if (!StructureData.key) {
                            let temp = StructureData[i]['ohlcv']['1DAY'].symbol_id || StructureData[i].trade.symbol_id || StructureData[i]['ohlcv']['1HRS'].symbol_id || StructureData[i]['ohlcv']['12HRS'].symbol_id
                            temp = temp.split('_')[2]

                            StructureData[i].key = temp
                        }
                    }
                    // ----- Bắn RxJS event
                    glb_sv.commonEvent.next({ type: eventList.UPDATE_MARKET_DATA, symbol_id: msg.symbol_id, typeData: msg.type })
                    // console.log(structureData)
                })
                socket.on('method-response', (msg) => {
                    const requestBodyExtends = this.requestMap.get(msg.id)
                    // console.log(requestBodyExtends)
                    // console.log(msg);
                    requestBodyExtends.resolve(msg)
                })

                socket.on('sub-response', (msg) => {
                    const subBodyExtends = this.requestMap.get(msg.id)
                    subBodyExtends.resolve(msg)
                })

            })
        }

        // ------- Lưu trữ data
        this.StructureData = {}
        this.SymbolInfo = {}
    }
}

const StaticStore = new StaticStoreClass()
window.StaticStore = StaticStore
export default StaticStore
