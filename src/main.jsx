import React from 'react';
import ReactDOM from 'react-dom/client';
//import { HashRouter } from 'react-router-dom';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
// import { Provider } from 'react-redux';
// import store from './store';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <HashRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </HashRouter>
//   </React.StrictMode>
// );

const router = createHashRouter([
  {
    path: '/*',
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
