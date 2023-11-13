import "./Custom.css";
const Custom = () => {
  window.addEventListener("scroll", function () {
    var left = document.querySelector("div.left");
    var center = document.querySelector("div.center");
    var right = document.querySelector("div.right");
    if (isElementInViewport(left,center,right)) {
      left.classList.add("animate");
      center.classList.add("animate");
      right.classList.add("animate");
    }
  });
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 300 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  return (
    <>
      <div className="container mb-5">
        <h5
          className="w-25 mt-5 p-3 text-center rounded-5"
          style={{
            fontSize: "35px",
            fontWeight: "800",
            letterSpacing: "4px",
            backgroundColor: "#E0F4FF",
            fontFamily: "me",
          }}
        >
          Custom Product
        </h5>
        <section className="custom-product">
          <div className="d-flex justify-content-evenly">
            <div
              className="left w-50 text-center mx-3 mt-5 rounded-5 h-auto"
              style={{ backgroundColor: "#E0F4FF" }}
            >
              <ul style={{ listStyle: "none",marginTop:"25px" }}>
                <h5
                  className="pt-3"
                  style={{
                    fontFamily: "me",
                    fontWeight: "800",
                    letterSpacing: "5px",
                    fontSize: "35px",
                  }}
                >
                  Rf Filters
                </h5>
                <hr />
                <li>Bandpass Filter</li>
                <li>Lowpass Filter</li>
                <li>Highpass Filter</li>
              </ul>
            </div>
            <div
              className="center w-50 text-center mx-3 mt-5 rounded-5 h-auto"
              style={{ backgroundColor: "#E0F4FF" }}
            >
              <ul style={{ listStyle: "none" }}>
                <h5
                  className="pt-3"
                  style={{
                    fontFamily: "me",
                    fontWeight: "800",
                    letterSpacing: "5px",
                    fontSize: "35px",
                  }}
                >
                  Waveguide Products
                </h5>
                <hr />
                <li>Flexible</li>
                <li>Circulators</li>
                <li>Bends</li>
              </ul>
            </div>
            <div
              className="right w-50 text-center mx-3 mt-5 rounded-5 h-auto"
              style={{ backgroundColor: "#E0F4FF" }}
            >
              <ul style={{ listStyle: "none" }}>
                <h5
                  className="pt-3"
                  style={{
                    fontFamily: "me",
                    fontWeight: "800",
                    letterSpacing: "5px",
                    fontSize: "35px",
                  }}
                >
                  Printed Circuit Boards
                </h5>
                <hr />
                <li>Rigid PCB Quotes</li>
                <li>Flexible PCB Quotes</li>
                <li>PCB Design Quotes</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <hr />
    </>
  );
};

export default Custom;
