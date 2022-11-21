import React, { useState, useEffect } from 'react';
import button from '../images/profile-add-btn.svg';
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
	const [userName, setUserName] = useState('');
	const [userDescription, setUserDescription] = useState('');
	const [userAvatar, setUserAvatar] = useState('');
	const [cards, setCards] = useState([]);
	// Загружаем данные с сервера
	useEffect(() => {
		Promise.all([
			api.getInitialCards(),
			api.getProfile(),
		])
			.then(([cards, infoUsers]) => {
				setUserName(infoUsers.name);
				setUserDescription(infoUsers.about);
				setUserAvatar(infoUsers.avatar);

				setCards(cards.map((card) => ({
					img: card.link,
					title: card.name,
					like: card.likes.length,
					idCard: card._id
				})
				))
			})
			.catch((err) => {
				console.log(err);
			})

	}, [])
	return (
		<main className="content">
			<section className="profile">
				<div className="container">
					<section className="profile__body">
						<button className="profile__avatar" type="button" alt="Фотография пользователя" onClick={props.onEditAvatar}>
							<img
								className="profile__avatar-image"
								src={userAvatar}
								alt="Аватар
									пользователя"
							/>
						</button>
						<div className="profile__info">
							<h1 className="profile__title" title="Имя" placeholder="Имя">{userName}</h1>
							<button
								type="button"
								className="profile__edit-button" onClick={props.onEditProfile}></button>
							<p className="profile__description" title="Профессия" placeholder="Профессия">{userDescription}</p>
						</div>
						<button type="button" className="profile__add-button" onClick={props.onAddPlace}>
							<img
								src={button}
								alt="Кнопка профиля"
							/>
						</button>
					</section>
				</div>
			</section>
			<ul className="elements">{cards.map((card) => (
				<Card onCardClick={props.onCardClick} card={card} key={card.idCard} {...card} />
			))}
			</ul>
		</main>
	);
}
export default Main;