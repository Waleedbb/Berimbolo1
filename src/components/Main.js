import React from "react";
import "./Main.css";
import "./Card";
import Card from "./Card";

const Main = () => (
  <section className="main " id="products">
    <h2>Our Products</h2>
    <div className="cards">
      <Card   
        image= "product-1.jpg"
        title= "Pelco S7230L-EW0 2 30X Lens, White In stock"
        buttonText= "buy it"
      />
      <Card   
        image= "product-3.jpg"
        title= "Uniview 4K HD IR Fixed Eyeball Camera"
        buttonText= "buy it"
      />
      <Card   
        image= "product-2.jpg"
        title= "American Dynamics LPR Bullet Camera with 2.7-13.5mm"
        buttonText= "buy it"
      />
    </div>
    <div className="cards">
    <Card   
        image= "product-2.jpg"
        title= "American Dynamics LPR Bullet Camera with 2.7-13.5mm"
        buttonText= "buy it"
      />
    <Card   
        image= "product-1.jpg"
        title= "Pelco S7230L-EW0 2 30X Lens, White In stock"
        buttonText= "buy it"
      />
    <Card   
        image= "product-3.jpg"
        title= "Uniview 4K HD IR Fixed Eyeball Camera"
        buttonText= "buy it"
      />
    </div>

    <div className="main-features">
      <div className="feature">
        <h3>Real-Time Threat Monitoring</h3>
        <p>Get instant alerts and protection from cyber threats.</p>
      </div>
      <div className="feature">
        <h3>Multi-Layered Defense</h3>
        <p>Secure your digital assets with advanced encryption.</p>
      </div>
    </div>
  </section>
);

export default Main;
