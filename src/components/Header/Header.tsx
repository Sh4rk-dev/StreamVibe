import { NavItens } from "@/components/Header/NavItens";
import {
  ModalContentRoot,
  ModalRoot,
  ModalSearching,
} from "@/components/Modal";
import { ModalContext } from "@/context/useModal";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useContext } from "react";

export function Header() {
  const { openModal, handleOpenModal } = useContext(ModalContext);

  return (
    <header className="flex items-center justify-center gap-10 py-8">
      <div className="flex justify-between items-center w-full">
        <picture className="h-12 w-40 bg-contain bg-no-repeat">
          <img alt="Logo" src="/src/assets/icons/Logo-Desk.svg" />
        </picture>

        <div className="flex items-center justify-center">
          <NavItens />
        </div>

        <div className="flex flex-row gap-8">
          <MagnifyingGlassIcon
            onClick={handleOpenModal}
            className="h-6 w-6 text-Custom-Gray-75 cursor-pointer hover:text-Custom-Gray-60"
          />
          <BellIcon className="h-6 w-6 text-Custom-Gray-75 cursor-pointer hover:text-Custom-Gray-60" />
        </div>
      </div>

      {openModal && (
        <div className="absolute w-full h-full bg-black/80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <ModalRoot>
            <ModalContentRoot>
              <ModalSearching />
            </ModalContentRoot>
          </ModalRoot>
        </div>
      )}
    </header>
  );
}
