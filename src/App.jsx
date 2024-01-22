import { useState } from "react";
import ModalUpload from "./Modal/ModalUpload";
import Button from "./components/form/Button";
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
        <Button
          type="button"
          text="Click to Pop Modal"
          onClick={popModalHandler}
        />
      </div>
      <ModalUpload modal={modal} onModalClose={closeModalHandler} />
    </>
  );
}

export default App;
