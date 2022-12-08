import RedesSociais from './RedesSociais';

import Avatar from '../img/Jethro-Avatar01.jpg';

import '../styles/components/sidebar.sass';
import InformacoesContainer from './InformacoesContainer';

const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="Jethro Tiago"/>
    <p className="title">Desenvolvedor Front-End</p>
    <RedesSociais />
    <InformacoesContainer />
    <a href="" className="btn">
      Download Currículo
    </a>
  </aside>
}

export default Sidebar