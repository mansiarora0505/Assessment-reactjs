import React from "react";
import { routePath } from "./constants/appRoutes";

const EventList = React.lazy(() => import("./Views/Event/EventList"));
const CreateEvent = React.lazy(() => import("./Views/Event/CreateEvent"));
const Login = React.lazy(() => import("./Views/Auth/Login"));


export const routes = [
    {
        path: routePath.EVENT_LIST,
        exact: true,
        component: EventList
    },
    {
        path: routePath.CREATE_EVENT,
        exact: true,
        component: CreateEvent
    },
    {
        path: routePath.LOGIN,
        exact: true,
        component: Login
    }
]