import { NavBar, Space, List, Avatar, Tabs } from 'antd-mobile'
import React, { memo, useEffect, useState } from 'react'
import { MoreOutline, SendOutline } from 'antd-mobile-icons'
import styled from 'styled-components'
import { getUserInfo } from '../../../services/users'
import EditInfo from './EditInfo'


export default memo(function PersonalCenter() {
    const right = (
        <div style={{ fontSize: 20 }}>
            <Space>
                <SendOutline />
            </Space>
        </div>
    )

    const left = (
        <div style={{ fontSize: 20 }}>
            <Space>
                <MoreOutline />
            </Space>
        </div>
    )
    const [userInfo, setUserInfo] = useState();
    useEffect(async () => {
        try {
            const res = await getUserInfo({ userId: 1 });
            setUserInfo(res.user);
        } catch (err) {
            console.log(err);
        }

    }, [])

    return (
        <div>
            <NavBar right={right} left={left} backArrow={false}></NavBar>
            <ItemContainer className='ItemContainer'>
                {userInfo ?
                    <List.Item
                        prefix={<Avatar src={userInfo.Avatar}
                            style={{ borderRadius: '50%', '--size': '90px' }} />}
                        description={userInfo.description}
                    >
                        {userInfo.nickname}
                    </List.Item>
                    : <></>
                }
            </ItemContainer>
            <EditInfo />
            <TabsWrapper>
                <Tabs defaultActiveKey='1'>
                    <Tabs.Tab title='笔记' key='1'> 1 </Tabs.Tab>
                    <Tabs.Tab title='收藏' key='2'> 2 </Tabs.Tab>
                    <Tabs.Tab title='赞过' key='3'> 3 </Tabs.Tab>
                </Tabs>
            </TabsWrapper>
        </div>
    )
})

const ItemContainer = styled.div`
    display: flex;
    .adm-list-item {
        margin-left: 30px;
        .adm-list-item-content-main {
            display: flex;
            padding-left: 10px;
            flex-direction: column; 
            justify-content: center;
            font-size: 20px;
            line-height: 30px;
        .adm-list-item-description {
            font-size: 16px;
        }
    }
    }
    
`
const TabsWrapper = styled.div`
    margin-top: 10px;
`