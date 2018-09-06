import { ActionType, createStandardAction } from 'typesafe-actions'
import { IPage } from "@models";
import {
    ABOUT_US_PAGE,
    HOW_IT_WORKS_PAGE,
    TERMS_OF_SERVICE_PAGE,
    PRIVACY_POLICY_PAGE
} from '../constants/actionTypes'

export const pageAction = {
    aboutUs: createStandardAction(ABOUT_US_PAGE)<IPage>(),
    howItWorks: createStandardAction(HOW_IT_WORKS_PAGE)<IPage>(),
    termOfService: createStandardAction(TERMS_OF_SERVICE_PAGE)<IPage>(),
    privacyPolicy: createStandardAction(PRIVACY_POLICY_PAGE)<IPage>(),
}
export type PageActions = ActionType<typeof pageAction>

export type PageState = Readonly<{
    aboutUs: IPage,
    howItWorks: IPage,
    termOfService: IPage,
    privacyPolicy: IPage,
}>
