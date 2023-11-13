import Cards from "./Cards";
import { Icon } from "react-icons-kit";
import { androidCart } from "react-icons-kit/ionicons/androidCart";

import "./Products.css";
const Products = () => {
  const animatin = () => {
    document.querySelector("span.cart-icon").classList.remove("scale-rtl");
    document.querySelector("span.cart-icon").classList.add("scale-ltr");
  };
  const animatout = () => {
    document.querySelector("span.cart-icon").classList.remove("scale-ltr");
    document.querySelector("span.cart-icon").classList.add("scale-rtl");
  };
  return (
    <>
      <div
        className="container "
        style={{ cursor: "pointer", }}
      >
        <div
          className="d-flex rounded-5 w-25 text-left px-5 pt-3 transform-ltr"
          style={{ height: "auto", backgroundColor: "#E0F4FF" }}
        >
          <h6
            style={{ fontSize: "40px", letterSpacing: "4px" }}
            className="product-title"
          >
            Products
          </h6>
          <span
            className="cart-icon"
            onMouseEnter={animatin}
            onMouseLeave={animatout}
          >
            <Icon
              icon={androidCart}
              size={40}
              className="cart-icon my-1 mx-2"
            />
          </span>
        </div>
        <div className="row pb-5">
          <div className="col-12 ">
            <div className="  d-flex justify-content-center flex-wrap gap-5 ">
              <Cards />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Products;
