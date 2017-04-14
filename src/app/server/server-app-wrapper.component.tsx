import * as React from 'react';
import { Store } from 'redux';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import { WithStyles } from 'isomorphic-style-loader-utils';
const mainStyles = require('../styles/main.scss');

export interface ServerWrapperComponentProps {
  store: Store<any>;
  url: string;
  context: any;
  children?: any;
}

@WithStyles(mainStyles)
export class ServerWrapperComponent extends React.Component<ServerWrapperComponentProps, {}> {
  render() {
    const {store, url} = this.props;
    const context = this.props.context || {};

    return (
      <Provider store={store}>
        <StaticRouter
          location={url}
          context={context}
        >
          {this.props.children}
        </StaticRouter>
      </Provider>
    );
  }
}