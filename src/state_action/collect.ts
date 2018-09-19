import { ActionType, createStandardAction } from 'typesafe-actions';
import { LOGIN, REGISTER } from '../constants/actionTypes';
import { ILoginState, IRegisterState } from '@models';

export const collectAction = {
    loginParamsAction: createStandardAction(LOGIN)<ILoginState>(),
    registerParamsAction: createStandardAction(REGISTER)<IRegisterState>(),
}

export type CollectActions = ActionType<typeof collectAction>

export type CollectState = Readonly<{
    loginParams: ILoginState,
    registerParams: IRegisterState,
}>
