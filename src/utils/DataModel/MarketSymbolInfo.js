class MarketSymbolInfo {
    constructor() {
        this.key = ''
        this.trade = {}
        this.ohlcv = {
            '1DAY': {},
            '12HRS': {},
            '1HRS': {},
        }
        this.info = {}
    }
}
export default MarketSymbolInfo