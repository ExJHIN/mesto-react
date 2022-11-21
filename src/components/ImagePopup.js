import React from 'react';

function ImagePopup(props) {
  return (
    <section className={`popup ${props.card && 'popup_opened'}`}>
      <div className="popup__picture-container">

        <figure className="popup__figure">
          <img src={`${props.card ? props.card.img : '#'}`}
          alt={`${props.card ? props.card.title : '' }`}  
          className="popup__picture" 
          />
          <figcaption className="popup__description">{`${props.card && props.card.title}`}</figcaption>
        </figure>
        <button type="button" className="popup__close popup__close_open-picture" onClick={props.onClose}></button>
      </div>
    </section>
  );
}

export default ImagePopup;