import { ActionType, createStandardAction } from 'typesafe-actions';
import { LOGIN, REGISTER, CHANGE_PASSWORD, RESET_PASSWORD } from '../constants/actionTypes';
import { ILoginState, IRegisterState, IChangePasswordState, IResetPasswordState } from '@models';

export const collectAction = {
    loginParamsAction: createStandardAction(LOGIN)<ILoginState>(),
    registerParamsAction: createStandardAction(REGISTER)<IRegisterState>(),
    changePasswordParamsAction: createStandardAction(CHANGE_PASSWORD)<IChangePasswordState>(),
    resetParamsAction: createStandardAction(RESET_PASSWORD)<IResetPasswordState>(),
}

export type CollectActions = ActionType<typeof collectAction>

export type CollectState = Readonly<{
    loginParams: ILoginState,
    registerParams: IRegisterState,
    changePasswordParams: IChangePasswordState,
    resetParams: IResetPasswordState
}>
