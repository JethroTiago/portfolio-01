import '../styles/components/maincontent.sass';
import AboutContainer from './AboutContainer';
import TecnologiasContainer from './TecnologiasContainer';
import ProjetosContainer from './ProjetosContainer';

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <TecnologiasContainer />
      <ProjetosContainer />
    </main>
  )
}

export default MainContent