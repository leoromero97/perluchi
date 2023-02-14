import PRODUCTS_MOCK from "../mocks/products.json";

export const getProductById = (itemId) => {
  return new Promise((resolve, reject) => {
    const product = PRODUCTS_MOCK.find((product) => product.id === itemId);
    if (product) {
      const productFiltered = {
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        category: product.category,
      };
      setTimeout(() => {
        resolve(productFiltered);
      }, 2000);
    } else {
      reject(new Error("Product not found"));
    }
  });
};
