import React from 'react';
import { usePage } from '@/components/page';

const styles = require('./index.module.less');

const BoxAni = () => {
  const [fragment, renderPage] = usePage();

  fragment.title = <h3>基于 css3 动画</h3>;
  fragment.content = null;
  return (
    <div>
      {renderPage()}
      <section></section>
    </div>
  );
};

export default BoxAni;
