import { ActionType, createStandardAction } from 'typesafe-actions';
import { LOGIN, REGISTER, ChangePassword } from '../constants/actionTypes';
import { ILoginState, IRegisterState, IChangePasswordState } from '@models';

export const collectAction = {
    loginParamsAction: createStandardAction(LOGIN)<ILoginState>(),
    registerParamsAction: createStandardAction(REGISTER)<IRegisterState>(),
    changePasswordParamsAction: createStandardAction(ChangePassword)<IChangePasswordState>(),
}

export type CollectActions = ActionType<typeof collectAction>

export type CollectState = Readonly<{
    loginParams: ILoginState,
    registerParams: IRegisterState,
    changePasswordParams: IChangePasswordState
}>
