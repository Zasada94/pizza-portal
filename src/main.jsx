import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";


ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
			<StyleSheetManager
				shouldForwardProp={isPropValid}
				disableVendorPrefixes={false}
			>
				<App />
			</StyleSheetManager>
	</Provider>
);
