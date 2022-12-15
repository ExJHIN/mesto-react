import React from 'react';
import { useContext } from 'react';
import button from '../images/profile-add-btn.svg';
import Card from "./Card";
import { CurrentUserContext } from "../context/CurrentUserContext";

function Main({ cards, onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete }) {


	const currentUser = useContext(CurrentUserContext);
	// Загружаем данные с сервера

	return (
		<main className="content">
			<section className="profile">
				<div className="container">
					<section className="profile__body">
						<button className="profile__avatar" type="button" alt="Фотография пользователя" onClick={onEditAvatar}>
							<img
								className="profile__avatar-image"
								src={currentUser.avatar}
								alt={currentUser.name}
							/>
						</button>
						<div className="profile__info">
							<h1 className="profile__title" title="Имя" placeholder="Имя">{currentUser.name}</h1>
							<button
								type="button"
								className="profile__edit-button" onClick={onEditProfile}></button>
							<p className="profile__description" title="Профессия" placeholder="Профессия">{currentUser.about}</p>
						</div>
						<button type="button" className="profile__add-button" onClick={onAddPlace}>
							<img
								src={button}
								alt="Кнопка профиля"
							/>
						</button>
					</section>
				</div>
			</section>
			<ul className="elements">
				{cards.map((card) => {
					return (
						<Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} />
					);
				})}
			</ul>
		</main>
	);
}
export default Main;