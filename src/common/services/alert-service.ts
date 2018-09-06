import { showMessage, hideMessage } from "react-native-flash-message";

export enum AlertMessageType {
    success,
    info,
    warning,
    danger
}

export const showAlert = (title: string, message: string, type: string) => {
    showMessage({
        message: title,
        description: message,
        type
    });
}

export const hideAlert = (message: string, description: string) => {
    hideMessage({
        message,
        description,
        type: "success"
    });
}

