import React from 'react'
import { Routes } from 'react-router-dom';

import Header from '../components/section/Header'
import Main from '../components/section/Main'
import Footer from '../components/section/Footer'
import Intro from './Intro'

const Home = () => {
    return (
        <>
            <Header />
            <Main>
                <Routes>
                    <Intro />
                </Routes>
            </Main>
            <Footer />
        </>
    )
}

export default Home