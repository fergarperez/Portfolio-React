import { useState } from 'react'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { MainCover } from './components/MainCover'
import { AboutMe } from './components/AboutMe'

function App() {
  return (
    <>
      <Header />
      <Main>
        <MainCover />
        <AboutMe />
      </Main>
    </>
  )
}

export default App
