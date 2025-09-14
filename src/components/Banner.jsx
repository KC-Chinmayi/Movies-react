import React from "react";

const Banner = () => {//Banner component to display a background image and title
  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{ backgroundImage: "url(https://i.ytimg.com/vi/QwievZ1Tx-8/maxresdefault.jpg)" }}
    >

        <div className="text-white text-xl w-full text-center bg-gray-900/60 p-4">Avengers endgame</div>
    </div>
  );
};

export default Banner;
