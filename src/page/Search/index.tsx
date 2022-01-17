import { SearchBar } from 'antd-mobile'
import React, { memo } from 'react'

export default memo(function Search() {
    return (
        <div>
            <SearchBar placeholder='请输入内容' />
        </div>
    )
})
