import { ActionType, createStandardAction } from 'typesafe-actions';
import { LIST_CARDS } from '../constants/actionTypes';

export const cardAction = {
    listCards: createStandardAction(LIST_CARDS)<any[]>(),
}

export type CardActions = ActionType<typeof cardAction>

export type CardState = Readonly<{
    cards: any[]
}>
