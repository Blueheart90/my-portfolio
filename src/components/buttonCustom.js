import styles from '@/styles/buttoncustom.module.css';

const ButtonCustom = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`active:bg-light px-4 py-2 transition-all duration-500 border ${styles.btn} border-accent justify-self-center hover:bg-accent hover:text-primary hover:border-secondary text-3xl h-fit w-fit`}
    >
      {children}
    </button>
  );
};

export default ButtonCustom;
