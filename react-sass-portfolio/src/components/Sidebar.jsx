import SocialNetwork from './SocialNetwork';

import Avatar from '../img/Jethro-Avatar01.jpg';

import '../styles/components/sidebar.sass';

const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="Jethro Tiago"/>
    <p className="title">Desenvolvedor Front-End</p>
    <SocialNetwork/>
    <Information/>
    <a href="" className="btn">
      Download Currículo
    </a>
  </aside>
}

export default Sidebar