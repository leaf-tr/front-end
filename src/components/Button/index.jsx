import React from 'react';
import classNames from 'classnames';

import { ButtonSize } from './style';

export default function Button({ children, color, onClick, outline, size = 'md' }) {

  let btnColor = ""

  if (outline) {
    btnColor = `border-${color}-500 border-2 text-${color}-500 bg-white focus:outline-none hover:text-white hover:bg-${color}-500 `
  }
  else {
    btnColor = `text-white bg-${color}-500 focus:outline-none hover:bg-${color}-600`
  }

  const btnClass = classNames('font-semibold items-center flex justify-center items-center rounded-lg ', btnColor, {
    [`${ButtonSize.sm}`]: (size === 'sm'),
    [`${ButtonSize.md}`]: (size === 'md'),
    [`${ButtonSize.lg}`]: (size === 'lg'),
  });

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
}