import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import Promotions from "./pages/Promotions";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/pizza-portal/" element={<Home />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/promotions" element={<Promotions />} />
				<Route path="/account" element={<Account />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Router>
	);
}

export default App;
