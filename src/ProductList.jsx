const ProductsList = ({ data, add, del, cart }) => {
  return (
    <div className="pl">
      <h1 className="heading">Product List </h1>
      <ul>
        {data.map((listItem) => {
          const cartItem = cart.find((item) => item.id === listItem.id);
          const cartQuantity = cartItem ? cartItem.quantity : 0;
          return (
            <li key={listItem.id}>
              <p className="entry">
                {listItem.name} -{" "}
                <span className="price">${listItem.price}</span>
              </p>
              {/* Quantity:{" "} */}
              {/* {listItem.stockInfo.quantity} */}
              <div>
                <button
                  className="button"
                  disabled={
                    !listItem.stockInfo.available ||
                    listItem.stockInfo.quantity === 0
                  }
                  onClick={() => add(listItem.id)}
                >
                  +
                </button>
                <button
                  className="button"
                  disabled={cartQuantity < 1}
                  onClick={() => del(listItem.id)}
                >
                  -
                </button>
              </div>
            </li>
          );})}
      </ul>
    </div>
  );
};

export { ProductsList };
