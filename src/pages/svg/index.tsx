import React from 'react';
import { usePage } from '@/components/page';

import LineChart from './line-chart';

const styles = require('./index.module.less');

const SVGContent = () => {
  const [fragment, renderPage] = usePage();

  fragment.title = <h3>SVG 绘制折线图和动画</h3>;
  fragment.content = null;

  return (
    <div>
      {renderPage()}

      <section className={styles.content}>
        <h5>合成</h5>
        <LineChart />
      </section>
    </div>
  );
};

export default SVGContent;
