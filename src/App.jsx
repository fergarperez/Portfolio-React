import { Header } from './components/Header';
import { Main } from './components/Main';
import { MainCover } from './components/MainCover';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

function App () {
  return (
    <>
      <Header />
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
