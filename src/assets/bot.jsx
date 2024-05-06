import React, { useRef, useState, useEffect } from "react";
// import download from "../Image/download.png";

const Bot = () => {
  const chatbotRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (event) => {
    if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
      // Click outside the chatbot, close it
      setIsOpen(false);
    } else {
      // Toggle chatbot visibility on icon click
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div
      ref={chatbotRef}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "1000",
        cursor: "pointer",
      }}
    >
      <div onClick={handleClick}>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAt1BMVEX////S09UjHyAREiSOjo4AAAsn7OK9vsAbFhcUDg/Mzs9OTE3a2tyGhYbP0NLx8fIiAACjpKjh4uNHRkcAAAAn9erp6erDxMb5+fkjGxwjGBoKCyCtrrJ6enxcW10wLi8+PD03NTYla2cnwLcjWVYjDxEn4dgkTEsliIImsaolmpQAABibm50jCA0jOzkjQkAjKSojMzMmz8YkpZ4keHJqaWpJSlQgIS8/QEoyMjpwcXZUVV9nZ2/juS8PAAAEQElEQVR4nO2ai1aqQBRAxfIBjoCkiAKWL8oHZVrW1fv/33UBGWYULB6DsO46e7VKBZvtmcPMYcZKBQAAAAAAAAAAAACA/x1JUaSiHS5Q+w2Hvlq0B43S8FGKNiFIjYDydCEiUqhoF4zWJ1J9rWgbH5CKDUekuKJdAlQiVaKRqozjVGBVKieHvmH0i3YI0eh0QCoWIBUXkIoLSMWldFKSJGnuiK45D4p2OaEhQXTgEOLcvwIqQUWlIZE7QyyBlXLh5FgVVStokqqcuFRy8Q+p0g1jJiEvICeipKhD6CaZr6mXSfQzIlJzj5fEJVLytLh8oxW61OJGK8dgpQhT7sFSUyp5Wjnde6nplVxyiZWUIU5erHKw0rIpubDPdpRdivnaVZYkxzDvwPOPjEQhFiI6DzBbJzpQSFibo1YsRuZaoLTYjgsa+c+IMx+bPN+MhXPeo0mHmGWuk+EAGU/daiK6T0bwkZhmVVDJIYNvJnOqVpt8YMW0/iNOiZUcBk1ixVBKwPF/TCNVbY7x+wVWRqReQWbCfMJ0zSBUbHKdqqGE8YD0yWDwg8XlCeMg1mysiBNa87gRe/j6trGH15WG9vvb69DGT/k1uQIZzDZ0cWD6UgN5MrWs7XIjX3OSN7utZU0nsh8tnhqtGIwL9IDcwmm+6NUder3ZPNppPuudzlj4LzRb9BCa1YmuWMSHk5S89Fp0sJ4je3D4bPkn9JanYDYf6Ak9a1ZJYanhBjs5kYjsQHlBztgMw1JZ+08NS8kvQZP1erQUOd57kXOQEsNSO6pNOWJgGNiU9S4slblYiJJa0lKRkbq9lP1B2rSipSySU5N5uPuySkUkutMmyRg7SsomWWdFXX15SNkTv83edBM51ww2U2x1ChTjRI8ap6rybNtzqC/kKxPNUJ7W3TO2M7972Y5TZyt1Izz32e8fu8VyNr86Jw/ms+Vi9/GOe5cfUZ8te6WnESnU5kmjsnwtTDhYskyk+TaZrkQGZQK5/lAnVYnnQdXpTG5pFLKG2EppReZjkVWZruK8Qp20lWcH4Xxid+uH60YUpHoi+E/cecxq9ApVVAmtFFZ8qx+kJUOpINmROE5sxVMFOsv7dnoIbfOJEqvLt1kOmzRUUYyMTz4Bhwb9XpZO52uLCmfct2Nxb3D0PgnrBSruDBSb8/exdWKx5JnDomd4Cy0peWy5pdsBoZzy+A5h5g7MZX9Gy7RqndeekZZ2v8jdMcpvHytttue7raymCZaY+fblF7QUwbrBdwI0hYvezo4Mksgpt9ly1yTX61cx5xSk3PJbAK7ZrxT/TQ4AAAAAAAAAAAAAAAAASMN9CanUSkjlroR4Urr34/+601cr3X+k3/mPbi+l77++vmurVXe/WtX02h/zsN93u87z71H3+F2A1Unq+OWIHA/m36O5P6zbDwfjb+N4bBza62+WUjjsutcnOvWyd0THx/8Bp/50UU9CXcAAAAAASUVORK5CYII="
          alt="Excersise Bot"
          style={{ width: "80px", height: "auto" }}
        />
      </div>
      {isOpen && (
        <iframe
          src="https://webchat.botframework.com/embed/mybottestservices-bot?s=CoKtvapHS3g.lfkbtxHqKSkdU3SPiO31VQmngGMZDrDvnL1k1iuOu-Q"
          style={{
            border: "none",
            display: "block",
            minWidth: "400px",
            width: "100%",
            minHeight: "500px",
          }}
        ></iframe>
      )}
    </div>
  );
};

export default Bot;
