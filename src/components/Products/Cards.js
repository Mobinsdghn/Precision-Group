const Cards = () => {
  return (
    <>
      <div
        className="card text-dark mx-4 rounded-5 mt-5 fade-in-center"
        style={{
          width: "300px",
          backgroundColor: "#E0F4FF",
          letterSpacing: "2px",
        }}
      >
        <img
          className="card-img-top"
          style={{ objectFit: "cover", padding: "50px" }}
          src={require("./../../image/adap.png")}
          alt="Card image"
        />
        <div className="card-body text-center">
          <h6 className="card-title">Southwest Microwave - 1431-00SF</h6>
          <p className="card-text"> 50 GHz 2.40 mm Male to Male Adapter</p>
          <a href="#" className="btn btn-dark btn-lg">
            99.9$
          </a>
        </div>
      </div>
      <div
        className="card text-dark mx-4 rounded-5 mt-5 fade-in-center"
        style={{
          width: "300px",
          backgroundColor: "#E0F4FF",
          letterSpacing: "2px",
        }}
      >
        <img
          className="card-img-top"
          style={{ objectFit: "cover", padding: "50px" }}
          src={require("./../../image/ASLE-L-200D.png")}
          alt="Card image"
        />
        <div className="card-body text-center">
          <h6 className="card-title">Satellite Link Emulator</h6>
          <p className="card-text">
            from 950 to 1450 MHz for Closed-Loop Testing{" "}
          </p>
          <a href="#" className="btn btn-dark btn-lg my-3">
            99.9$
          </a>
        </div>
      </div>
      <div
        className="card text-dark mx-4 rounded-5 mt-5 fade-in-center"
        style={{
          width: "300px",
          backgroundColor: "#E0F4FF",
          letterSpacing: "2px",
        }}
      >
        <img
          className="card-img-top"
          style={{ objectFit: "cover", padding: "50px" }}
          src={require("./../../image/Modular__4-Port_Vector_Network.png")}
          alt="Card image"
        />
        <div className="card-body text-center">
          <h6 className="card-title">BN900 Series</h6>
          <p className="card-text">
            Vector Network Analyzer by Sanko Technologies
          </p>
          <a href="#" className="btn btn-dark btn-lg my-3">
            39.9$
          </a>
        </div>
      </div>
      <div
        className="card text-dark mx-4 rounded-5 mt-5 fade-in-center"
        style={{
          width: "300px",
          backgroundColor: "#E0F4FF",
          letterSpacing: "2px",
        }}
      >
        <img
          className="card-img-top"
          style={{ objectFit: "cover", padding: "50px" }}
          src={require("./../../image/185-J-P-EP-ST-CM.png")}
          alt="Card image"
        />
        <div className="card-body text-center">
          <h6 className="card-title">185-J-P-EP-ST-CM-1</h6>
          <p className="card-text">RF Connector by Samtec</p>
          <a href="#" className="btn btn-dark btn-lg my-3">
            9.9$
          </a>
        </div>
      </div>
      <div
        className="card text-dark mx-4 rounded-5 mt-5 fade-in-center"
        style={{
          width: "300px",
          backgroundColor: "#E0F4FF",
          letterSpacing: "2px",
        }}
      >
        <img
          className="card-img-top"
          style={{ objectFit: "cover", padding: "50px" }}
          src={require("./../../image/BP_Series.png")}
          alt="Card image"
        />
        <div className="card-body text-center">
          <h6 className="card-title">BP Series</h6>
          <p className="card-text">Band Pass Filter by KYOCERA AVX</p>
          <a href="#" className="btn btn-dark btn-lg my-3">
            69.9$
          </a>
        </div>
      </div>
      <div
        className="card text-dark mx-4 rounded-5 mt-5 fade-in-center"
        style={{
          width: "300px",
          backgroundColor: "#E0F4FF",
          letterSpacing: "2px",
        }}
      >
        <img
          className="card-img-top"
          style={{ objectFit: "cover", padding: "50px" }}
          src={require("./../../image/HMC8414.png")}
          alt="Card image"
        />
        <div className="card-body text-center">
          <h6 className="card-title">Low Noise Amplifier</h6>
          <p className="card-text">
            with Bypass Switch from 0.1 to 10 GHz Analog Devices
          </p>
          <a href="#" className="btn btn-dark btn-lg my-3">
            99.9$
          </a>
        </div>
      </div>
    </>
  );
};

export default Cards;
