import { ContainerButton } from "./Container-Button";

export function Header() {
  return (
    <header className="flex items-center justify-around gap-10 px-40 p-8">
      <img
        src="/src/assets/Logo-Desk.svg"
        className="w-40 h-12 bg-no-repeat bg-contain"
      />
      <ContainerButton />
    </header>
  );
}
