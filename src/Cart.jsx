const Cart = ({ cartData, remove }) => {
  return (
    <div className="cart">
      <h1>Cart </h1>
      <ul>
        {cartData
          .filter((item) => item.quantity > 0)
          .map((cartItem) => (
            <li key={cartItem.id}>
              {cartItem.name} - {cartItem.price} Quantity: {cartItem.quantity}
              <button className="button" onClick={() => remove(cartItem.id)}>
                remove
              </button>
            </li>
          ))}
      </ul>
      <h3>
        Cart Total:{" "}
        {cartData
          .filter((item) => item.quantity > 0)
          .reduce((total, curr) => total + curr.price * curr.quantity, 0)}{" "}
      </h3>
    </div>
  );
};

export { Cart };
