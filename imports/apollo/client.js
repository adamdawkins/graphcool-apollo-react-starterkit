import { Meteor } from 'meteor/meteor';
import ApolloClient from 'apollo-client';
import { ApolloProvider, createNetworkInterface } from 'react-apollo';

const { GRAPHCOOL_ENDPOINT } = Meteor.settings.public;

if (!GRAPHCOOL_ENDPOINT) {
	throw new Error('You must set GRAPHCOOL_ENDPOINT in settings.json, run `graphcool endpoints` to find it.');
}

const networkInterface = createNetworkInterface({
	uri: GRAPHCOOL_ENDPOINT,
});
export const client = new ApolloClient({ networkInterface });

