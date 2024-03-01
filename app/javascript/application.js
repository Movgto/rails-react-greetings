import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';

let root = ReactDOM.createRoot(document.getElementById("root"));

import { Provider } from 'react-redux';
import store from './store/store';

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
