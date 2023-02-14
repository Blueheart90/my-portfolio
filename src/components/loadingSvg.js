function LoadingSvg(props) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 text-2xl border border-accent w-fit h-fit justify-self-center md:text-3xl text-light">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        {...props}
      >
        <circle
          cx={50}
          cy={50}
          fill="none"
          strokeWidth={10}
          r={35}
          strokeDasharray="164.93361431346415 56.97787143782138"
          style={{
            transform: 'matrix(1,0,0,1,0,0)',
            animationPlayState: 'paused',
          }}
        />
      </svg>
      <span className=" animate-pulse">Enviando...</span>
    </div>
  );
}

export default LoadingSvg;
