import SectionTitle from "../components/SectionTitle";
import ButtonPrimary from "../components/ButtonPrimary";

const Contact = () => {
	return (
		<section id="contact" className="flex flex-col py-20 gap-12 container section">
			<SectionTitle title={"contact"} description={"reach out and connect with me"} alignment={"center"} />

			<form action="" method="post" className="flex flex-col justify-center items-center gap-6 bg-gray w-[40%] mx-auto p-6 rounded-2xl">
				<div className="w-full">
					<label htmlFor="name" className="capitalize">
						your name
					</label>
					<input type="text" name="name" id="name" className="bg-white p-2 rounded-lg text-black resize-none outline-0 border-2 border-solid border-purple" />
				</div>

				<div className="w-full">
					<label htmlFor="email" className="capitalize">
						your email
					</label>
					<input type="email" name="email" id="email" className="bg-white p-2 rounded-lg text-black resize-none outline-0 border-2 border-solid border-purple" />
				</div>

				<div className="w-full flex flex-col">
					<label htmlFor="message" className="capitalize">
						message
					</label>
					<textarea name="message" id="message" rows={5} className="bg-white p-2 rounded-lg text-black resize-none outline-0 border-2 border-solid border-purple"></textarea>
				</div>

                <ButtonPrimary content={"submit"} icon={"bx-paper-plane"} type="submit" />
			</form>
		</section>
	);
};

export default Contact;
