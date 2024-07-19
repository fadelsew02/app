
// import { LoaderFunctionArgs } from "react-router-dom";
// import {
//   Form,
//   Link,
//   Outlet,
//   RouterProvider,
//   createBrowserRouter,
//   redirect,
//   useActionData,
//   useFetcher,
//   useLocation,
//   useNavigation,
//   useRouteLoaderData,
// } from "react-router-dom";
// import { fakeAuthProvider } from "./auth";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'sweetalert/dist/sweetalert.min.js';
import 'aos/dist/aos.css';

import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import 'aos/dist/aos.css';

import Preloader from "./components/preloader/Preloader";
import Layout from "./components/Layout/Layout";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
// import SchoolForm from "./components/school/SchoolForm";
// import SchoolList from "./components/school/SchoolList";
// import StudentList from "./components/student/StudentList";
// import ScheduleSession from "./components/session/ScheduleSession";
// import AddGrades from "./components/grades/AddGrades";
import Dashboard from './components/Super_Admin/Dashboard/Dashboard';
import AdminLayout from './components/AdminLayout/AdminLayout';


const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },{
        path: "login",
        Component: Login
      },
      {
        path: 'admin',
        Component: AdminLayout, // Utilisation du nouveau layout pour les routes admin
        children: [
          {
            index: true,
            Component: Dashboard, // Route par défaut pour /admin
          },
          // Ajoutez d'autres routes admin ici si nécessaire
        ],
      },
      // { 
      //   path: "form-basic", 
      //   Component: SchoolForm  
      // },
      // { 
      //   path: "liste_ecoles", 
      //   Component: SchoolList 
      //  },
      // { 
      //   path: "liste_eleves",
      //   Component: StudentList  
      // },
      // { 
      //   path: "programmer_session", 
      //   Component: ScheduleSession  
      // },
      // { 
      //   path: "ajout_note", 
      //   Component: AddGrades  
      // },
      
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} fallbackElement={<Preloader />} />
  );
}
