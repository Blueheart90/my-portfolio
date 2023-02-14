const Alert = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`fixed transition-all duration-1000 right-0 flex flex-row sm:w-2/5  overflow-hidden dark:bg-primary bg-white border shadow-md bottom-10  ${
        isOpen ? 'right-0' : ' -right-full'
      }`}
    >
      <div className="flex w-3 bg-gradient-to-t bg-accent"></div>
      <div className="flex-1 p-3">
        <h1 className=" text-primary dark:text-light md:text-xl">
          Email enviado!
        </h1>
        <p className="text-xs font-light text-primary dark:text-light md:text-sm">
          Gracias por tu mensaje
        </p>
      </div>
      <button
        onClick={() => {
          setIsOpen(false);
        }}
        className="flex px-4 border-l border-gray-100 cursor-pointer hover:bg-accent place-items-center"
      >
        <p className="text-xs uppercase text-primary dark:text-light">Cerrar</p>
      </button>
    </div>
  );
};

export default Alert;
