import { Fragment } from "react";
import Modal from "./Modal";
import UploadForm from "../components/UploadForm";

const ModalUpload = (props) => {
  const modalClose = () => {};

  return (
    <Fragment>
      {props.modal && (
        <Modal onClose={modalClose}>
          {<UploadForm onModalClose={props.onModalClose} />}
        </Modal>
      )}
    </Fragment>
  );
};

export default ModalUpload;
