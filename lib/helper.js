const baseURL = "https://localhost:7124/product"
export const apiBackend = "https://localhost:7124"

export default async function getPost(id) {
	const res = await fetch(`${baseURL}`);
	const products = await res.json()

	if (id) {
		return products.find(value => value.id == id)
	}

	return products;
}
