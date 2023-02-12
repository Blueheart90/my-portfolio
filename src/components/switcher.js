import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkSide from '@/hooks/useDarkSide';
import { useState } from 'react';

const Switcher = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <>
      <DarkModeSwitch
        sunColor={'#33CCCC'}
        moonColor={'#ECF0F1'}
        checked={darkSide}
        onChange={toggleDarkMode}
        size={30}
      />
    </>
  );
};

export default Switcher;
