function Tooltip({ message, children }) {
  return (
    <div className="relative flex group">
      {children}
      <span className="absolute z-10 px-4 py-2 text-lg transition-all duration-300 scale-0 border-2 rounded  top-10 bg-primary text-light group-hover:scale-100 border-light">
        {message}
      </span>
    </div>
  );
}

export default Tooltip;
