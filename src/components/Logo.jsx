import React from "react";
import LogoImage from "./../assets/img/logo.png"; // Pastikan nama import logo tidak sama dengan komponen

const Logo = ({ size }) => {
	// Tentukan kelas berdasarkan parameter size
	const imgSize = size === "big" ? "w-[70px]" : "w-[60px]";
	const textSize = size === "big" ? "text-3xl" : "text-2xl";

	return (
		<a href="#" className="flex items-center justify-between gap-4">
			<img src={LogoImage} alt="Logo" className={imgSize} />
			<h1 className={`font-normal ${textSize}`}>Rifqi Banu Safingi</h1>
		</a>
	);
};

export default Logo;
