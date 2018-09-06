import { combineReducers } from 'redux'
import { getType } from 'typesafe-actions'
import { CitiesActions, CitiesState, citiesAction } from '../state_action'
import { ICities } from '@models';

export const CitiesReducer = combineReducers<CitiesState, CitiesActions>({
    cities: (state: ICities = {}, action) => {
        switch (action.type) {
            case getType(citiesAction.listCites):
                return action['payload'];
            default:
                return state
        }

    }
})

