import React from "react";

const Hmm = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="absolute top-0 left-0 w-full h-full">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Ytz7qSH9QPI?autoplay=1&start=64&loop=1&playlist=Ytz7qSH9QPI&controls=0"
            title="YouTube Video Player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        <div className="relative h-full w-full text-center">
          <h1 className="text-6xl font-bold text-blue-600 mb-8">
            Welcome to the Insanity Zone!
          </h1>
          <div className="w-48 h-48 bg-none rounded-full animate-spin mb-8"></div>
          <p className="text-lg text-green-700 font-semibold">
            Prepare to lose your sanity and enter a world of absurdity!
          </p>
          <div className="mt-8">
            <ul className="list-disc text-pink-500">
              <li className="mb-2">Mind-bending illusions await you</li>
              <li className="mb-2">Colors that defy logic and reason</li>
              <li className="mb-2">Spinning text that will make you dizzy</li>
              <li className="mb-2">Laughter and confusion guaranteed!</li>
            </ul>
          </div>
          <div className="mt-12">
            <p className="text-xl text-purple-600">
              Embrace the absurdity, enjoy the chaos, and prank your co-workers!
            </p>
            <p className="text-xl text-purple-600">
              Remember, laughter is the best medicine. Have fun!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hmm;
