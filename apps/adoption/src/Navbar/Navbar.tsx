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
          Username={item.Username}
          Password={item.Password}
          signUp={item.signUp}
          signIn={item.signIn}

          />
      ))}
    </div>
  );
};
