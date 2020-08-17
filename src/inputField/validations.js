import { Regex, validationMessage } from "../constants/string";

export const validation = {
    PASSWORD: {
        required: {
            value: true,
            errorMessage: validationMessage.PASSWORD1
        },
        minLength: {
            value: 8,
            errorMessage: validationMessage.PASSWORD2
        }
    },
    EMAIL: {
        required: {
            value: true,
            errorMessage: validationMessage.EMAIL1
        },
        pattern: {
            value: Regex.EMAIL,
            errorMessage: validationMessage.EMAIL2
        }
    },
    USER_NAME: {
        required: {
            value: true,
            errorMessage: validationMessage.USER_NAME1
        },
        pattern: {
            value: Regex.NAME,
            errorMessage: validationMessage.USER_NAME2
        }
    },
    CPASSWORD: {
        required: {
            value: true,
            errorMessage: validationMessage.PASSWORD3
        },
        minLength: {
            value: 8,
            errorMessage: validationMessage.PASSWORD2
        }
    },
    EVENT_NAME: {
        required: {
            value: true,
            errorMessage: validationMessage.EVENT_NAME1
        },
        pattern: {
            value: Regex.NAME,
            errorMessage: validationMessage.EVENT_NAME2
        }
    },
    LOCATION: {
        required: {
            value: true,
            errorMessage: validationMessage.LOCATION
        }
    }
}