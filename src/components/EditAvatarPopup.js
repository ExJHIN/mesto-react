import React, { useEffect, useRef } from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

    const linkHelper = useRef();

    useEffect(() => {
        linkHelper.current.value = "";
    });

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: linkHelper.current.value
        });
    }

    return (
        <PopupWithForm name="change-avatar" title="Обновить аватар" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}> 
            <input
                className="form__input form__input_text_name"
                name="avatar"
                ref={linkHelper} 
                type="url"  
                id = "avatar"
                placeholder="Ссылка на картинку"
                required
            />
            <span className="form__input-error popup__error id-input-error avatar-error" id=""></span>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;