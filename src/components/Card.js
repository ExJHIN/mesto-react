import React from 'react';
import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext.js";


function Card({ card, onCardClick, onCardLike, onCardDelete }) {

	const currentUser = useContext(CurrentUserContext);

	function handleClick() {
		onCardClick(card);
	}

	function handleLikeClick() {
		onCardLike(card);
	}

	function handleDeleteClick() {
		onCardDelete(card);
	}

	const isOwn = card.owner._id === currentUser._id;
	

	const isLiked = card.likes.some(i => i._id === currentUser._id);
	const cardLikeButtonClassName = `element__like-btn ${isLiked ? "element__like-btn_active" : ''}`;
	
	const cardDeleteButtonClassName = (
		`element__trash-btn ${isOwn ? 'element__trash-btn' : 'element_trash-none'}`
	  ); 

	return (
		<li className="element">
			<button onClick={handleDeleteClick} className={cardDeleteButtonClassName} type="button"></button>
			<img className="element__img" onClick={handleClick} src={card.link} alt={card.name} />
			<div className="element__bottom-block">
				<h3 className="element__title" placeholder="Место">{card.name}</h3>
				<div className="element__likes">
					<button
						onClick={handleLikeClick} 
						className={cardLikeButtonClassName}
						type="button"
					></button>
					<span className="element__like-count">{card.likes.length}</span>
				</div>
			</div>
		</li>
	)
}

export default Card;