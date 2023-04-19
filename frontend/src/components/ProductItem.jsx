const ProductItem = ({ image, rate, title, price, handleAddToCart }) => {
  return (
    <div className="headphones__block justify-content-xl-center">
      <div className="headphones__items">
        <div className="headphones__items__img">
          <img className="" alt={title} src={`/images/${image}`} />
        </div>
        <div className="headphones__items__desc">
          <div className="headphones__items__desc__title">{title}</div>
          <div className="headphones__items__desc__price">{price} ₽</div>
        </div>
        <div className="headphones__items__desc">
          <div className="headphones__items__desc__rate">
            <svg
              width="25"
              height="23"
              viewBox="0 0 25 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6268 18.0143L5.41618 22.3656L7.37647 14.2449L0.960754 8.81491L9.38215 8.14829L12.6268 0.439671L15.8715 8.14829L24.2941 8.81491L17.8771 14.2449L19.8374 22.3656L12.6268 18.0143Z"
                fill="#FFCE7F"
              />
            </svg>
            {rate}
          </div>

          <button onClick={handleAddToCart} className="headphones__btn">
            Купить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
