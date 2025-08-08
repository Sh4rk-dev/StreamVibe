import { NavItem, NavItemList } from "@/components/Header/NavItem";

export function NavItens() {
  const pathName = window.location.pathname.split("/")[1];
  return (
    <>
      <div className="flex rounded-xl border-2 border-Custom-Black-20 bg-Custom-Black-06 p-1.5 px-4 ">
        <ul className="flex items-center gap-5 text-Custom-Gray-75">
          {NavItemList.map((item, index) => (
            <NavItem
              isActive={pathName === item.url.replace("/", "")}
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              title={item.title}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
