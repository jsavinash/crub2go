import { ActionType, createStandardAction } from 'typesafe-actions';
import { LOGIN, REGISTER } from '../constants/actionTypes';
import { ILogin, IRegister } from '@models';

export const collectAction = {
    loginParamsAction: createStandardAction(LOGIN)<ILogin>(),
    registerParamsAction: createStandardAction(REGISTER)<IRegister>(),
}

export type CollectActions = ActionType<typeof collectAction>

export type CollectState = Readonly<{
    loginParams: ILogin,
    registerParams: IRegister,
}>
