import React from "react";
import "./App.css"; // Optional: Use if you want to separate styles into a CSS file.

function BouquetPage() {
  return (
    <div style={{ height: "100%", overflowY: "auto", backgroundColor: "#f0fff0", color: "#2e8b57", fontFamily: "Arial, sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: "20px" }}>
      <h1 style={{ marginBottom: "20px", fontSize: "32px" }}>Happy Birthday Princess</h1>

      {/* Bouquet Container with Flowers */}
      <div style={{ position: "relative", width: "300px", height: "400px", marginBottom: "50px" }}>
        <div className="flower" style={{ left: "0px", position: "absolute", width: "100px", height: "100px", animation: "flowerRise 3s ease-out forwards" }}>
          <div className="stem" style={{ position: "absolute", width: "10px", height: "250px", backgroundColor: "#4caf50", bottom: "0px", left: "45px", transformOrigin: "bottom center", animation: "stemGrow 3s ease-out forwards" }}></div>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="petal" style={{ position: "absolute", width: "40px", height: "40px", backgroundColor: "#ff69b4", borderRadius: "50% 0", transform: `rotate(${index * 72}deg)`, transformOrigin: "bottom right" }}></div>
          ))}
          <div className="center" style={{ position: "absolute", width: "20px", height: "20px", backgroundColor: "#ffd700", borderRadius: "50%", top: "30px", left: "30px" }}></div>
        </div>

        <div className="flower" style={{ left: "100px", top: "50px", position: "absolute", width: "100px", height: "100px", animation: "flowerRise 3s ease-out forwards" }}>
          <div className="stem" style={{ position: "absolute", width: "10px", height: "200px", backgroundColor: "#4caf50", bottom: "0px", left: "45px", transformOrigin: "bottom center", animation: "stemGrow 3s ease-out forwards" }}></div>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="petal" style={{ position: "absolute", width: "40px", height: "40px", backgroundColor: "#ff69b4", borderRadius: "50% 0", transform: `rotate(${index * 72}deg)`, transformOrigin: "bottom right" }}></div>
          ))}
          <div className="center" style={{ position: "absolute", width: "20px", height: "20px", backgroundColor: "#ffd700", borderRadius: "50%", top: "30px", left: "30px" }}></div>
        </div>

        <div className="flower" style={{ left: "200px", position: "absolute", width: "100px", height: "100px", animation: "flowerRise 3s ease-out forwards" }}>
          <div className="stem" style={{ position: "absolute", width: "10px", height: "250px", backgroundColor: "#4caf50", bottom: "0px", left: "45px", transformOrigin: "bottom center", animation: "stemGrow 3s ease-out forwards" }}></div>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="petal" style={{ position: "absolute", width: "40px", height: "40px", backgroundColor: "#ff69b4", borderRadius: "50% 0", transform: `rotate(${index * 72}deg)`, transformOrigin: "bottom right" }}></div>
          ))}
          <div className="center" style={{ position: "absolute", width: "20px", height: "20px", backgroundColor: "#ffd700", borderRadius: "50%", top: "30px", left: "30px" }}></div>
        </div>
      </div>

      {/* Header Container for Image and Text */}
      <div style={{ marginTop: "300px", textAlign: "center" }}>
        <h2>Why I love you and some favorite memories</h2>
        <p style={{ fontSize: "18px", textAlign: "left", marginBottom: "50px" }}>
          I love you so very much Princess. Here are some funny/favorite photos of mine. You are my favorite person to be around.
          You give me so much joy and satisfaction. I think one of the real times that I knew I would marry you is when I was
          thinking about after college, you were there in my brain rent free. Cooking with you, being with our pets, and loving on
          you is my dream. I believe that whatever issues we run into, we can get through it together. Baby, I really love you and
          I hope you enjoy this little collage of pictures I found in my camera roll or us/you from over the years.
        </p>
        {/* Replace the src with the path to your image */}
        <img
          src="pictures/on_sholders.jpg"
          alt="Camila on my shoulders"
          style={{
            width: "200px",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            float: "right",
            marginLeft: "20px",
          }}
        />
      </div>
    </div>
  );
}

export default BouquetPage;
