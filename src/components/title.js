import React from 'react';
import styles from '@/styles/title.module.css';

function Title({ children, ...props }) {
  return (
    <h1
      className={`py-10 text-center ${styles.heading} text-5xl xl:text-7xl ${props.styles} font-medium`}
    >
      {children}
    </h1>
  );
}

export default Title;
