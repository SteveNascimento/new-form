import React from 'react'
import FormComp from './Form'
import { Layout } from 'antd'
import './App.css'

const { Content } = Layout

const App = () => {
    return (
        <Content className='form'>
            <FormComp />
        </Content>
    )
}

export default App