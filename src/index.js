import React from "react";
import ReactDOM from "react-dom";
// IMPORT SCSS FILE TO BE SOURCE OF STYLING
import "./styles.scss";
// IMPORT ROUTER
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
		<Router>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Router>,
	document.getElementById("root")
);

reportWebVitals();
