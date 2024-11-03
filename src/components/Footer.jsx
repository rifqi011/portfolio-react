import Logo from "./Logo";
import MenuList from "./MenuList";
import SocialLinks from "./SocialLinks";

const Footer = () => {
	let currentYear = new Date().getFullYear();

	return (
		<footer className="mt-20 bg-gray px-[10%] py-[5%]">
			<div className="flex items-center justify-between">
				<Logo />

				<MenuList />

				<SocialLinks />
			</div>

			<hr className="mt-12 mb-4" />

			<div className="flex items-center">
				<p>Copyright © {currentYear} Rifqi Banu Safingi. All rights reserved. Made with ❤️ in Indonesia.</p>
			</div>
		</footer>
	);
};

export default Footer;
