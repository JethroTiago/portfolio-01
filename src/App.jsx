import ConteudoPrincipal from "./components/ConteudoPrincipal";
import Sidebar from "./components/Sidebar";

import "./styles/components/app.sass";

function App() {
  return (
    <div id="portfolio">
      <h1>Jethro Tiago</h1>
      <Sidebar />
      <ConteudoPrincipal />
    </div>
  );
}

export default App
