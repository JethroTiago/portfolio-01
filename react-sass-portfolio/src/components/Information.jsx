import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import "../styles/components/information.sass";

const Information = () => {
  return <section id="info">
    <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
            <h3>Telefone</h3>
        </div>

    </div>

  </section>
};

export default Information;