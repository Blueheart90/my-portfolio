import React from 'react';
import styles from '@/styles/title.module.css';

function Title({ children, ...props }) {
  return (
    <h1
      className={`my-10 text-center ${styles.heading} text-7xl ${props.styles}`}
    >
      {children}
    </h1>
  );
}

export default Title;
