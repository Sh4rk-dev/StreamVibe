import { NavItens } from "@/components/Header/NavItens";

export function Header() {
  return (
    <header className="flex items-center justify-between gap-10 py-8">
      <picture className="w-40 h-12 bg-no-repeat bg-contain">
        <img src="/src/assets/icons/Logo-Desk.svg" />
      </picture>

      <NavItens />
    </header>
  );
}
