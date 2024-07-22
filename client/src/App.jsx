import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="">
				<NavBar />
				<Home />
			</div>
		</>
	);
}

export default App;
