import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import 'swiper/css';
import Blog from './component/Blog/Blog';
import Home from './component/Home/Home';
import Main from './component/layout/Main';
import Quiz from './component/Quiz/Quiz';
import Statics from './component/Statics/Statics';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './component/NotFound/NotFound';


function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element:<Home></Home>
        },
        {
          path:'/home',
          loader:()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element:<Home></Home>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/statics',
          loader:()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element:<Statics></Statics>
        },
        {
          path:'/quiz/:quizId',
          loader:({params})=>{
            return fetch(` https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
            
          },
          element:<Quiz></Quiz>
        }
      ]

    },
    {path:'*',element:<NotFound></NotFound>}
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
