import { useState } from "react";
import ModalUpload from "./Modal/ModalUpload";
import "./app.scss";

function App() {
  const [modal, setModal] = useState(false);

  const popModalHandler = () => {
    setModal(true);
  };

  const closeModalHandler = () => {
    setModal(false);
  };

  return (
    <>
      <div className="btn-container">
        <button type="button" onClick={popModalHandler}>
          Click to Pop Modal
        </button>
      </div>
      <ModalUpload modal={modal} onModalClose={closeModalHandler} />
    </>
  );
}

export default App;
