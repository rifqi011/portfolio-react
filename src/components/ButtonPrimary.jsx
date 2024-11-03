import React from "react";

const ButtonPrimary = ({content, event, icon}) => {
	return (
		<button onClick={event} className="text-lg capitalize font-medium flex justify-between items-center bg-gradient-1 px-4 py-2 rounded-lg bg-[length:200%] transition-all duration-500 hover:bg-[length:100%] hover:drop-shadow-[0px_0px_10px_purple]">
			{content}&nbsp;<i className={`text-xl bx ${icon}`}></i>
		</button>
	);
};

export default ButtonPrimary;
