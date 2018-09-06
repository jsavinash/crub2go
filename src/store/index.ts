



import { persistReducer } from 'redux-persist';
import { REDUX_PERSIST as ReduxPersist } from '@config';
import configureStore from './createStore';
import rootReducer from '../reducers/RootReducer';
import rootSaga from '../sagas/index';

export default () => {
    var finalReducers: any = rootReducer

    if (ReduxPersist.active) {
        const persistConfig = ReduxPersist.storeConfig
        // Seems to be a bug in redux-persist types so all this `| undefined` is needed?
        finalReducers = persistReducer(persistConfig, rootReducer as any)
    }

    const configureResult = configureStore(finalReducers as any, rootSaga as any)


    const { store, sagaMiddleware } = configureResult
    let { sagasManager } = configureResult


    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('../reducers/RootReducer').default
            store.replaceReducer(nextRootReducer)
            const newYieldedSagas = require('../sagas').default
            sagasManager.cancel()
            sagasManager.done.then(() => {
                sagasManager = sagaMiddleware.run(newYieldedSagas)
            })
        })
    }
    return store
}