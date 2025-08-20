import { useEffect } from "react";
import Typewriter from "typewriter-effect";

function Type() {
  useEffect(() => {});
  return (
    <Typewriter
      options={{
        strings: ["Martial Artist", "Actor"],
        autoStart: true,
        loop: true,
        delay: 50,
        deleteSpeed: 25,
      }}
    />
  );
}

export default Type;
