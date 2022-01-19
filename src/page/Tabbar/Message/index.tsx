import { memo } from 'react'
import { Space, NavBar } from 'antd-mobile'
import { HeartFill, MessageFill, TeamFill, MoreOutline } from 'antd-mobile-icons'
import styled from 'styled-components'
import MessageList from '../../../component/MessageList'



export default memo(function Message() {
    const right = (
        <div style={{ fontSize: 20 }}>
            <Space>
                <MoreOutline />
            </Space>
        </div>
    )

    return (
        <>
            <NavBar right={right}>
                消息
            </NavBar>

            <Space wrap style={{ fontSize: 36 }}>
                <IconContainer>
                    <HeartFill color='#ed7370'></HeartFill>
                    <TeamFill color='#5690f3' />
                    <MessageFill color='#59ce9e' />
                </IconContainer>
            </Space>

            <MessageList></MessageList>
        </>
    )
})
const IconContainer = styled.div`
    width: 100vw;
    padding: 20px 0;
    display: flex;
    justify-content: space-around; 
`