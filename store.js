import {configureStore} from 'Greduxjs/toolkit';
import counterReducer from • ../features/Counter/Counterslice';

export default configureStore({
reducer:{
counter: counterReducer,
},
})
