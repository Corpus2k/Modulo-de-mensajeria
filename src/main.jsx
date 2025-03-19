import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import { StateContext } from './context/StateContext.jsx';
import { GlobalStyles } from './styles/GlobalStyles.js';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/ThemeProvider.js';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ThemeProvider theme={Theme}>
			<GlobalStyles />
			<StateContext>
				<App />
			</StateContext>
		</ThemeProvider>
	</StrictMode>
);
