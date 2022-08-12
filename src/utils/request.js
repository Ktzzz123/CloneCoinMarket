import { sendChannels } from "./constants/eventLists"
import StaticStore from "./StaticStore"



export const methodCall = async (requestBody) => {
    return new Promise((resolve, reject) => {
        const idRequest = StaticStore.getIdRequest()
        const requestBodyExtends = { ...requestBody, resolve, id: idRequest }
        StaticStore.requestMap.set(idRequest, requestBodyExtends)
        StaticStore.socketInstance.emit(sendChannels.METHOD, { ...requestBody, id: idRequest })
    })
}

