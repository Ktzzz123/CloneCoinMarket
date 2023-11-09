import { sendChanels } from "./constants/eventLists"
import StaticStore from "./StaticStore"



export const methodCall = async (requestBody = { method: '', params: '' }) => {
    return new Promise((resolve, reject) => {
        const idRequest = StaticStore.getIdRequest()
        const requestBodyExtends = { ...requestBody, resolve, id: idRequest }
        // console.log('requestBodyExtends',requestBodyExtends)
        // console.log('requestBody',requestBody)
        StaticStore.requestMap.set(idRequest, requestBodyExtends)
        // console.log("call", [idRequest, requestBody]);
        StaticStore.socket_stream.emit(sendChanels.METHOD, { ...requestBody, id: idRequest })
    })
}

