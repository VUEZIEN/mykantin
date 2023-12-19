const Loading = () => {
  return (
    <span className="w-full h-full fixed opacity-100 duration-1000 ease-in-out top-0 left-0 right-0 bottom-0 overflow-hidden z-50  bg-white/5  text-black">
      <div className="relative load">
        <svg
          className="h-[32px] w-[32px] -animate  bg-gradient-to-t from-red-500 to-slate-700 rounded-full absolute"
          viewBox="25 25 50 50"
        >
          <circle cx="50" cy="50" r="20" fill="none" stroke-width="4"></circle>
        </svg>
        <svg
          className="h-[32px] w-[32px] animate bg-gradient-to-t from-slate-700 to-red-500 rounded-full absolute"
          viewBox="25 25 50 50"
        >
          <circle cx="50" cy="50" r="20" fill="none" stroke-width="4"></circle>
        </svg>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="6"
              result="blur"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            ></feColorMatrix>
            <feBlend in="SourceGraphic" in2="goo"></feBlend>
          </filter>
        </defs>
      </svg>
    </span>
  );
};

export default Loading;