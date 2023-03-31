import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { paths } from '~/router/paths';

const HomePage = lazy(() => import('../pages/Home'));
export const browserRouter = createBrowserRouter([{ path: paths.home, element: <HomePage /> }]);
