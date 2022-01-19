import { NavBar, Space, List, Avatar } from 'antd-mobile'
import React, { memo } from 'react'
import { MoreOutline, SendOutline } from 'antd-mobile-icons'
import styled from 'styled-components'
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

    return (
        <div>
            <NavBar right={right} left={left} backArrow={false}></NavBar>
            <ItemContainer className='ItemContainer'>
                <List.Item
                    prefix={<Avatar src={demoAvatarImages[0]} style={{ borderRadius: '50%', '--size': '90px' }} />}
                    description='Deserunt dolor ea eaque eos'
                >
                    Novalee Spicer
                </List.Item>
            </ItemContainer>
        </div>
    )
})
const demoAvatarImages = [
    'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
]
const ItemContainer = styled.div`
    display: flex;
    .adm-list-item {
        margin: 0 auto;
        .adm-list-item-content-main {
            display: flex;
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