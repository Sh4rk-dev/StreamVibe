import { NavItens } from "@/components/Header/NavItens";

export function Header() {
  return (
    <header className="flex items-center justify-between gap-10 py-8">
      <picture className="h-12 w-40 bg-contain bg-no-repeat">
        <img alt="Logo" src="/src/assets/icons/Logo-Desk.svg" />
      </picture>

      <NavItens />
    </header>
  );
}
