import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Router.jsx';
import AuthProviders from './providers/AuthProviders.jsx';



createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl m-auto'>
    <StrictMode>
      <AuthProviders>
        <RouterProvider router={router}/>
      </AuthProviders>
    </StrictMode>
  </div>
)
