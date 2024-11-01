import React from "react";
import HomeImage from "./../assets/img/home.png";
import SocialLinks from "./SocialLinks";
import ButtonPrimary from "./ButtonPrimary";

const Home = () => {
	return (
		<section id="home" className="flex w-full justify-between items-center container section">
			<div className="flex flex-col gap-4 items-start flex-1">
				<p className="text-3xl ">Hello</p>
				<h1 className="flex font-medium text-[50px] leading-[65px] flex-wrap">
					I am&nbsp;<span className="headline font-bold bg-gradient-2 bg-clip-text text-transparent bg-[length:200%] cursor-pointer transition-all duration-700 ease-in-out hover:bg-[length:100%] hover:bg-position-[right] hover:drop-shadow-[0px_0px_5px_purple]">Rifqi Banu Safingi</span>
				</h1>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quae, odio numquam magni qui nisi officiis mollitia a magnam amet?</p>

				<SocialLinks />
				<a href="#contact">
					<ButtonPrimary />
				</a>
			</div>
			<div className="flex-1 flex justify-end">
				<img src={HomeImage} className="w-[500px]" alt="HomeImage" />
			</div>
		</section>
	);
};

export default Home;
