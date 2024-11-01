import React from "react";
import LogoImage from "./../assets/img/logo.png"; // Pastikan nama import logo tidak sama dengan komponen

const Logo = () => {
	return (
		<a href="#" className="flex items-center justify-between gap-4">
			<img src={LogoImage} alt="Logo" className="w-16" />
			<h1 className={"font-normal text-2xl"}>Rifqi Banu Safingi</h1>
		</a>
	);
};

export default Logo;
