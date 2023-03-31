import { MemoryRouter, Route, Routes } from 'react-router-dom';

export const withTestRouter = (children: JSX.Element) => (
  <MemoryRouter>
    <Routes>
      <Route path="/" element={children} />
    </Routes>
  </MemoryRouter>
);
