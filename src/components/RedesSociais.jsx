import {FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa";

import "../styles/components/redessociais.sass";

const redessociais = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
  { name: "github", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> },
];

const RedesSociais = () => {
  return (
    <section id="redes-sociais">
      {redessociais.map((network) => (
        <a href='#' className='social-btn' id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default RedesSociais;