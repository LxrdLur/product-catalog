import FilterList from "@/components/FilterList.jsx";
import CardsList from "@/components/CardsList.jsx";
import {products} from "@/assets/cardsInfo.js";

export default function App() {

	return (
		<div className="app">
			<FilterList/>
			<CardsList products={products}/>
		</div>
	)
}