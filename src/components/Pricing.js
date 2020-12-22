import React from "react";
import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";

function Pricing() {
  return (
    <div>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">Pricing</h1>
          <div className="pricing__container">
            <Link to="/sign-up" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <FaFire />
                </div>
                <h3>Starter</h3>
                <h4>$8.99</h4>
                <p>per month</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
