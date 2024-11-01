import React from "react";
import Logo from "./Logo";
import MenuList from "./MenuList";

const Navbar = () => {
	return (
		<div className="w-full bg-black py-4 fixed z-[99999]">
			<div className="container flex items-center justify-between">
                <Logo size={"big"}/>

                <MenuList />
			</div>
		</div>
	);
};

export default Navbar;
