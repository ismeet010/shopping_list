import "./style.css";
import { useState } from "react";
import products from "./products.json";
import { ProductsList } from "./ProductList";
import { Cart } from "./Cart";
export const App = () => {
  const [product, updateProduct] = useState(products);
  const [cart, updateCart] = useState([]);
  const decreaseProdQuantity = (id) => {
    // const updatedProducts = products.map((item) =>
    //     item.id === id ? { ...item, stockInfo: { ...item.stockInfo, quantity: item.stockInfo.quantity - 1 } } : item
    // );

    // Update the product state with the updated products array
    updateProduct((prevState) =>
      prevState.map((item) =>
        item.id === id
          ? {
              ...item,
              stockInfo: {
                ...item.stockInfo,
                quantity: item.stockInfo.quantity - 1,
              },
            }
          : item
      )
    );
  };
  const increaseProdQuantity = (id, quantity) => {
    updateProduct((prevState) =>
      prevState.map((item) =>
        item.id === id
          ? {
              ...item,
              stockInfo: {
                ...item.stockInfo,
                quantity: item.stockInfo.quantity + quantity,
              },
            }
          : item
      )
    );
  };
  const addToCart = (id) => {
    // Find the product in the products array based on the given id
    const productToAdd = products.find((item) => item.id === id);
    decreaseProdQuantity(id);

    // Check if the product is already in the cart
    const existingCartItem = cart.find((item) => item.id === id);

    if (existingCartItem) {
      // If the product is already in the cart, increase its quantity
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      updateCart(updatedCart);
    } else {
      // If the product is not in the cart, add it with quantity 1
      const newItem = {
        id: productToAdd.id,
        name: productToAdd.name,
        price: productToAdd.price,
        quantity: 1,
      };
      updateCart([...cart, newItem]);
    }
    // decreaseProdQuantity(id)
    console.log("Updated Cart", cart);
  };

  const removeFromCart = (id) => {
    const finalCI = cart.filter((item) => item.id == id);
    increaseProdQuantity(id, finalCI[0].quantity);
    let cartItem = cart.filter((item) => item.id != id);
    updateCart([...cartItem]);
    console.log("Rem Cart", cart);
  };
  return (
    <div className="flex">
      <ProductsList data={product} add={addToCart} />
      <Cart cartData={cart} remove={removeFromCart} />
      {/* <ol>
        <li>
          Create an e-commerce like products list. Each product in the list
          shows the name of the product and its, price. A product can be also
          not available, for example when the quantity in stock reaches the 0.
          In that case, show the item with a different style and disabled for
          selection.
        </li>
        <li>
          Each item in the list has a + button. If clicked, it is added to a
          shopping cart list. We can add the same product more than once to the
          cart. Just one item will be shown but inside the item will show the
          number of added items.
        </li>
        <li>
          The shopping cart is another list on the right side of the products
          list. Each item in the cart shows the name, the price and a button to
          delete the item from the cart. Below is shown also a total = the sum
          of prices of products in the cart.
        </li>
      </ol> */}
    </div>
  );
};
