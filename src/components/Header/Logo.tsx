import { type CSSProperties, memo } from 'react';

import { darkLogo, lightLogo } from './style';

interface LogoProps {
  size?: number;
  style?: CSSProperties;
  themeMode: 'dark' | 'light';
}

const Logo = memo<LogoProps>(({ size = 20, style, themeMode }) => {
  return (
    <img
      alt="logo"
      src={themeMode === 'dark' ? darkLogo : lightLogo}
      style={{ height: size, ...style }}
    />
  );
});

export default Logo;
