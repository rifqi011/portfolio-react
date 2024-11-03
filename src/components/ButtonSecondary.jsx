import React from "react";

const ButtonPrimary = ({ content, event, icon }) => {
	return (
		<button onClick={event} className="group relative text-lg capitalize font-medium text-black flex justify-between items-center transition-all duration-500">
			{content}&nbsp;<i className={`transition-all duration-500 ease-in group-hover: transform group-hover:translate-x-2 text-xl bx ${icon}`}></i>
			<span className="bg-gradient-1 absolute block h-[3px] w-[100px] rounded-full transition-all duration-500 ease-in top-full group-hover:w-[75px]"></span>
		</button>
	);
};

export default ButtonPrimary;
