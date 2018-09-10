import { combineReducers } from 'redux'
import { getType } from 'typesafe-actions'
import { CardActions, cardAction, CardState } from '../state_action'

export const CardsReducer = combineReducers<CardState, CardActions>({
    cards: (state = [], action) => {
        switch (action.type) {
            case getType(cardAction.listCards):
                console.log("card data", action['payload'])
                return action['payload'];
            default:
                return state
        }
    }
})




