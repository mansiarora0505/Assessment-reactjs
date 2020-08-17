export const validationMessage = {
    EMAIL1: "Please enter email",
    PASSWORD1: "Please enter password",
    USER_NAME1: "Please enter user name",
    EMAIL2: "Invalid email",
    PASSWORD2: "Password must be atleast 8 characters long",
    PASSWORD3: "Please re-enter the password",
    USER_NAME2: "Invalid user name",
    EVENT_NAME1: "Please enter event name",
    EVENT_NAME2: "Invalid event name",
    DATE1: "Please enter event date",
    LOCATION: "Please enter location",
    STEP: "Invalid time duration",
}
export const Regex = {
    EMAIL: /^([a-zA-Z0-9_\-\.]+){2,4}@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
    NAME: /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/,
    STEP: /^[0-9]{1,}$/
}

export const authStrings = {
    TEXT1: "LOGIN",
    EMAIL_LABEL: "Email",
    PASSWORD_LABEL: "Password",
    SHOW_PASSWORD: "Show password",
    LOGIN: "Login",
    TEXT2: "Don't have an account?",
    LINK1: "Signup",
    ALERT: "password did not match",
    TEXT3: "SIGNUP",
    NAME_LABEL: "User Name",
    C_PASSWORD: "Confirm Password",
    SIGNUP: "Submit",
    TEXT4: "Already have an account?"
}

export const eventHeadings = [
    "Event Name",
    "Date",
    "Start Time",
    "End Time",
    "Location",
]