import { Link } from 'react-router-dom';
import { Offer } from '../types/offer';
import { AppRoute, cardType, cardTypeMap } from '../const';
import { useAppDispatch } from '../hooks';
import { changeSelectedOffer } from '../store/action';
import React from 'react';

type CardProps = {
  offer:Offer;
  type: cardType;
}

function CardComponent({offer, type}: CardProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <article className= {cardTypeMap.get(type)} onMouseEnter={() => dispatch(changeSelectedOffer(offer))}>
      {offer.isPremium ?
        <div className="place-card__mark">
          <span> Premium </span>
        </div> : null}
      <div className={(type === cardType.Favorite) ? 'favorites__image-wrapper place-card__image-wrapper' : 'cities__image-wrapper place-card__image-wrapper'}>
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} width={(type === cardType.Favorite) ? 150 : 260}
            height={(type === cardType.Favorite) ? 110 : 200}
          />
        </a>
      </div>
      <div className={(type === cardType.Favorite) ? 'favorites__card-info place-card__info' : 'place-card__info'}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offer.rating * 20}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
export const Card = React.memo(CardComponent, (prevProps, currentProps) => prevProps.offer === currentProps.offer && prevProps.type === prevProps.type);
