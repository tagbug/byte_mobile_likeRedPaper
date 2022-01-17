import { FC } from 'react'
import { TabBar } from 'antd-mobile'
import styled from 'styled-components';
import {
    Switch,
    Route,
    useHistory,
    useLocation,
    MemoryRouter as Router,
} from 'react-router-dom'
import {
    AppOutline,
    MessageOutline,
    UserOutline,
} from 'antd-mobile-icons'
import HomePage from './HomePage';
import Message from './Message';
import PersonalCenter from './PersonalCenter';
import { renderRoutes } from 'react-router-config';
import routes from '../../routes';

const Bottom: FC = () => {
    const history = useHistory()
    const location = useLocation()
    const { pathname } = location
    console.log(pathname);

    const setRouteActive = (value: string) => {
        history.push(value)
    }

    const tabs = [
        {
            key: '/tabbar/home',
            title: '首页',
            icon: <AppOutline />,
        },
        {
            key: '/tabbar/message',
            title: '我的消息',
            icon: <MessageOutline />,
        },
        {
            key: '/tabbar/me',
            title: '个人中心',
            icon: <UserOutline />,
        },
    ]

    return (
        <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
            {tabs.map(item => (
                <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))}
        </TabBar>
    )
}


const Tabbar = (props: any) => {

    const route = props.route; 
    console.log(route);
    

    return (
        <TabbarContainer>
            <div className="app">
                <div className="body">
                    {route && renderRoutes(route.routes)} 
                </div>
                <div className="bottom">
                    <Bottom />
                </div>
            </div>
        </TabbarContainer>
    )
}

export default Tabbar;

const TabbarContainer = styled.div` 
    .body {
        height: 90vh;
    }
` 