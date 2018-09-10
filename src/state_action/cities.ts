import { ActionType, createStandardAction } from 'typesafe-actions';
import { ICities } from '@models';
import { LIST_CITIES } from '../constants/actionTypes';

export const citiesAction = {
    listCites: createStandardAction(LIST_CITIES)<any[]>(),
}

export type CitiesActions = ActionType<typeof citiesAction>

export type CitiesState = Readonly<{
    cities: any[]
}>
