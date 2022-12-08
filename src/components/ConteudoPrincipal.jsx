import SobreContainer from './SobreContainer';
import TecnologiasContainer from './TecnologiasContainer';
import ProjetosContainer from './ProjetosContainer';

import '../styles/components/conteudoprincipal.sass';

const ConteudoPrincipal = () => {
  return (
    <main id="conteudo-principal">
      <SobreContainer />
      <TecnologiasContainer />
      <ProjetosContainer />
    </main>
  )
}

export default ConteudoPrincipal