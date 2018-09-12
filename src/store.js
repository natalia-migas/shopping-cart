import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import firebase from 'firebase';
import {
  reactReduxFirebase,
  firebaseReducer,
  getFirebase
} from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import cartReducer from './reducers/cartReducer';
import productsReducer from './reducers/productsReducer';
import firebaseConfig from './config/keys';
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
  productsReducer: productsReducer
});

const initialState = {};

const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk.withExtraArgument(getFirebase)),
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
