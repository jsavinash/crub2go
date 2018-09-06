import { ActionType, createStandardAction } from 'typesafe-actions'
import { CUSTOM_NAVIGATION } from '../constants/actionTypes'

export const navAction = {
    createScreen: createStandardAction(CUSTOM_NAVIGATION)<string>(),
}

export type NavigationActions = ActionType<typeof navAction>

export type NavigationState = Readonly<{
    screen: string
}>
