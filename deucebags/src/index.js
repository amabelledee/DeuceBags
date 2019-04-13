import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./app"
import Combine from './componentrender';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App key="App" />,  document.getElementById('root'))
ReactDOM.render(<Combine key="Render" />, document.getElementById('buttons'))






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
