import { combineReducers } from 'redux'
import { getType } from 'typesafe-actions'
import { pageAction, PageActions, PageState } from '../state_action'
import { IPage } from '@models';
export const StaticPageReducer = combineReducers<PageState, PageActions>({
    aboutUs: (state: IPage = { content: '', title: '' }, action: any) => {
        switch (action.type) {
            case getType(pageAction.aboutUs):
                return action['payload'];
            default:
                return state
        }
    },
    howItWorks: (state: IPage = { content: '',  title: '' }, action: any) => {
        switch (action.type) {
            case getType(pageAction.howItWorks):
                return action['payload'];
            default:
                return state
        }
    },
    termOfService: (state: IPage = { content: '',  title: '' }, action: any) => {
        switch (action.type) {
            case getType(pageAction.termOfService):
                return action['payload'];
            default:
                return state
        }
    },
    privacyPolicy: (state: IPage = { content: '',  title: '' }, action: any) => {
        switch (action.type) {
            case getType(pageAction.privacyPolicy):
                return action['payload'];
            default:
                return state
        }
    },
})

