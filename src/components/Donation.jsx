import React, { useState } from 'react';
import Navbar from './Navbar';
import './Donation.css';

const KEY_ID = "rzp_test_CMsB4Ic9wCgo4O";

// Project owner information based on IDs
const projectOwners = {
  PR01: { name: "Dinesh Rohit", email: "dineshrohit45264@gmail.com" },
  PR02: { name: "Crowdspark Energy", email: "project2@crowdspark.com" },
  PR03: { name: "FlavorBridge Foods", email: "project3@crowdspark.com" },
  PR04: { name: "EventEase Solutions", email: "project4@crowdspark.com" },
  PR05: { name: "TrustChain Systems", email: "project5@crowdspark.com" },
};

const Donation = () => {
  const [amount, setAmount] = useState('');
  const [projectId, setProjectId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const isValidProjectId = (id) => /^[A-Z0-9]{4,6}$/.test(id) && projectOwners[id];

  const loadRazorpayAndPay = () => {
    if (!amount || amount <= 0) {
      setErrorMessage("Please enter a valid donation amount.");
      return;
    }

    if (!isValidProjectId(projectId)) {
      setErrorMessage("Invalid Project ID. Please check and try again.");
      return;
    }

    const projectOwner = projectOwners[projectId];
    const options = {
      key: KEY_ID,
      amount: amount * 100,
      currency: "INR",
      name: "Support Our Projects",
      description: `Donation for Project: ${projectId}`,
      image: "https://example.com/logo.png",
      handler(response) {
        alert(
          `Payment Successful for ${projectOwner.name}!\nPayment ID: ${response.razorpay_payment_id}`
        );
      },
      prefill: {
        name: "Dinessh",
        email: projectOwner.email,
        contact: "9789507306",
      },
      theme: {
        color: "#6a11cb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="donation-container">
      <Navbar />
      <div className="donation-content">
        <h1 className="donation-title">Support Our Cause</h1>
        <p className="donation-description">Your contribution helps fund innovative projects.</p>

        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <div className="donation-form">
          <div className="amount-container">
            <input
              type="number"
              className="amount-input"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Amount"
              aria-label="Donation Amount"
            />
          </div>

          <div className="project-input-section">
            <input
              type="text"
              className="project-input"
              value={projectId}
              onChange={(e) => setProjectId(e.target.value.toUpperCase())}
              placeholder="Enter Project ID (e.g., PR01)"
              aria-label="Project ID"
            />
            <button className="pay-now-button" onClick={loadRazorpayAndPay}>
              Proceed to Pay
            </button>
          </div>
        </div>

        <div className="payment-options">
          <h2>Payment Options</h2>
          <ul>
            <li>Credit/Debit Cards</li>
            <li>PayPal</li>
            <li>Google Pay</li>
            <li>Apple Pay</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Donation;
