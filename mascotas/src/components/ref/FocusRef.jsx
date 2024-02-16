import React, { useRef } from "react";

const FocusRef = () => {
  const scrollToBottom = () => {
    console.log("Scroll hasta el final de la página");
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <section>
      {/* Scroll to Bottom */}
      <button onClick={scrollToBottom}>🔽</button>
    </section>
  );
};

export default FocusRef;
