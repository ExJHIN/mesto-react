import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Card from './Card.js';
import ImagePopup from './ImagePopup.js';
import PopupWithForm from './PopupWithForm.js';

function App() {
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
	const [selectedCard, setSelectedCard] = React.useState(null);

	const handleEditAvatarClick = () => {
		setIsEditAvatarPopupOpen(true);
	}

	const handleEditProfileClick = () => {
		setIsEditProfilePopupOpen(true);
	}

	const handleAddPlaceClick = () => {
		setIsAddPlacePopupOpen(true);
	}

	const handleCardClick = (card) => {
		setSelectedCard(card);
	}

	const closeAllPopups = () => {
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsEditAvatarPopupOpen(false);
		setSelectedCard(null);
	}

	return (
		<div className="page">
			<Header />
			<Main
				onEditProfile={handleEditProfileClick}
				onAddPlace={handleAddPlaceClick}
				onEditAvatar={handleEditAvatarClick}
				onCardClick={handleCardClick}
			/>
			<ImagePopup
				card={selectedCard}
				onClose={closeAllPopups}
			/>
			<PopupWithForm
				isOpen={isAddPlacePopupOpen}
				title="Новое место"
				buttonText="Сохранить"
				name="name"
				children={
					<>
						<input
							className="form__input form__input_text_name"
							type="text"
							name="name"
							title="Название"
							placeholder="Название"
							noValidate
							id="name-input"
							minLength="2"
							maxLength="30"
							required
						/>
						<span className="form__input-error popup__error name-input-error"></span>
						<input
							className="form__input form__input_text_link"
							type="url"
							name="link"
							id="url-input"
							title="Ссылка на картинку"
							placeholder="Ссылка"
							required
						/>
						<span className="form__input-error popup__error url-input-error"></span>
					</>
				}
				onClose={closeAllPopups}
			/>
			<PopupWithForm
				isOpen={isEditProfilePopupOpen}
				title="Редактировать профиль"
				buttonText="Сохранить"
				name="name"
				children={
					<>
						<input
							className="form__input form__input_text_name"
							type="text"
							name="name"
							placeholder="Имя"
							minLength="2"
							maxLength="40"
							required
							id="id-input"
						/>
						<span className="form__input-error popup__error id-input-error"></span>
						<input
							className="form__input form__input_text_descr"
							type="text"
							name="about"
							placeholder="Описание"
							minLength="2"
							maxLength="200"
							noValidate
							required
							id="articles-input"
						/>
						<span className="form__input-error popup__error articles-input-error"></span>
					</>
				}
				onClose={closeAllPopups}
			/>
			<PopupWithForm
				isOpen={isEditAvatarPopupOpen}
				title="Обновить аватар"
				buttonText="Сохранить"
				name="avatar"
				children={
					<>
						<input
							className="form__input form__input_text_link"
							type="url"
							name="avatar"
							id="urL-input"
							title="Ссылка на картинку"
							placeholder="Ссылка"
							required
						/>
						<span className="form__input-error popup__error urL-input-error"></span>
					</>
				}
				onClose={closeAllPopups}
			/>
			<Footer />
		</div>

	);
}

export default App;
