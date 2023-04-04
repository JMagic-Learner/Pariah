import React, { useEffect, useState } from "react";

// Creating a parallax component for immediate resuse

function ParallaxBanner(props) {
  const { background } = props;
  const [transition, setTransition] = useState("onLoadFalse");

  useEffect(() => {
    setTransition("onLoadTrue");
  }, []);

  return (
    <div className="About">
      <div
        data-testid={`Image-Parallax  ${background}`}
        className={`parralax-container ${transition} `}
        style={{ backgroundImage: `url(${background})` }}
      />
    </div>
  );
}

export default ParallaxBanner;