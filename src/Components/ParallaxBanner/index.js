import React, { useEffect, useState } from "react";

// Creating a parallax component for immediate resuse

function ParallaxBanner(props) {
  const { background } = props;
  const [transition, setTransition] = useState(0);

  useEffect(() => {
    setTransition(1);
  }, []);

  return (
    <div className="About">

      <div
        data-testid={`Image-Parallax  ${background}`}
        className={`parralax-container ${transition} `}
        style={{ backgroundImage: `url(${background})`, opacity: transition, transition: "opacity 2s ease-in-out" }}
      />
    </div>
  );
}

export default ParallaxBanner;