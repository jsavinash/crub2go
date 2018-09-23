import { ActionType, createStandardAction } from 'typesafe-actions';
import {
    LOGIN,
    REGISTER,
    CHANGE_PASSWORD,
    RESET_PASSWORD,
    FORGOT_PASSWORD,
    CARD_ADD
} from '../constants/actionTypes';
import {
    ILoginState,
    IRegisterState,
    IChangePasswordState,
    IResetPasswordState,
    IForgotPasswordState,
    IAddCardState
} from '@models';

export const collectAction = {
    loginParamsAction: createStandardAction(LOGIN)<ILoginState>(),
    registerParamsAction: createStandardAction(REGISTER)<IRegisterState>(),
    changePasswordParamsAction: createStandardAction(CHANGE_PASSWORD)<IChangePasswordState>(),
    resetParamsAction: createStandardAction(RESET_PASSWORD)<IResetPasswordState>(),
    forgotParamsAction: createStandardAction(FORGOT_PASSWORD)<IForgotPasswordState>(),
    cardAddParamsAction: createStandardAction(CARD_ADD)<IAddCardState>(),
}

export type CollectActions = ActionType<typeof collectAction>

export type CollectState = Readonly<{
    loginParams: ILoginState,
    registerParams: IRegisterState,
    changePasswordParams: IChangePasswordState,
    resetParams: IResetPasswordState,
    forgotParams: IForgotPasswordState,
    cardAddParams: IAddCardState
}>
