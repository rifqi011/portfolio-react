import GithubIcon from "./../assets/icon/github.svg";
import InstagramIcon from "./../assets/icon/instagram.svg";
import LinkedinIcon from "./../assets/icon/linkedin.svg";
import XIcon from "./../assets/icon/x.svg";

const socialLinksData = [
	{ href: "https://www.instagram.com/alcyoneuzz?igsh=enVnaTBibnB1MjZx", alt: "Instagram", src: InstagramIcon },
	{ href: "https://x.com/bukananaksd", alt: "X", src: XIcon },
	{ href: "https://www.linkedin.com/in/rifqi-banu-safingi-94b36b302/", alt: "LinkedIn", src: LinkedinIcon },
	{ href: "https://github.com/rifqi011", alt: "GitHub", src: GithubIcon },
];

const SocialLinks = () => {
	return (
		<ul className="flex gap-4 py-2">
			{socialLinksData.map((link, index) => (
				<li key={index} className="w-[40px] h-[40px] flex justify-center items-center border-2 border-[#ffffff0a] rounded-full cursor-pointer">
					<a href={link.href} target="_blank" rel="noopener noreferrer">
						<img src={link.src} alt={link.alt} className="flex items-center justify-center place-items-center" />
					</a>
				</li>
			))}
		</ul>
	);
};

export default SocialLinks;
