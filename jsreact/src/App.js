/** @format */

import PageHeader from "./components/PageHeader";
import PageMain from "./components/PageMain";
import PageFooter from "./components/PageFooter";
import React, { Component } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className="holy-grail">
			<PageMain />
			<PageFooter />
		</div>
	);
}

export default App;
