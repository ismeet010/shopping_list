const ProductsList = ({ data, add }) => {
  return (
    <div>
      <h1>Product List </h1>
      <ul>
        {data.map((listItem) => (
          <li key={listItem.id}>
            {listItem.name} - {listItem.price} Quantity:{" "}
            {listItem.stockInfo.quantity}
            <button
              disabled={
                !listItem.stockInfo.available || listItem.stockInfo.quantity < 1
              }
              onClick={() => add(listItem.id)}
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ProductsList };
