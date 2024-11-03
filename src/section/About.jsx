import AboutImage from "../assets/img/about.jpeg";
import SectionTitle from "../components/SectionTitle";

const About = () => {
	return (
		<section id="about" className="section container flex items-center justify-between">
			<div className="gap-[5%] flex items-start justify-between">
				<div className="basis-2/5">
					<img className="rounded-3xl w-full" src={AboutImage} alt="" />
				</div>

				<div className="flex flex-col basis-3/5 gap-8">
					<SectionTitle title={"about"} description={"about me"} alignment={"left"} />
					<p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolore dicta laborum officia dolores ex mollitia, est assumenda, veniam in, facilis quas? Architecto ducimus beatae dolorum placeat repellendus necessitatibus rerum hic maiores commodi eaque. Voluptas unde, aut neque laudantium, quae odit reiciendis rerum, quibusdam vitae maxime impedit iste delectus assumenda.</p>
				</div>
			</div>
		</section>
	);
};

export default About;
