import { NavBar } from 'antd-mobile'
import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'
import MessageInput from '../../component/MessageInput'
import { LeftPropover, RightPropover } from '../../component/Propover'

export default memo(function MessageDetail() {
    const history = useHistory();
    const back = () => {
        history.go(-1);
    }
    return (
        <div>
            <NavBar onBack={back}>昵称</NavBar>
            <RightPropover></RightPropover>
            <LeftPropover></LeftPropover>
            <MessageInput></MessageInput>
        </div>
    )
})
