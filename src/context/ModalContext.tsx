import { useEffect, createContext, useState, ReactNode } from "react"
import { UploadImage } from "../components/UploadImage";

type ModalContextType = {
  openModal: () => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);


export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false)

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <UploadImage/>
        </div>
      )}
    </ModalContext.Provider>
  );
}

