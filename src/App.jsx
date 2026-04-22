import CatalogPage from "@/pages/CatalogPage.jsx";
import CartProvider from "@/app/providers/CartProvider/CartProvider.jsx";

export default function App() {
	return (
		<div className="app">
			<CartProvider>
				<CatalogPage/>
			</CartProvider>
		</div>
	)
}