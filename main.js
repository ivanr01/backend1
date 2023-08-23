class ProductManager {
    constructor() {
      this.products = [];
      this.nextProductId = 1;
    }
  
    addProduct(productData) {
      if (!this.validateProductData(productData)) {
        console.error("Error");
        return;
      }
  
      if (this.isCodeDuplicate(productData.code)) {
        console.error("El producto ya existe");
        return;
      }
  
      const newProduct = {
        id: this.nextProductId++,
        title: productData.title,
        description: productData.description,
        price: productData.price,
        thumbnail: productData.thumbnail,
        code: productData.code,
        stock: productData.stock,
      };
  
      this.products.push(newProduct);
    }
  
    validateProductData(productData) {
      return (
        productData.title &&
        productData.description &&
        productData.price &&
        productData.thumbnail &&
        productData.code &&
        productData.stock !== undefined
      );
    }
  
    isCodeDuplicate(code) {
      return this.products.some((product) => product.code === code);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((product) => product.id === id);
      if (product) {
        return product;
      } else {
        console.error("Product not found.");
      }
    }
  }
  
  const productManager = new ProductManager();

  productManager.addProduct({
    title: "Coca Cola",
    description: "500 ml",
    price: 10.99,
    thumbnail: "cocacola.jpg",
    code: "P1",
    stock: 150,
  });
  
  productManager.addProduct({
    title: "Hamburguesa",
    description: "Doble queso, 200 gramos de carne",
    price: 19.99,
    thumbnail: "hamburguesa.jpg",
    code: "P2",
    stock: 10,
  });
  
  const allProducts = productManager.getProducts();
  console.log("Todos los productos:", allProducts);
  
  const productById = productManager.getProductById(1);
  console.log("Producto con ID 1:", productById);
  
  //Producto inexistente
  const productByIdNotFound = productManager.getProductById(3); 
  