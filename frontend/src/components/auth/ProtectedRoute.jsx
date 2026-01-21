import useAuth from "../../hooks/useAuth";
import useModal from "../../hooks/useModal";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();
  const { openLogin } = useModal();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      openLogin();
    }
  }, [isAuthenticated, loading]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return isAuthenticated ? <Outlet /> : null;
};

export default ProtectedRoute;
