import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className=" bg-black">
				<NavBar />
			</div>
		</>
	);
}

export default App;
