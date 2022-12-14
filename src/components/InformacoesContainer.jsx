import "../styles/components/informacoescontainer.sass";

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const InformacoesContainer = () => {
  return (
  <section id="informacao">
    <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
            <h3>Telefone</h3>
            <p>(71) 99296-9091</p>
        </div>
    </div>
    <div className="info-card">
        <AiOutlineMail id="mail-icon" />
        <div>
            <h3>E-mail</h3>
            <p>jethrotiago@hotmail.com</p>
        </div>
    </div>
    <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
            <h3>Localização</h3>
            <p>Curitiba / Paraná</p>
        </div>
    </div>
  </section>
  );
};

export default InformacoesContainer;