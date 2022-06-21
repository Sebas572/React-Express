import React from 'react';
import { createRoot } from 'react-dom/client';
import MyInput from './Component/MyInput.jsx';

class App extends React.Component {
	render() {
		return (
			<React.StrictMode>
				<h1>Hello world</h1>
				<MyInput />
			</React.StrictMode>
		);
	}
}

const root = createRoot(document.getElementById('root'));

root.render(<App tab="home"/>);

module.exports = App;