import { createContext, useState, useMemo } from "react";

const ModalContext = createContext(null);

const ModalProvider = ({ children }) => {
    const [isAuthFormOpen, setIsAuthFormOpen] = useState(false);
    const [formMode, setFormMode] = useState("Sign In");

    const openLogin = () => {
        setFormMode("Sign In");
        setIsAuthFormOpen(true);
    };
    
    const openRegister = () => {
        setFormMode("Sign Up");
        setIsAuthFormOpen(true);
    };

    const closeForm = () => setIsAuthFormOpen(false);

    const value = useMemo(() => ({
        isAuthFormOpen,
        formMode,
        setFormMode,
        openLogin,
        openRegister,
        closeForm
    }), [isAuthFormOpen, formMode]);

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    );
}

export { ModalContext, ModalProvider};