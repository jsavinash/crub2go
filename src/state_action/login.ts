import { ActionType, createStandardAction } from 'typesafe-actions';
import { LOGIN } from '../constants/actionTypes';
import { ILogin } from '@models';

export const loginAction = {
    loginParamsAction: createStandardAction(LOGIN)<ILogin>(),
}

export type LoginActions = ActionType<typeof loginAction>

export type LoginState = Readonly<{
    loginParams: ILogin
}>
