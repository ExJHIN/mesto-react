import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup.js';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import { CurrentUserContext } from "../context/CurrentUserContext";
import { api } from '../utils/Api';

function App() {
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState(false);
	const [currentUser, setCurrentUser] = useState({});
	const [cards, setCards] = useState([]);





	useEffect(() => {
		Promise.all([api.getProfile(), api.getInitialCards()])
			.then(([infoUsers, card]) => {
				setCurrentUser(infoUsers);
				setCards(card);
			}).catch((err) => console.log(err))
	}, []);






	function handleCardLike(card) {
		// Снова проверяем, есть ли уже лайк на этой карточке
		const isLiked = card.likes.some((user) => user._id === currentUser._id);
		// Отправляем запрос в API и получаем обновлённые данные карточки
		api.checkLikeCardStatus(card._id, !isLiked)
		.then((newCard) => {
			setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
		})
		.catch((err) => console.log(err))
	}
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

	function handleUpdateUser({ name, about }) {
		api.editProfile(name, about)
			.then((res) => {
				setCurrentUser(res);
				closeAllPopups()
			})
			.catch((err) => console.log(err))
	}

	function handleCardDelete(card) {
		api
			.deleteCard(card._id)
			.then(() => { setCards((state) => state.filter((с) => с._id !== card._id)) })
			.catch((err) => console.log(err))
	}

	function handleUpdateAvatar({ avatar }) {
		api.editAvatar(avatar)
			.then((res) => {
				setCurrentUser(res);
				closeAllPopups()
			})
			.catch((err) => console.log(err))
	}

	function handleAddPlaceSubmit({ name, link }) {
		api.addImage(name, link)
			.then(newCard => {
				setCards([newCard, ...cards]);
				closeAllPopups()
			})
			.catch((err) => console.log(err))
	}

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className="page">
				<Header />
				<Main
					cards={cards}
					onEditProfile={handleEditProfileClick}
					onAddPlace={handleAddPlaceClick}
					onEditAvatar={handleEditAvatarClick}
					onCardClick={handleCardClick}
					onCardLike={handleCardLike}
					onCardDelete={handleCardDelete}
				/>
				<ImagePopup
					card={selectedCard}
					onClose={closeAllPopups}
				/>
				<AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddCard={handleAddPlaceSubmit} />
				<EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
				<EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
				<Footer />
			</div>
		</CurrentUserContext.Provider>

	);
}

export default App;
