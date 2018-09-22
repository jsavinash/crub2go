import { ActionType, createStandardAction } from 'typesafe-actions';
import { LOGIN, REGISTER, CHANGE_PASSWORD, RESET_PASSWORD, FORGOT_PASSWORD } from '../constants/actionTypes';
import { ILoginState, IRegisterState, IChangePasswordState, IResetPasswordState, IForgotPasswordState } from '@models';

export const collectAction = {
    loginParamsAction: createStandardAction(LOGIN)<ILoginState>(),
    registerParamsAction: createStandardAction(REGISTER)<IRegisterState>(),
    changePasswordParamsAction: createStandardAction(CHANGE_PASSWORD)<IChangePasswordState>(),
    resetParamsAction: createStandardAction(RESET_PASSWORD)<IResetPasswordState>(),
    forgotParamsAction: createStandardAction(FORGOT_PASSWORD)<IForgotPasswordState>(),
}

export type CollectActions = ActionType<typeof collectAction>

export type CollectState = Readonly<{
    loginParams: ILoginState,
    registerParams: IRegisterState,
    changePasswordParams: IChangePasswordState,
    resetParams: IResetPasswordState,
    forgotParams: IForgotPasswordState
}>
