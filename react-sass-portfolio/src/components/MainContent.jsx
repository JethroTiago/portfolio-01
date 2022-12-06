import '../styles/components/maincontent.sass';
import AboutContainer from './AboutContainer';

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