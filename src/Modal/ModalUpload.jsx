import { Fragment } from "react";
import Modal from "./Modal";
import UploadFormWrapper from "../components/form/UploadFormWrapper";

const ModalUpload = (props) => {
  const modalClose = () => {};

  return (
    <Fragment>
      {props.modal && (
        <Modal onClose={modalClose}>
          {<UploadFormWrapper onModalClose={props.onModalClose} />}
        </Modal>
      )}
    </Fragment>
  );
};

export default ModalUpload;
