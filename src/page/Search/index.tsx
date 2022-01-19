import { NavBar, SearchBar } from 'antd-mobile'
import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';

export default memo(function Search() {
    const history = useHistory();
    const back = () => {
        history.go(-1);
    }
    return (
        <SearchContainer>
            <NavBar onBack={back} >
                <SearchBar className='searchBar' placeholder='请输入内容' />
            </NavBar>
        </SearchContainer>
    )
})

const SearchContainer = styled.div`
    border: none;
    margin-top: 10px;
`