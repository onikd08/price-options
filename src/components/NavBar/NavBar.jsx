import { useState } from "react";
import NavLink from "../NavLink/NavLink";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Products", path: "/products" },
  ];

  const [navIcon, setNavIcon] = useState(false);

  return (
    <nav className="bg-yellow-200 p-2 text-black">
      <div className="text-2xl md:hidden" onClick={() => setNavIcon(!navIcon)}>
        {navIcon ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <ul
        className={`-ml-2 duration-1000 bg-yellow-200 md:flex justify-evenly absolute md:static ${
          navIcon ? "top-10" : "-top-60"
        }`}
      >
        {routes.map((route) => (
          <NavLink key={route.id} route={route}></NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
