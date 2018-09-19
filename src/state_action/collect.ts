import { ActionType, createStandardAction } from 'typesafe-actions';
import { LOGIN, REGISTER } from '../constants/actionTypes';
import { ILoginParams, IRegisterParams } from '@models';

export const collectAction = {
    loginParamsAction: createStandardAction(LOGIN)<ILoginParams>(),
    registerParamsAction: createStandardAction(REGISTER)<IRegisterParams>(),
}

export type CollectActions = ActionType<typeof collectAction>

export type CollectState = Readonly<{
    loginParams: ILoginParams,
    registerParams: IRegisterParams,
}>
