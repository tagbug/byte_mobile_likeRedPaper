import { RouteConfig } from "react-router-config";
import { Redirect } from "react-router-dom";
import Search from "../page/Search";
import Tabbar from "../page/Tabbar";
import HomePage from "../page/Tabbar/HomePage";
import Message from "../page/Tabbar/Message";
import Mine from "../page/Tabbar/PersonalCenter";

const routes = [
    {
        path: "/",
        exact: true,
        render: () => <Redirect to="/tabbar" />
    },
    {
        path: "/tabbar",
        component: Tabbar,
        routes: [
            {
                path: "/tabbar",
                exact: true,
                render: () => <Redirect to="/tabbar/home" />
            },
            {
                path: "/tabbar/home",
                exact: true,
                component: HomePage,
            },
            {
                path: "/tabbar/message",
                exact: true,
                component: Message,
            },
            {
                path: "/tabbar/me",
                exact: true,
                component: Mine,
            },
        ]
    },
    {
        path: "/search",
        component: Search,
    }
]

export default routes;