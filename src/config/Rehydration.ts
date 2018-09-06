import { AsyncStorage } from 'react-native'
import { Store } from 'redux'
import { persistStore } from 'redux-persist'
import { REDUX_PERSIST } from './ReduxPersist'
import { reduxStartup } from '../state_action';


export const updateReducers = (store: Store) => {
    const reducerVersion = REDUX_PERSIST.reducerVersion
    const startup = () => store.dispatch(reduxStartup())

    // Check to ensure latest reducer version
    AsyncStorage.getItem('reducerVersion')
        .then(localVersion => {
            if (localVersion !== reducerVersion) {
                // Purge store
                persistStore(store, undefined, startup).purge()
                AsyncStorage.setItem('reducerVersion', reducerVersion)
            } else {
                persistStore(store, undefined, startup)
            }
        })
        .catch(() => {
            persistStore(store, undefined, startup)
            AsyncStorage.setItem('reducerVersion', reducerVersion)
        })
}

