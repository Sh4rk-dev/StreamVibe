import { NavItem, NavItemList } from "@/components/Header/NavItem";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { BellIcon } from "@heroicons/react/24/outline";

export function NavItens() {
  const pathName = window.location.pathname;

  return (
    <>
      <div className="flex p-1.5 px-4 bg-Custom-Black-06 rounded-xl border-2 border-Custom-Black-20 ">
        <ul className="flex gap-5 text-Custom-Gray-75 items-center">
          {NavItemList.map((item, index) => (
            <NavItem
              key={index}
              title={item.title}
              isActive={pathName === item.url}
            />
          ))}
        </ul>
      </div>
      <div className="flex flex-row gap-8">
        <MagnifyingGlassIcon className="w-6 h-6 text-Custom-Gray-75" />
        <BellIcon className="w-6 h-6 text-Custom-Gray-75" />
      </div>
    </>
  );
}
