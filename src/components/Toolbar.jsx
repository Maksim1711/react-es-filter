
export const Toolbar = ({ filters, selected, onSelectFilter }) => {
	const filtersBtns = filters.map((el, index) => {
		let nameOfClass = 'btn';
		if (el === selected) {
			nameOfClass += ' selected';
		}
		return <button className={nameOfClass} onClick={env => onSelectFilter(env.target.textContent)} key={index}>{el}
		</button>

	})
	return (
		<div className="toolbar">
			{filtersBtns}
		</div>
	)

}