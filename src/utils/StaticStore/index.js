import { io } from 'socket.io-client'
import { eventList } from '../constants/eventLists'
import MarketSymbolInfo from '../DataModel/MarketSymbolInfo'
const { Subject } = require('rxjs')

class StaticStoreClass {
    constructor() {
        // ------- Liên quan tới socket
        this.idRequest = 0
        this.appEvent = new Subject()
        this.getIdRequest = () => {
            return this.idRequest++
        }
        this.socketInstance = io('http://io.nvdise.space', {
            timeout: 2000,
            secure: true,
            reconnection: false,
            transports: ['websocket'],
            // transports: ['polling'],
        })
        this.requestMap = new Map()

        this.socketInstance.on('connect', () => {
            this.socketInstance.on('market-data', (msg) => {
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
                    for (var i in StructureData) {
                        if (!StructureData.key) {
                            let temp = StructureData[i]['ohlcv']['1DAY'].symbol_id || StructureData[i].trade.symbol_id
                            temp = temp.split('_')[2]

                            StructureData[i].key = temp
                        }
                    }
                }
                // ----- Bắn RxJS event
                this.appEvent.next({ type: eventList.UPDATE_MARKET_DATA, symbol_id: msg.symbol_id, typeData: msg.type })
                // console.log(structureData)
            })
            this.socketInstance.on('method-response', (msg) => {
                const requestBodyExtends = this.requestMap.get(msg.id)
                requestBodyExtends.resolve(msg)
            })
            this.socketInstance.on('sub-response', (msg) => {
                const subBodyExtends = this.requestMap.get(msg.id)
                subBodyExtends.resolve(msg)
            })
        })

        // ------- Lưu trữ data
        this.StructureData = {}
    }
}

const StaticStore = new StaticStoreClass()
window.StaticStore = StaticStore
export default StaticStore
