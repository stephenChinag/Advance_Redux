import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCT = [
	{
		id: "q1",
		price: 4,
		title: "a Book you need",
		description: "words canot explain how much you need good book",
	},
	{
		id: "q2",
		price: 9,
		title: "must Reed Book	",
		description: "just read on and Hands on",
	},
];
const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_PRODUCT.map((product) => (
					<ProductItem
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						description={product.description}
					/>
				))}
			</ul>
		</section>
	);
};

export default Products;
