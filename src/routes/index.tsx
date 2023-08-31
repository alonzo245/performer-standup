import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NotFound } from '../pages';
import { defaultQueryFn } from '../config/request';
import { Layout } from '../views';

const Home = lazy(() => import('../pages/home/Home'));

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
                            <Route
                                exact
                                path={[`${process.env.PUBLIC_URL}/`, `${process.env.PUBLIC_URL}/projects`]}
                                component={Home}
                            />
                            <Route component={NotFound} />
                        </Switch>
                    </Suspense>
                </Layout>
            </Router>
        </QueryClientProvider>
    );
};

export default IndexRouter;
