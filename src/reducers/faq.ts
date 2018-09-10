import { combineReducers } from 'redux'
import { getType } from 'typesafe-actions'
import { CitiesActions, CitiesState, citiesAction } from '../state_action'
import { ICities } from '@models';

export const FAQReducer = combineReducers<CitiesState, CitiesActions>({
    cities: (state = [], action) => {
        switch (action.type) {
            case getType(citiesAction.listCites):
                return action['payload'];
            default:
                return state
        }

    }
})

