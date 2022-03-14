
import reportWebVitals from './reportWebVitals';
import {rerenderWholeTree} from './/render'
import { state } from './state';


// addPotsEv('You won!')

rerenderWholeTree(state)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
