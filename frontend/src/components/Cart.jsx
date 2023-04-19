import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import Footer from "./Footer";
import { useEffect } from "react";
import {
  addToCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../features/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseQuantity = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  return (
    <div className="container cart">
      <h2>Корзина</h2>

      {cart.cartItems.length === 0 ? (
        <div className="cart">
          <p>Ваша корзина пуста</p>
          <div className="start-shopping">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Начните покупку</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="cart-list row">
          <div className=" basket col">
            {cart.cartItems?.map((cartItem) => (
              <CartItem
                key={cartItem.id}
                title={cartItem.title}
                image={cartItem.image}
                price={cartItem.price}
                cartQuantity={cartItem.cartQuantity}
                total={cartItem.price * cartItem.cartQuantity}
                handleRemoveFromCart={() => handleRemoveFromCart(cartItem)}
                handleDecreaseCart={() => handleDecreaseCart(cartItem)}
                handleIncreaseQuantity={() => handleIncreaseQuantity(cartItem)}
              />
            ))}
          </div>
          <div className="total col">
            <div className="total__block">
              <div className="total__block__title">ИТОГО</div>
              <div className="total__block__price">
                ₽ {cart.cartTotalAmount}
              </div>
            </div>
            <button className="total__block__btn">Перейти к оформлению</button>
          </div>
        </div>
      )}

      <div className="cart-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
