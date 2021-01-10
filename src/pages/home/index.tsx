import React from 'react';
import { usePage } from '@/components/page';
import Animate from '@/components/animate';
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
      <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }} duration={1}>
        <h1>React simple animate</h1>
      </Animate>
    </div>
  );
};

export default Home;
