import useModal from '../hooks/useModal';
import Modal from 'react-bootstrap/Modal';
import { Image } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthModal = () => {
  const { isAuthFormOpen, closeForm, formMode } = useModal();

  return (
    <Modal
      show={isAuthFormOpen}
      onHide={closeForm}
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto">
          <Image className="bi me-2" src={logo} alt="Logo" width="40" height="32" />
          <span className="fs-4">{formMode}</span>
        </div>
      </Modal.Header>
      <Modal.Body className="p-3">
        {formMode === 'Sign In' ? <LoginForm /> : <RegisterForm />}
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;