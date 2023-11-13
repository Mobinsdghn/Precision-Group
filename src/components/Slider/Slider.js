import Icon from "react-icons-kit";
import {androidArrowDroprightCircle} from 'react-icons-kit/ionicons/androidArrowDroprightCircle'
import {androidArrowDropleftCircle} from 'react-icons-kit/ionicons/androidArrowDropleftCircle'
import "./Slider.css"
const Slider = () => {
  return (
    <>
      <div className="Slider-and-dec d-flex  text-center">
        <div className="slider w-75 m-5 px-5 bounce-left">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={require("./../../image/10.jpg")}
                  className="d-block w-100 rounded-5 "
                  alt="..."
                  style={{ height: "500px", objectFit: "cover" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("./../../image/11.jpg")}
                  className="d-block w-100 rounded-5 "
                  alt="..."
                  style={{ height: "500px", objectFit: "cover" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={require("./../../image/4.jpg")}
                  className="d-block w-100 rounded-5 "
                  alt="..."
                  style={{ height: "500px", objectFit: "cover" }}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev btn-lg"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
                <Icon icon={androidArrowDropleftCircle} size={35}/>
              <span className="visually-hidden"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
                <Icon icon={androidArrowDroprightCircle} size={35}/>

              <span className="visually-hidden">
              </span>
            </button>
          </div>
        </div>
        <div className="dec w-100 p-5 slide-in-top">
            <h4 style={{fontFamily:'membra',paddingTop:"80px",fontSize:"80px",letterSpacing:"15px"}}>Electrical Circuit</h4>
            <span style={{fontFamily:'me',letterSpacing:"5px", fontWeight:"900"}}>The Leading Website for the RF & Microwave Industry
News, White Papers, Articles, Products, Directory, Events and more</span>
        </div>
      </div>
    </>
  );
};

export default Slider;
