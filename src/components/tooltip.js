function Tooltip({ message, children }) {
  return (
    <div class="group relative flex">
      {children}
      <span class=" absolute top-10 scale-0 transition-all duration-300 rounded bg-primary py-2 px-4 text-lg text-light group-hover:scale-100 border-2 border-light z-10">
        {message}
      </span>
    </div>
  );
}

export default Tooltip;
