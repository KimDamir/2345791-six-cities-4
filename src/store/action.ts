import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { AuthorizationStatus, SortType } from '../const';
import { UserData } from '../types/user-data';
import { TReview } from '../types/review';

export const changeCity = createAction('cities/change', (city: City) => ({
  payload: city
})
);

export const changeSelectedOffer = createAction('offers/change', (offer:Offer) => ({
  payload: offer
}));

export const changeSortType = createAction('sortType/change', (sortType:SortType) => ({
  payload: sortType
}));

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setOfferDataLoadingStatus = createAction<boolean>('data/setOfferDataLoadingStatus');

export const setError = createAction<string | null | undefined>('cities/setError');

export const changeAuthorizationStatus = createAction<AuthorizationStatus>('user/changeAuthorizationStatus');

export const loadUserData = createAction<UserData>('data/loadUserData');

export const loadComments = createAction<TReview[]>('data/loadComments');

export const loadNearbyOffers = createAction<Offer[]>('data/loadNearbyOffers');
