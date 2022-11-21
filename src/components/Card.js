import React from 'react';

function Card({ card, onCardClick }) {
	const { img, title, like } = card;

	function handleClick() {
		onCardClick(card);
	}

	return (
		<li className="element">
			<button className="element__trash-btn" type="button"></button>
			<img className="element__img" onClick={handleClick} src={img} alt={title} />
			<div className="element__bottom-block">
				<h3 className="element__title" placeholder="Место">{title}</h3>
				<div className="element__likes">
					<button
						className="element__like-btn"
						type="button"
					></button>
					<span className="element__like-count">{like}</span>
				</div>
			</div>
		</li>
	)
}

export default Card;