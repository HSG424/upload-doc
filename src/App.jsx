import { useState } from "react";
import ModalUpload from "./Modal/ModalUpload";

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
      <button type="button" onClick={popModalHandler}>
        Pop Modal
      </button>
      <ModalUpload modal={modal} onModalClose={closeModalHandler} />
    </>
  );
}

export default App;
