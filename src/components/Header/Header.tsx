import {
  Bars3Icon,
  BellIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/16/solid';
import { useContext } from 'react';
import { NavItens } from '@/components/Header/NavItens';
import {
  ModalContentRoot,
  ModalRoot,
  ModalSearching,
} from '@/components/Modal';
import { ModalContext } from '@/context/useModal';

export function Header() {
  const { openModal, handleOpenModal } = useContext(ModalContext);

  return (
    <header className="flex w-full items-center justify-center gap-10 px-10 py-8 lg:px-40">
      <div className="flex w-full items-center justify-between">
        <picture className="h-12 w-40 bg-contain bg-no-repeat">
          <img alt="Logo" src="/src/assets/icons/Logo-Desk.svg" />
        </picture>

        <div className="hidden lg:flex lg:items-center lg:justify-center">
          <NavItens />
        </div>

        <div>
          <div className="hidden gap-8 lg:flex">
            <MagnifyingGlassIcon
              className="h-6 w-6 cursor-pointer text-Custom-Gray-75 hover:text-Custom-Gray-60"
              onClick={handleOpenModal}
            />
            <BellIcon className="h-6 w-6 cursor-pointer text-Custom-Gray-75 hover:text-Custom-Gray-60" />
          </div>

          <button
            className="rounded-lg border-2 border-Custom-Black-15 bg-Custom-Black-10 p-3 lg:hidden"
            type="button"
          >
            <Bars3Icon className="bor h-6 w-6 text-Custom-Gray-75" />
          </button>
        </div>
      </div>

      {openModal && (
        <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-full w-full bg-black/80 ">
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
