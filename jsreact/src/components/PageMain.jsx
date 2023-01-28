/** @format */

import React from "react";
import MainContent from "./MainContent";
import PageLeft from "./PageLeft";
import "./PageMain.css";
import PageRight from "./PageRight";

const PageMain = () => {
	return (
		<main className="holy-grail__main">
			{/* Left sidebar */}
			<PageLeft />

			{/* Main content - MainContent / Class Component */}
			<MainContent />

			{/* Right sidebar */}
			<PageRight />
		</main>
	);
};

export default PageMain;
