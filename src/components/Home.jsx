import React from "react";
import HomeImage from "./../assets/img/home.png";
import SocialLinks from "./SocialLinks";
import ButtonPrimary from "./ButtonPrimary";

const Home = () => {
	return (
		<section id="home" className="flex w-full gap-12 justify-between items-center container section">
			<div className="flex flex-col gap-4 items-start basis-3/5">
				<p className="text-3xl">Hello</p>
				<h1 className="flex font-medium text-[50px] leading-[65px] flex-wrap">
					I am&nbsp;
					<span className="headline font-bold bg-gradient-to-r from-orange via-purple to-purple bg-clip-text text-transparent bg-[length:200%] cursor-pointer transition-all duration-700 ease-in-out hover:bg-[length:100%] hover:bg-position-[right] hover:drop-shadow-[0px_0px_5px_#9024b6]">Rifqi Banu Safingi</span>
				</h1>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quae, odio numquam magni qui nisi officiis mollitia a magnam amet?</p>
			
                <SocialLinks />

                <ButtonPrimary content={"Contact"} icon={"bx-paper-plane"}/>
            </div>
			<div className="basis-2/5">
				<img src={HomeImage} className="w-full" alt="HomeImage" />
			</div>
		</section>
	);
};

export default Home;
