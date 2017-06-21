import React from 'react';
import { ApolloProvider } from 'react-apollo';
// import { Router, Route, hashHistory, IndexRoute } from 'react-router'; 

import { client } from '../apollo/client';

// import App from './layout/App';

const Root = () => {
	return (
	<ApolloProvider client={client}>
		<div>Things</div>
	</ApolloProvider>
	);
};

export default Root;
