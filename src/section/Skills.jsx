import SectionTitle from "../components/SectionTitle";
import WebIcon from "../assets/icon/webicon.svg";
import UIUXIcon from "../assets/icon/uiuxicon.svg";
import DesignerIcon from "../assets/icon/graphicdesignicon.svg";

const SkillsData = [
	{ icon: WebIcon, title: "web developer", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet pariatur voluptate voluptates iusto libero quod in quis minus aut eaque!" },
	{ icon: UIUXIcon, title: "UI/UX designer", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet pariatur voluptate voluptates iusto libero quod in quis minus aut eaque!" },
	{ icon: DesignerIcon, title: "graphic designer", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet pariatur voluptate voluptates iusto libero quod in quis minus aut eaque!" },
];

const Skills = () => {
	return (
		<section id="skills" className="flex flex-col items-center gap-12 py-20 container">
			<SectionTitle title={"skills"} description={"my expertise"} alignment={"text-center"} />

			<div className="grid grid-cols-2 justify-center mx-auto gap-5">
				{SkillsData.map((skill, index) => (
					<div key={index} className={`bg-white text-black flex items-center w-[500px] p-8 rounded-2xl gap-8 ${index % 2 === 0 && index === SkillsData.length - 1 ? "col-span-2 justify-self-center" : ""}`}>
						<div className="flex w-[400px] text-purple items-center">
							<img src={skill.icon} alt="" />
						</div>

						<div className="">
							<h3 className="capitalize text-purple text-3xl font-base mb-4">{skill.title}</h3>
							<p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet pariatur voluptate voluptates iusto libero quod in quis minus aut eaque!</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
