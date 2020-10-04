import {useState} from 'react';
import './App.css';
import MainPage from '../Components/MainPage';
import ProductPage from '../Components/ProductPage';


export default function useApp(){
  const [page, setPage] = useState(0);

  
  let main_page = new MainPage({setPage: setPage});

  if(page === 0){
    setPage(main_page);
  }
  return page;
}

