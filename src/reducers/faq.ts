import { combineReducers } from 'redux'
import { getType } from 'typesafe-actions'
import { FaqActions, FaqState, faqAction } from '../state_action'
import { IFAQResponse } from '@models';

export const FAQReducer = combineReducers<FaqState, FaqActions>({
    faq: (state: IFAQResponse[] = [], action) => {
        switch (action.type) {
            case getType(faqAction.listFaq):
                return action['payload'];
            default:
                return state
        }
    }
})

