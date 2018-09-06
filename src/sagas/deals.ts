// import { ApiOkResponse } from 'apisauce'
// import { call, put } from 'redux-saga/effects'
// import { IDeals } from '@models'
// import { DealsRestServiceType } from '../services';
// import { dealAction } from '@state_action'

// export function* listDealsSaga(
//     { listDeals }: DealsRestServiceType,
//     { payload }: { payload: string }
// ) {

//     console.log("payload from sagas", payload);
//     try {
//         const response: ApiOkResponse<any> = yield call(listDeals, payload)
//         console.log("response from saga", response);
//         const deals: IDeals[] = response.data.results.map((r: any) => {
//             return {
//                 name: r.name,
//                 address: r.address,
//             } as IDeals
//         })
//         yield put(dealAction.listDeals(deals))
//     } catch (error) {
//         console.log(error)
//     }
// }

