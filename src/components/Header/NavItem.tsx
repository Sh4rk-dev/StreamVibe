import { Link } from "react-router-dom";

interface NavItemProps {
  title: string;
  isActive?: boolean;
}

const generatorSlug = (title: string) => {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/&/g, "and") // troca & por 'and'
    .replace(/[^a-zA-Z0-9 ]/g, "") // remove caracteres especiais
    .trim()
    .replace(/\s+/g, "-") // troca espaços por hífen
    .toLowerCase();
};

function NavItem({ title, isActive }: NavItemProps) {
  const slug = title === "Home" ? "/" : `/${generatorSlug(title)}`;

  return (
    <Link to={slug}>
      <li
        className={`list-none ${
          isActive ? "rounded-lg bg-Custom-Black-10 px-5 py-3" : ""
        }`}
      >
        {title}
      </li>
    </Link>
  );
}

const NavItemList = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Movies & Shows",
    url: "/movies-and-shows",
  },
  {
    title: "Support",
    url: "/support",
  },
  {
    title: "Subscriptions",
    url: "/subscriptions",
  },
];

export { NavItemList, NavItem };
