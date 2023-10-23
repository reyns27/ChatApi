import React from 'react';
import { useRoutes } from 'react-router-dom';
import DashboardChat from '../chat/DashboardChat';
import Chat from '../chat/Chat';
const RouterManager = () => {
    const routes = [
        {
            path: '/',
            element: <DashboardChat />
        },
        {
            path:'/chat',
            element:<Chat />
        }
    ];
    const router = useRoutes(routes);
    return router;
}

export default RouterManager
