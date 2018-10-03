import { ActionType, createStandardAction } from 'typesafe-actions';
import { LIST_FAQ } from '../constants/actionTypes';
import { IFAQResponse } from "@models";

export const faqAction = {
    listFaq: createStandardAction(LIST_FAQ)<IFAQResponse[]>(),
}

export type FaqActions = ActionType<typeof faqAction>

export type FaqState = Readonly<{
    faq: IFAQResponse[]
}>
