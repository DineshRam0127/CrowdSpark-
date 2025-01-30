import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Project.css";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "PR01",
      name: "Project 1",
      details:
        "This project tackles key environmental challenges by leveraging the power of Artificial Intelligence (AI). The project utilizes advanced machine learning algorithms to analyze massive climate datasets and provide accurate predictions about potential risks such as extreme weather events, rising sea levels, and biodiversity loss. By integrating predictive analytics with real-time data from IoT sensors, the system offers actionable insights for policymakers, environmental organizations, and urban planners to make informed decisions.\n\nKey features of the project include:\n\nClimate Risk Analysis: Predicts the likelihood of extreme weather events and their potential impact.\nCarbon Footprint Monitoring: Analyzes data to help individuals and organizations track and reduce their carbon emissions.\nReal-Time Alerts: Provides early warnings about environmental hazards to mitigate damage and save lives.\nSustainability Recommendations: Offers AI-driven suggestions for adopting eco-friendly practices and renewable energy solutions.\nInteractive Dashboard: Features user-friendly visualizations of climate data trends and environmental health metrics.\n\nThis AI project serves as a vital tool in the fight against climate change, promoting sustainable development and fostering collaboration across various sectors.",
      image: "./P1.jpeg",
      contact: {
        email: "dineshrohit45264@gmail.com",
        phone: "9789507306",
      },
    },
    {
      id: "PR02",
      name: "Project 2",
      details:
        "Solar energy is one of the most abundant and clean sources of energy available to us. This project, Solar Synergy, focuses on harnessing the power of the sun to provide sustainable energy solutions for residential, commercial, and rural applications. It aims to revolutionize the way we produce and consume energy, reducing our dependence on fossil fuels and promoting a greener, healthier planet for future generations.\n\nObjectives:\n\nPromote Renewable Energy Adoption: Educate and encourage communities to adopt solar energy solutions to reduce their carbon footprint and dependency on non-renewable energy sources.\nProvide Cost-Effective Solutions: Offer affordable solar installations to reduce electricity costs for both households and businesses.\nEmpower Rural Communities: Bring electricity to underprivileged areas where grid power is unreliable or unavailable.\nReduce Environmental Impact: Significantly lower greenhouse gas emissions and help combat climate change.\n\nKey Features of the Project:\n\nAdvanced Solar Panel Technology:\nWe use cutting-edge photovoltaic (PV) systems to ensure high energy efficiency and reliability. These panels are designed to maximize sunlight absorption and perform well even in low-light conditions.\n\nSmart Energy Storage Solutions:\nOur systems incorporate advanced lithium-ion battery storage, allowing users to store excess energy produced during the day for use at night or during cloudy weather.\n\nInternet of Things (IoT) Integration:\nThe project includes smart energy monitoring systems that allow users to track real-time data on energy production, consumption, and savings. Mobile apps and dashboards provide insights into system performance, making it easier to optimize energy usage.\n\nCommunity Education and Training:\nWe conduct workshops and training sessions to educate communities about the benefits of solar energy and teach them how to maintain and manage solar systems for long-term use.\n\nScalable Solutions for All Settings:\nWhether it’s a single home, a commercial building, or an entire village, our solar energy solutions can be scaled to meet specific energy needs.\n\nImpact of the Project:\n\nEnvironmental Benefits:\n\nReduction in greenhouse gas emissions, contributing to cleaner air and a healthier environment.\nDecreased reliance on fossil fuels, minimizing resource depletion and habitat destruction caused by mining and drilling.\n\nEconomic Benefits:\n\nSignificant reduction in energy bills, with participants saving up to 60% on electricity costs.\nCreation of jobs in the solar energy sector, from manufacturing and installation to maintenance and training.\n\nSocial Benefits:\n\nEmpowerment of rural and underserved communities by providing access to reliable, clean energy.\nImproved quality of life through consistent electricity for lighting, cooking, and powering essential appliances.",
      image: "./P2.jpeg",
      contact: {
        email: "project2@crowdspark.com",
        phone: "+1-987-654-3210",
      },
    },
    {
      id: "PR03",
      name: "Project 3",
      details:
        "In a fast-paced world, where time is of the essence, FlavorBridge connects people to their favorite meals with the tap of a button. This project is an innovative and user-friendly food delivery platform that brings together local restaurants, home chefs, and food lovers. It aims to redefine convenience and variety in dining by offering an unparalleled food delivery experience, from comfort food to gourmet cuisine.\n\nObjectives:\n\nProvide Seamless Food Delivery: Enable customers to enjoy their favorite meals without stepping out of their homes.\nEmpower Local Businesses: Partner with small restaurants, cafes, and home chefs to expand their reach and grow their customer base.\nPrioritize Freshness and Quality: Ensure food is prepared with care, packed hygienically, and delivered promptly to maintain quality and taste.\nOffer Personalization: Use technology to recommend meals based on user preferences, dietary requirements, and local trends.\n\nKey Features of the Project:\n\nWide Range of Cuisines and Options: Customers can explore a diverse selection of cuisines, from quick snacks and fast food to gourmet dishes and healthy meals.\nReal-Time Order Tracking: Integrated GPS tracking allows users to monitor their order status and delivery in real time, ensuring transparency and reliability.\nAdvanced Search and Filters: Users can search for meals based on dietary needs, price range, preparation time, and more, making it easier to find the perfect meal.\nContactless Delivery Options: In response to modern health and safety concerns, the platform offers contactless delivery for a safe and convenient experience.\nLoyalty Rewards and Discounts: Customers can earn points for every order, redeemable for discounts, free delivery, or exclusive deals.\nIntegrated Payment Systems: The platform supports multiple payment options, including credit/debit cards, digital wallets, cash on delivery, and UPI, making transactions quick and hassle-free.",
      image: "./P3.jpeg",
      contact: {
        email: "project3@crowdspark.com",
        phone: "+1-555-666-7777",
      },
    },
    {
      id: "PR04",
      name: "Project 4",
      details:
        "EventEase is a comprehensive event management platform designed to simplify the process of planning, organizing, and managing events. From small gatherings to large corporate events, EventEase provides tools for attendees and organizers to collaborate seamlessly, ensuring a stress-free and efficient experience.\n\nObjectives:\n\n- Streamline Event Planning: Provide a one-stop solution for managing venues, attendees, schedules, and resources.\n- Enable Customization: Allow organizers to tailor event details, themes, and workflows to meet specific requirements.\n- Facilitate Collaboration: Offer features that enhance communication between event organizers, vendors, and participants.\n- Leverage Technology: Use data analytics, AI recommendations, and real-time updates to improve event execution and attendee satisfaction.\n\nKey Features:\n\n- Event Dashboard: Monitor event progress, registrations, and tasks with real-time analytics.\n- Smart Venue Management: Search and book venues based on location, capacity, and amenities.\n- Personalized Invitations and Ticketing: Design digital invitations, e-tickets, and RSVPs with QR codes for easy check-in.\n- Vendor Management: A marketplace to hire vendors and manage contracts seamlessly.\n- Attendee Engagement: Interactive agendas, live polls, and in-app networking tools.\n\nImpact:\n\n- Enhanced Efficiency: Streamlined workflows save time and reduce human error.\n- Improved Attendee Experience: Real-time updates and personalization create memorable experiences.\n- Economic Growth: Supports local vendors and drives revenue for service providers.\n\nFuture Plans:\n\n- Integrate VR experiences for virtual and hybrid events.\n- Expand the vendor marketplace to include eco-friendly and sustainable options.\n- Develop blockchain-based ticketing for secure payments.",
      image: "./P4.jpeg",
      contact: {
        email: "project4@crowdspark.com",
        phone: "+1-888-999-0000",
      },
    },
    {
      id: "PR05",
      name: "Project 5",
      details:
        "TrustChain is a blockchain-powered supply chain management platform designed to enhance transparency, traceability, and trust in supply chain operations. With increasing demands for ethical sourcing and sustainability, TrustChain ensures that every step of the supply chain is documented securely, preventing fraud, reducing inefficiencies, and building consumer trust. From raw material sourcing to final delivery, TrustChain provides end-to-end visibility for all stakeholders.\n\nObjectives:\n\n- Enhance Traceability: Provide real-time tracking of goods across the supply chain using blockchain.\n- Ensure Data Integrity: Use decentralized ledger technology to store tamper-proof records.\n- Promote Sustainability: Enable businesses to verify and highlight eco-friendly practices.\n- Build Consumer Trust: Allow consumers to access detailed product information, including origin and quality certifications.\n\nKey Features of the Project:\n\n- Immutable Ledger for Transactions: Record every transaction in the supply chain, ensuring data integrity and preventing fraud with blockchain’s tamper-proof system.\n- Smart Contracts: Automate payment processing and contract execution based on predefined conditions, reducing the need for intermediaries and improving efficiency.\n- Product Provenance: Track products from raw material sourcing to end delivery, with QR codes or NFC tags allowing consumers to access product history.\n- Real-Time Monitoring: IoT integration to monitor storage conditions like temperature, humidity, and handling, with instant alerts for deviations to prevent product damage.\n- Sustainability Tracking: Document eco-friendly practices like recycling and reduced emissions, and provide certifications for ethical sourcing and fair practices.",
      image: "./P5.jpeg",
      contact: {
        email: "project5@crowdspark.com",
        phone: "+1-111-222-3333",
      },
    },
    
  ];

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="project-container">
      <Navbar />
      <div className="project-content">
        <h1 className="project-title">Explore Our Projects</h1>
        <p className="project-description">
          Discover innovative ideas and support groundbreaking projects that make a difference.
        </p>
        <div className="project-list">
          {projects.map((project) => (
            <div
              className="project-box"
              key={project.id}
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <button className="project-btn" onClick={() => openProject(project)}>
                {project.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeProject}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProject.name}</h2>
            <p>
              <strong>Project ID:</strong> {selectedProject.id}
            </p>
            <div className="modal-details">
              <p>
                <strong>Details:</strong> {selectedProject.details}
              </p>
            </div>
            <div className="modal-contact">
              <p>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${selectedProject.contact.email}`} className="contact-link">
                  {selectedProject.contact.email}
                </a>
              </p>
              <p>
                <strong>Phone:</strong> {selectedProject.contact.phone}
              </p>

            </div>                                                                                                        
            <button className="close-btn" onClick={closeProject}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
