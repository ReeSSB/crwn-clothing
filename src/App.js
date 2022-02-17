import HomePage from "./pages/homepage/homepage.component";
import { Routes, Route, useParams } from "react-router-dom";
import "./App.css";

const HatsPage = () => (
	<div>
		<h1>Hats Page</h1>
	</div>
);

const TopicPage = (props) => {
	console.log(props);
	let params = useParams();
	return (
		<div>
			<h1>TOPIC PAGE DETAILS:{params.topicId} </h1>
		</div>
	);
};

function App() {
	return (
		<div>
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/shop/hats" element={<HatsPage />} />
				<Route path="/topic/:topicId" element={<TopicPage />} />
			</Routes>
		</div>
	);
}

export default App;
