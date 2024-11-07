import SectionTitle from "../components/SectionTitle";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import PortfolioImage from "../assets/portfolio-img/Image.png";

const PortfolioData = [
	{ image: PortfolioImage, title: "ahuse", description: "Lorem ipsum dolor sit, amet onsectetur adipisicing elit. Eveniet pariatur voluptate voluptates iusto libero quod in quis minus aut eaque!" },
	{ image: PortfolioImage, title: "ahuse", description: "Lorem ipsum dolor sit, amet onsectetur adipisicing elit. Eveniet pariatur voluptate voluptates iusto libero quod in quis minus aut eaque!" },
	{ image: PortfolioImage, title: "ahuse", description: "Lorem ipsum dolor sit, amet onsectetur adipisicing elit. Eveniet pariatur voluptate voluptates iusto libero quod in quis minus aut eaque!" },
];

const Portfolio = () => {
	return (
		<section id="portfolio" className="section container flex flex-col py-20 gap-12">
			<div className="flex justify-between">
				<SectionTitle title={"portfolio"} description={"latest project"} />

				<div className="flex items-center">
					<a href="/public/portfolio">
						<ButtonPrimary content={"All works"} icon={"bx-chevron-right"} />
					</a>
				</div>
			</div>

			<div className="flex gap-8 justify-between">
				{PortfolioData.map((data, index) => (
					<div className="bg-white text-black w-[400px] flex flex-col items-center rounded-2xl overflow-hidden" key={index}>
						<div className="flex">
							<img className="rounded-2xl object-cover overflow-hidden" src={data.image} alt="" />
						</div>

						<div className="flex flex-col pt-4 px-6 pb-8 gap-1">
							<h3 className="capitalize text-3xl font-bold">{data.title}</h3>
							<p className="text-justify text-base mb-2">Lorem ipsum dolor sit, amet onsectetur adipisicing elit. Eveniet pariatur voluptate voluptates iusto libero quod in quis minus aut eaque!</p>

							<a href="" className="w-[100px]">
								<ButtonSecondary content={"detail"} icon={"bx-right-arrow-alt"} />
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Portfolio;
