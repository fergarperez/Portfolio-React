import { Header } from './components/Header';
import { Main } from './components/Main';
import { MainCover } from './components/MainCover';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { useState } from 'react';
import { ContactMe } from './components/ContactMe';

function App () {

  const [form, setForm] = useState(false);

  return (
    <>
      <Header setForm={setForm}/>
      { form && <ContactMe setForm={setForm}/>}
      <Main>
        <MainCover />
        <AboutMe />
        <Projects />
        <Skills />
      </Main>
    </>
  );
}

export default App;
