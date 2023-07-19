import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import Promotions from "./pages/Promotions";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/pizza-portal/" element={<Home />} />
				<Route path="/menu" element={<MenuPage />} />
				<Route path="/promotions" element={<Promotions />} />
				<Route path="/account" element={<Account />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/product/:id" element={<Product />} />
				<Route path="cart" element={<Cart />} />
			</Routes>
		</Router>
	);
}

export default App;
