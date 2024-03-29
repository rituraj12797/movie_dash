import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Wrapper from './view/Wrapper';
import Dashboard from './pages/dashboard/Dashboard';
import { Provider } from 'react-redux';
import {store} from './state/store';
import Show from './pages/show/Show';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Wrapper />}>
      <Route index element={<Dashboard />} />
      <Route path="/dashboard/:id" element={<Show />} />
    </Route>
  )
);


function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  )
}

export default App;
