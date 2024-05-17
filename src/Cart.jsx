const Cart = ({ cartData, remove }) => {
  return (
    <div>
      <h1>Cart </h1>
      <ul>
        {cartData.map((cartItem) => (
          <li key={cartItem.id}>
            {cartItem.name} - {cartItem.price} Quantity: {cartItem.quantity}
            <button onClick={() => remove(cartItem.id)}>remove</button>
          </li>
        ))}
      </ul>
      <h3>
        Cart Total:{" "}
        {cartData.reduce(
          (total, curr) => total + curr.price * curr.quantity,
          0
        )}{" "}
      </h3>
    </div>
  );
};

export { Cart };
