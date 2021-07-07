// const plaid = require('plaid');
// const express = require('express');
// const app = express(); 

// app.use(express.json());

// const client = new plaid.Client ({
// 	clientID: '60e452c919a2660010f8bcc1',
// 	secret: 'b5e1e0bc4c95d7c053b38f7c17db50',
// 	env: plaid.environments.sandbox
// });

// app.post('/create_link_token', async (request, reponse) => {
// 	try {

// 		// create link_token
// 		const tokenResponse = await client.createLinkToken({
// 			user: {
// 				client_user_id: '60e452c919a2660010f8bcc1',
// 			},
// 			client_name: "Sparrow",
// 			products:['auth'],
// 			country_codes:['US'],
// 			language:'en',
// 			webhook: 'https://sandbox.plaid.com'
// 		});
// 		response.json(tokenResponse);
// 		console.log('server connected successful');
// 	} catch (err) {
// 		console.log(err);
// 	}
// });




//canonical file: might not be necessary

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import store from './src/app/store';
// import { Provider } from 'react-redux';

// ReactDOM.render(
// 	<React.StrictMode>
// 		<Provider store={store}>
// 			<App />
// 		</Provider>
// 	</React.StrictMode>,
// 	document.getElementById('root')
// );