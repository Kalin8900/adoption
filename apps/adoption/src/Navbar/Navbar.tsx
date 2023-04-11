import { NavbarItem } from '../Navbar/Navbar-item';
import navbarItems from '../data.json';

export const Navbar = () => {
  return (
    <div>
      {navbarItems.navbarItems.map((item) => (
        <NavbarItem
          image={item.image}
          infoPhone={item.infoPhone}
          infoEmail={item.infoEmail}

          />
      ))}
    </div>
  );
};
