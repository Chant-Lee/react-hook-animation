import React, { useState, useRef, useEffect } from 'react';

import {
  Style,
  ALL,
  AnimationProps,
  DEFAULT_DURATION,
  DEFAULT_EASE_TYPE,
} from './types';

import './index.less';

const Animate = (props: AnimationProps) => {
  const {
    start,
    end,
    play,
    delay = 0,
    children,
    complete,
    duration = DEFAULT_DURATION,
    easeType = DEFAULT_EASE_TYPE,
    onComplete,
  } = props;

  const timeRef = useRef<any>();
  const [style, setStyle] = useState<Style>(start || {});

  useEffect(() => {
    setStyle({
      ...(play ? end : start),
      transition: `${ALL} ${duration}s ${easeType} ${delay}s`,
    });

    if (play && (complete || onComplete)) {
      timeRef.current = setTimeout(() => {
        complete && setStyle(complete);
        console.log(5555);
        onComplete && onComplete();
      }, (delay + duration) * 1000);
    }

    return () => {
      timeRef.current && clearTimeout(timeRef.current);
    };
  }, []);

  return (
    <div className="animation" style={style}>
      {children}
    </div>
  );
};

export default Animate;
