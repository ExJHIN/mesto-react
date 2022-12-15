import React, { useState, useEffect } from 'react';
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddCard }) {

    const [name, setName] = useState("");
    const [link, setLink] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onAddCard({
            name,
            link,
        });
    }

    const handleNameInput = (e) => {
        e.preventDefault();
        setName(e.target.value)
    }

    const handleLinkInput = (e) => {
        e.preventDefault();
        setLink(e.target.value)
    }

    useEffect(() => {
        setName('');
        setLink('');
    }, [isOpen]);

    return (
        <PopupWithForm name="new-place" title="Новое место" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <input
                className="form__input form__input_text_name"
                type="text"
                id = 'place' 
                name = "place"
                onChange={handleNameInput} 
                value ={name}
                title="Название"
                placeholder="Название"
                noValidate
                minLength="2"
                maxLength="30"
                required
            />
            <span className="form__input-error popup__error name-input-error place-error"></span>
            <input
                className="form__input form__input_text_link"
                type="url"
                onChange={handleLinkInput} 
                value ={link}
                name = "link" 
                id = "link"
                title="Ссылка на картинку"
                placeholder="Ссылка"
                required
            />
            <span className="form__input-error popup__error url-input-error link-error"></span>
        </PopupWithForm>
    );
}

export default AddPlacePopup;