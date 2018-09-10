import { ActionType, createStandardAction } from 'typesafe-actions'
import { LIST_DEALS } from '../constants/actionTypes'

export const faqAction = {
    listFaq: createStandardAction(LIST_DEALS)<any[]>(),
}

export type FaqActions = ActionType<typeof faqAction>

export type FaqState = Readonly<{
    faq: any
}>
