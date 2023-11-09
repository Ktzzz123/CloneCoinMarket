import { Subject } from "rxjs";

class GlobalService {
    constructor() {
        this.Stream_server = '';
        this.language = 'EN';
        this.commonEvent = new Subject()
        this.listCoins = [
            "BINANCE_SPOT_BTC_USDT",
            "BINANCE_SPOT_ETH_USDT",
            "BINANCE_SPOT_LPT_USDT",
            "BINANCE_SPOT_BNB_USDT",
            "BINANCE_SPOT_BSW_USDT",
            "BINANCE_SPOT_ADA_USDT",
            "BINANCE_SPOT_DOGE_USDT",
        ]
    }
}

const theInstance = new GlobalService()

window.glb_sv = theInstance;
export default theInstance;