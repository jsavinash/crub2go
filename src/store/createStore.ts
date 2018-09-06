import { NavigationState } from 'react-navigation'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import { Action, applyMiddleware, compose, createStore, Reducer } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { REDUX_PERSIST as ReduxPersist, updateReducers as Rehydration } from '@config';
import { RootState } from '../reducers/RootReducer';

// creates the store
export default (
    rootReducer: Reducer<{}, Action<any>>,
    rootSaga: () => Iterator<any>
) => {
    /* ------------- Redux Configuration ------------- */

    const middleware = []
    const enhancers = []

    /* ------------- Navigation Middleware ------------ */

    const navigationMiddleware = createReactNavigationReduxMiddleware(
        'root',
        (state: RootState) => state.nav as NavigationState
    )
    middleware.push(navigationMiddleware)

    /* ------------- Saga Middleware ------------- */


    const sagaMiddleware = createSagaMiddleware();
    middleware.push(sagaMiddleware)

    /* ------------- Assemble Middleware ------------- */

    enhancers.push(applyMiddleware(...middleware))

    // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
    const createAppropriateStore = createStore;

    const store = createAppropriateStore(rootReducer, compose(...enhancers))

    // configure persistStore and check reducer version number
    if (ReduxPersist.active) {
        Rehydration(store)
    }
    const sagasManager = sagaMiddleware.run(rootSaga)
    return {
        store,
        sagasManager,
        sagaMiddleware,
    }
}