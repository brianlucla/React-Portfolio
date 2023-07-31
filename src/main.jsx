import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import 'bootstrap/dist/css/boostrap.min.css'
import './index.css'

// pages for router to use
import AboutMe from './pages/AboutMe.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ResumePage from './pages/ResumePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index:true,
        element: <HomePage />,
      }, 
      {
        path: 'about',
        element: <AboutMe />
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: 'resume',
        element: <ResumePage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
