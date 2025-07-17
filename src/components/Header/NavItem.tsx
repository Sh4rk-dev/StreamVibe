import { Link } from "react-router";

interface NavItemProps {
  title: string;
  isActive?: boolean;
}

function NavItem({ title, isActive }: NavItemProps) {
  return (
    <Link to={title === "Home" ? "/" : `/${title.toLowerCase()}`}>
      <li
        className={`list-none ${
          isActive ? "px-5 py-3 bg-Custom-Black-10 rounded-lg" : ""
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
    title: "Movies&Shows",
    url: "/movies&shows",
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
