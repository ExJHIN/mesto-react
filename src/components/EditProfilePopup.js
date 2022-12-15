import React, { useState, useContext, useEffect } from 'react';
import PopupWithForm from "./PopupWithForm";

import { CurrentUserContext } from "../context/CurrentUserContext.js";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

    const currentUser = useContext(CurrentUserContext);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name,
            about: description,
        });
    }

    const handleNameInput = (e) => {
        e.preventDefault();
        setName(e.target.value)
    }

    const handleDescriptionInput = (e) => {
        e.preventDefault();
        setDescription(e.target.value)
    }

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen]);

    return (
        <PopupWithForm name="edit-profile" title="Редактировать профиль" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <input
                className="form__input form__input_text_name"
                type="text"
                name="name"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                required
                id="id-input"
                onChange={handleNameInput} 
                value={name || ''}
            />
            <span className="form__input-error popup__error id-input-error"></span>
            <input
                className="form__input form__input_text_descr"
                type="text"
                name="about"
                placeholder="Описание"
                minLength="2"
                onChange={handleDescriptionInput} 
                value={description || ''}
                maxLength="200"
                noValidate
                required
                id="articles-input"
            />
            <span className="form__input-error popup__error articles-input-error"></span>
        </PopupWithForm>
    );
}

export default EditProfilePopup;