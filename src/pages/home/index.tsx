import React from 'react';
import { usePage } from '@/components/page';
import Progress from './progress';

const styles = require('./index.module.less');

const Home = () => {
  const [fragment, renderPage] = usePage();

  fragment.title = <h3>基于定时器或 requestAnimationFrame 的间隔动画</h3>;
  fragment.content = null;
  return (
    <div>
      {renderPage()}
      <section>
        <Progress />
      </section>
    </div>
  );
};

export default Home;
