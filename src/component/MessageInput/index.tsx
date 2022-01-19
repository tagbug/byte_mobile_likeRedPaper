import React, { useState } from 'react'
import { Input, List } from 'antd-mobile'

export default () => {
    const [value, setValue] = useState('')
    return (
        <Input
            placeholder='请输入内容'
            value={value}
            onChange={val => {
                setValue(val)
            }}
            style={{'border': '7px solid #f5f7fa', }}
        />
    )
}