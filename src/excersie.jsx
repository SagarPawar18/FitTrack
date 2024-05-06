import React, { useEffect, useState } from "react";
import axios from "axios";


const SERVER_URI = "https://fitTrack-backend.azurewebsites.net";

const Exercise = () => {
  const [eName, setEName] = useState("");
  const [eRep, setERep] = useState("");
  const [result, setResult] = useState([]);

  const fetchResult = () => {
    axios.get(`${SERVER_URI}/e/all`).then((res) => {
      setResult(res.data.result);
    }, console.error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`${SERVER_URI}/e/add`, { eName, eRep }).then((res) => {
      console.log("The Response: ", res.data);
      // Fetch updated data after adding a new exercise
      fetchResult();
      setEName("");
      setERep("");
    }, console.error);
  };

  useEffect(() => {
    fetchResult();
  }, []);

  return (
    <>
      <div style={{ maxWidth: "600px", margin: "auto" }}>
  <header style={{ textAlign: "center", marginBottom: "40px" }}>
    <h1 style={{ fontSize: "2.5rem", color: "#555" }}>FitTrack</h1>
    <p style={{ fontSize: "1.1rem", color: "#666" }}>
      Track your fitness journey with ease.
    </p>
  </header>
  <section>
    <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
      Add an Exercise
    </h2>
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <div style={{ marginBottom: "15px" }}>
        <input
          value={eName}
          onChange={(e) => setEName(e.target.value)}
          type="text"
          placeholder="Exercise"
          style={{
            padding: "10px",
            width: "100%",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "1rem",
          }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <input
          type="number"
          placeholder="Number of reps"
          value={eRep}
          onChange={(e) => setERep(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "1rem",
          }}
        />
      </div>
      <div>
        <button
          type="submit"
          style={{
            padding: "10px", /* Adjusted padding */
            width: "108%", /* Full width */
            backgroundColor: "#ff4d4f",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Add Exercise
        </button>
      </div>
    </form>
  </section>

  <section>
    <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
      All Exercises
    </h2>
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {result.map((item) => (
        <li
          key={item.id}
          style={{
            background: "#f9f9f9",
            borderRadius: "5px",
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "15px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {item.eName}
          </span>{" "}
          - Reps: {item.eRep}
        </li>
      ))}
    </ul>
  </section>
</div>

    </>
  );
};

export default Exercise;
