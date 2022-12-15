import React from 'react';

function PopupWithForm(props, {buttonText='Сохранить',onSubmit}) {
  return (
    <section className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__body">
        <button className="popup__close popup__close_button_place" type="button" onClick={props.onClose}></button>
        <h2 className="form__title">{props.title}</h2>
        <form className={`form  form_${props.name}`} onSubmit={props.onSubmit} name={props.name}>
          {props.children}
          <button type="submit" className="form__save popup__button-valid form__save-add">{buttonText}</button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;