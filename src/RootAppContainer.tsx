import * as React from "react"
import { Provider } from 'react-redux';
import createStore from '@store';
import RootContainer from './RootContainer';
//import { Text, View } from "react-native";

// create our store
const store = createStore()


class RootAppContainer extends React.Component {
    public render() {
        return (
            <Provider store={store}>
            <RootContainer />
            </Provider>
        )
    }
}




export default RootAppContainer;

