import { memo } from 'react'
import { Space, Button } from 'antd-mobile'


export default memo(function Message() {
    return (
        <Space style={{ '--gap': '24px' }}>
            <Button>按钮1</Button>
            <Button>按钮2</Button>
            <Button>按钮3</Button>
        </Space>
    )
})
