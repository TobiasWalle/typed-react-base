import * as React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux';
import { todoReducer } from './modules/todo/todo.reducer';

import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { routes } from "./routes";
import { WithStylesContext } from "isomorphic-style-loader-utils";
import { DEVELOPMENT, RENDER_CSS_ON_CLIENT } from "./utils/config";
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// Load initial state
const initialState = window['__data'];

// Create store
let store: any;
if (DEVELOPMENT) {
    // If not production, activate redux debug tools
    let devtools: any = window['devToolsExtension'] ? window['devToolsExtension']() : (f: any) => f;
    store = devtools(createStore)(todoReducer, initialState);
} else {
    store = createStore(todoReducer, initialState);
}

// Render the app
let AppComponent = () => (
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>
);


if (RENDER_CSS_ON_CLIENT) {
    // Main styles
    let mainStyles = require('./styles/main.scss');

    // Add Component style context
    let OldAppComponent = withStyles(mainStyles)(AppComponent);
    AppComponent = () => (
        <WithStylesContext onInsertCss={ styles => styles._insertCss()}>
            <OldAppComponent/>
        </WithStylesContext>
    );
}

render(<AppComponent/>, document.getElementById('container'));