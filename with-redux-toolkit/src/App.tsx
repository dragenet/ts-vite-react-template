import { RouterProvider } from 'react-router-dom';

import { RootProvider } from '~/components/molecules/RootProvider';

import { browserRouter } from './router';

function App() {
  return (
    <RootProvider>
      <RouterProvider router={browserRouter} />
    </RootProvider>
  );
}

export default App;
