import "./App.css";

import { Header } from "../Header";
import { Footer } from "../Footer";
import { Main } from "../Main";


function App() {
  return (
    <div className="page">
      <Header></Header>
      <Main />
      <Footer />
    </div>
  );
}


export default App;