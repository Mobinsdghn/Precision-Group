import "./Category.css"
const Category = () => {
    window.addEventListener("scroll", function () {
        let title = document.querySelector("h4.title");
        if (isElementInViewport(title)) {
          title.classList.add("animate");
        }
      });
      function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 500 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
    return (
    <>
      <div className="container pb-5">
        <h4
          className="title w-50 mx-auto my-5 p-4 text-center rounded-5"
          style={{
            fontSize: "25px",
            fontWeight: "",
            letterSpacing: "4px",
            backgroundColor: "#E0F4FF",
            fontFamily: "membra",
          }}
        >
          Select What Matters To You
        </h4>

        <section className="category rounded-5 my-5 text-black " style={{height:"auto",backgroundColor:"#E0F4FF"}}>
          <ul className="category-items d-flex flex-wrap justify-content-center" style={{listStyle:"none"}}>
            <li>
                <a href="" className="btn text-black m-5 rounded-5" style={{boxShadow:"5px 5px 5px black",fontSize:"16px"}}>
                    <span className="px-1"><img src={require("./../../image/emc_icon_blue.png")} style={{width:"20px"}} alt="" /></span>
                    EMC
                </a>
            </li>
            <li>
                <a href="" className="btn text-black m-5 rounded-5" style={{boxShadow:"5px 5px 5px black",fontSize:"16px"}}>
                    <span className="px-1"><img src={require("./../../image/5g_icons_blue.png")} style={{width:"20px"}} alt="" /></span>
                    5G
                </a>
            </li>
            <li>
                <a href="" className="btn text-black m-5 rounded-5" style={{boxShadow:"5px 5px 5px black",fontSize:"16px"}}>
                    <span className="px-1"><img src={require("./../../image/amplifier_icon_blue.png")} style={{width:"20px"}} alt="" /></span>
                    Amplifiers
                </a>
            </li>
            <li>
                <a href="" className="btn text-black m-5 rounded-5" style={{boxShadow:"5px 5px 5px black",fontSize:"16px"}}>
                    <span className="px-1"><img src={require("./../../image/automotive_icon_blue.png")} style={{width:"20px"}} alt="" /></span>
                    Automotive
                </a>
            </li>
            <li>
                <a href="" className="btn text-black m-5 rounded-5" style={{boxShadow:"5px 5px 5px black",fontSize:"16px"}}>
                    <span className="px-1"><img src={require("./../../image/bluetooth_icons_blue.png")} style={{width:"20px"}} alt="" /></span>
                    Bluetooth
                </a>
            </li>
            <li>
                <a href="" className="btn text-black m-5 rounded-5" style={{boxShadow:"5px 5px 5px black",fontSize:"16px"}}>
                    <span className="px-1"><img src={require("./../../image/connector_icon_hub_erf.png")} style={{width:"20px"}} alt="" /></span>
                    Cables & Connectors
                </a>
            </li>
            <li>
                <a href="" className="btn text-black m-5 rounded-5" style={{boxShadow:"5px 5px 5px black",fontSize:"16px"}}>
                    <span className="px-1"><img src={require("./../../image/cryogenics_icons_blue.png")} style={{width:"20px"}} alt="" /></span>
                    Cryogenics
                </a>
            </li>
            <li>
                <a href="" className="btn text-black m-5 rounded-5" style={{boxShadow:"5px 5px 5px black",fontSize:"16px"}}>
                    <span className="px-1"><img src={require("./../../image/gan_icon_blue.png")} style={{width:"20px"}} alt="" /></span>
                    GaN
                </a>
            </li>
            <li>
                <a href="" className="btn text-black m-5 rounded-5" style={{boxShadow:"5px 5px 5px black",fontSize:"16px"}}>
                    <span className="px-1"><img src={require("./../../image/gnss_icon_blue.png")} style={{width:"20px"}} alt="" /></span>
                    GNSS
                </a>
            </li>
            <li>
                <a href="" className="btn text-black m-5 rounded-5" style={{boxShadow:"5px 5px 5px black",fontSize:"16px"}}>
                    <span className="px-1"><img src={require("./../../image/iot_icon_blue.png")} style={{width:"20px"}} alt="" /></span>
                    IOT
                </a>
            </li>
            <li>
                <a href="" className="btn text-black m-5 rounded-5" style={{boxShadow:"5px 5px 5px black",fontSize:"16px"}}>
                    <span className="px-1"><img src={require("./../../image/test_m_icon_blue.png")} style={{width:"20px"}} alt="" /></span>
                    Test & Measurement
                </a>
            </li>
            <li>
                <a href="" className="btn text-black m-5 rounded-5" style={{boxShadow:"5px 5px 5px black",fontSize:"16px"}}>
                    <span className="px-1"><img src={require("./../../image/waveguides_icon_blue.png")} style={{width:"20px"}} alt="" /></span>
                    Waveguides
                </a>
            </li>

          </ul>
          
        </section>
      </div>
      <hr />
    </>
  );
};

export default Category;
