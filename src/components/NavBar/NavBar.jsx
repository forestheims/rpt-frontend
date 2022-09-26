import { useTheme } from '../../context/themeProvider';

export default function NavBar() {
  const { theme, setTheme } = useTheme();

  const handleClick = (current) => {
    if (current === 'light') setTheme('dark');
    else setTheme('light');
  };

  return (
    <header>
      <p>{theme}</p>
      <img src="./images/5558220.png" onClick={() => handleClick(theme)}></img>
    </header>
  );
}
