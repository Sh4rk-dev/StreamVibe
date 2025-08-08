import { Search } from "@/components/Seaching";
import { ModalContext } from "@/context/useModal";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";

interface ModalRootProps {
  children?: React.ReactNode;
}

export function ModalRoot({ children }: ModalRootProps) {
  const { handleOpenModal } = useContext(ModalContext);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex justify-center items-start pt-5 w-[1600px] h-[800px] bg-Custom-Black-12 border border-Custom-Black-15 rounded-2xl ">
        {children}
      </div>

      <XMarkIcon
        onClick={handleOpenModal}
        className="absolute top-5 right-5 h-6 w-6 text-Custom-Gray-75 cursor-pointer hover:text-Custom-Gray-60"
      />
    </div>
  );
}

export function ModalContentRoot({ children }: ModalRootProps) {
  return <div className="flex w-full p-5">{children}</div>;
}

export function ModalSearching() {
  return <Search onSearch={() => {}} />;
}
