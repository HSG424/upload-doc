import Modal from "./Modal";
import UploadFormWrapper from "../components/form/UploadFormWrapper";

const ModalUpload = (props) => {
  const modalClose = () => {};

  return (
    <>
      {props.modal && (
        <Modal onClose={modalClose}>
          {<UploadFormWrapper onModalClose={props.onModalClose} />}
        </Modal>
      )}
    </>
  );
};

export default ModalUpload;
