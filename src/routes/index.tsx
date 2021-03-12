import React, { Suspense, lazy } from 'react';

import { withRouter, Switch, Route } from 'react-router-dom';
import Loading from '../components/loading';
import BasicLayout from '@/layouts';
const Home = lazy(() => import('../pages/home'));
const SVG = lazy(() => import('../pages/svg'));

const ContentMain = (props: any) => {
  return (
    <BasicLayout>
      <Suspense fallback={<Loading loading={true} />}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/svg" component={SVG} />
          <Route path="/" component={Home} />
        </Switch>
      </Suspense>
    </BasicLayout>
  );
};

export default withRouter(ContentMain);
