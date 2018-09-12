import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import firebase from 'firebase';
import {
  reactReduxFirebase,
  firebaseReducer,
  getFirebase
} from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import cartReducer from './reducers/cartReducer';
import sortingReducer from './reducers/sortingReducer';
import firebaseConfig from './config/keys';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rrfConfig = {
  userProfile: 'users'
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  cart: cartReducer,
  sorting: sortingReducer
});

const initialState = {};

const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(getFirebase)),
    reactReduxFirebase(firebase)
  )
);

export default store;
