import { createStore, applyMiddleware, compose } from 'react-redux';
import rootReducer from './redux/reducers/index';
import thunk from 'redux-thunk';
import config from './firebase/config';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reactReduxFirebase(config, { userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}),
        reduxFirestore(config)
    ));
export default store;

