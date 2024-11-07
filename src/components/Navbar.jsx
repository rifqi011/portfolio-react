import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import MenuList from "./MenuList";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [hasAnimated, setHasAnimated] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				if (!hasAnimated) {
					setHasAnimated(true); // Set flag agar animasi hanya sekali
					setScrolled(true);
				}
			} else {
				setScrolled(false);
				setHasAnimated(false); // Reset flag jika kembali ke atas
			}
		};

		window.addEventListener("scroll", handleScroll);

		// Bersihkan event listener saat komponen di-unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [hasAnimated]);

	return (
		<header className={`bg-black w-full py-4 fixed z-[99999] transition-all duration-500 ease-in-out ${scrolled ? "bg-black animate-header shadow-xl" : ""}`}>
			<div className="container flex items-center justify-between">
				<Logo />

				<MenuList />
			</div>
		</header>
	);
};

export default Navbar;
