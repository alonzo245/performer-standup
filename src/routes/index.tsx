import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Home, NotFound } from '../pages';
import { defaultQueryFn } from '../config/request';
import { Layout } from '../views';
import Pr from '../pages/pr/Pr';

// const Home = lazy(() => import('../pages/home/Home'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

const IndexRouter: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <Route path={[`/pr`, `/performer-standup/pr`]} component={Pr} />
              <Route path={[`/`, `/performer-standup`]} component={Home} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
};

export default IndexRouter;
