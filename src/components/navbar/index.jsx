import React from "react";
import HeaderTop from "../componentlar/header_top";
import NavbarTexnomart from "../componentlar/navbar_texnomart";
import TopCategoriesPage from "../componentlar/header_bottom";

function Navbar() {
  return (
    <div>
      <HeaderTop />
      <NavbarTexnomart />
      <TopCategoriesPage />
    </div>
  );
}

export default Navbar;
