const SectionTitle = ({ title, description, alignment }) => {
	return (
		<div className={alignment}>
			<p className="uppercase text-base">{title}</p>
			<h2 className="capitalize text-[40px] font-normal">{description}</h2>
		</div>
	);
};

export default SectionTitle;
