import { sendChanels } from './constants/eventLists'
import StaticStore from './StaticStore'

export const subcribeServer = async (subBody) => {
    return new Promise((resolve, reject) => {
        const idRequest = StaticStore.getIdRequest()
        const subBodyExtends = { ...subBody, resolve, id: idRequest }
        StaticStore.requestMap.set(idRequest, subBodyExtends)
        StaticStore.socketInstance.emit(sendChanels.SUB, { ...subBody, id: idRequest })
    })
}
