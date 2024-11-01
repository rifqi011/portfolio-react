import React from "react";

const MenuList = () => {
	return (
		<ul className="flex gap-4">
			{["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
				<li key={item} className="relative group">
					<a href={`#${item.toLowerCase()}`} className="text-base font-normal uppercase tracking-tighter transition-all duration-300">
						{item}
					</a>
					<span className="bg-gradient-1 absolute block h-[3px] w-0 transition-all duration-300 top-full left-1/2 transform -translate-x-1/2 group-hover:w-full"></span>
				</li>
			))}
		</ul>
	);
};

export default MenuList;
