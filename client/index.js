import React from 'react';
import ReactDOM from 'react-dom';
import styles from './scss/app.scss';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store'
import { render } from 'react-dom';

// ReactDOM.render(<App />, document.getElementById('root'));
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)