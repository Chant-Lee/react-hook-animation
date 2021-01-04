import React, { useState } from 'react';
import { usePage } from '@/components/page';

const styles = require('./index.module.less');

const Progress = () => {
  const [fragment, renderPage] = usePage();
  const [percent, setPercent] = useState<number>(1);

  const decrease = function () {
    const targetPercent = percent < 10 ? 0 : percent - 10;
    const speed: number = (percent - targetPercent) / 400;
    let start = 0;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress: number = timestamp - start;
      const currentProgress = Math.max(
        parseInt((percent - speed * progress).toString(), 10),
        targetPercent
      );
      setPercent(currentProgress);
      if (currentProgress > targetPercent) {
        window.requestAnimationFrame(animate);
      }
    };
    window.requestAnimationFrame(animate);
  };

  const increase = function () {
    const targetPercent = percent >= 90 ? 100 : percent + 10;
    const speed: number = (targetPercent - percent) / 400;
    let start = 0;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress: number = timestamp - start;
      const currentProgress = Math.min(
        parseInt((speed * progress + percent).toString(), 10),
        targetPercent
      );
      setPercent(currentProgress);
      if (currentProgress < targetPercent) {
        window.requestAnimationFrame(animate);
      }
    };
    window.requestAnimationFrame(animate);
  };
  fragment.title = <h4>requestAnimationFrame 的间隔动画</h4>;
  fragment.content = null;

  return (
    <div className={styles.root}>
      {renderPage()}
      <div className={styles.progress}>
        <div className={styles.wrapper}>
          <div className={styles.inder} style={{ width: `${percent}%` }}></div>
        </div>
        <div className={styles.info}>{percent}%</div>
      </div>
      <div className={styles.operates}>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
};

export default Progress;
