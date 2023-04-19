import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../features/productsApi";
import ProductItem from "./ProductItem";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };
  return (
    <div className="container">
      {isLoading ? (
        <p>Загрузка...</p>
      ) : error ? (
        <p>Неизвестная ошибка</p>
      ) : (
        <>
          <div className="cartList__title">Наушники</div>
          <div className="cartList align-items-center justify-content-center">
            {data?.map((product) => (
              <ProductItem
                key={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                rate={product.rate}
                handleAddToCart={() => handleAddToCart(product)}
                className="product"
              />
            ))}
          </div>
        </>
      )}

      <Footer />
    </div>
  );
};

export default Home;
