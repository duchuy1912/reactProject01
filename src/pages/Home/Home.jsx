import React from "react";
import DataFetchAxios from "../../components/DataAxios/DataFetchAxios";
import "./Home.css";
import InputName from "../../components/InputName/Input"

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to Our Website</h2>
      <p>We provide the latest data and insights to help you stay informed.</p>

      <div className="home-content">
        <div className="home-section">
          <h3>Latest Data</h3>
          <p>Here is the latest data fetched from our API:</p>
          <DataFetchAxios />
        </div>

        <div className="home-section">
          <h3>Why Choose Us?</h3>
          <ul>
            <li>Reliable and up-to-date information</li>
            <li>User-friendly interface</li>
            <li>24/7 customer support</li>
            <InputName></InputName>
          </ul>
        </div>

        <div className="home-section">
          <h3>Stay Connected</h3>
          <p>Follow us on social media for the latest updates.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
