import { useState } from "react";

const Slider = ({ mascota }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    const nextSlide = mascota.length > currentSlide + 1 ? currentSlide + 1 : 0;
    setCurrentSlide(nextSlide);
  };

  const handlePrevSlide = () => {
    const prevSlide = currentSlide ? currentSlide - 1 : mascota.length - 1;
    setCurrentSlide(prevSlide);
  };

  return (
    <>
      <button onClick={handlePrevSlide}>⬅️</button>
      <img src={mascota[currentSlide]} alt={mascota[currentSlide]} />
      <button onClick={handleNextSlide}>➡️</button>
    </>
  );
};

export default Slider;
