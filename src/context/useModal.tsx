import { createContext, useState } from "react";

interface ModalContextType {
  openModal: boolean;
  handleOpenModal: () => void;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  results: any[];
  setResults: React.Dispatch<React.SetStateAction<any[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextType>({} as ModalContextType);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [openModal, setOpenModal] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleOpenModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <ModalContext.Provider
      value={{
        openModal,
        handleOpenModal,
        query,
        setQuery,
        results,
        setResults,
        loading,
        setLoading,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider, ModalContext };
