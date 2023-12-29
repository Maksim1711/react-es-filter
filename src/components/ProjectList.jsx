export const ProjectLIst = ({ selected, projects }) => {
	const lists = projects.map((el, index) => {
		let nameOfClass = el.category;
		if (selected === 'All') {
			return <div className={nameOfClass} key={index}><img src={el.img} alt="smth" /></div>
		}
		if (selected !== nameOfClass) {
			nameOfClass += ' deactive'
		}
		return <div className={nameOfClass} key={index}><img src={el.img} alt="smth" /></div>
	})
	return (
		<div className="project_list">
			{lists}
		</div>
	)

}