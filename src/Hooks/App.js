import {useState} from 'react';
import './App.css';
import MainPage from '../Components/MainPage';
import ProductPage from '../Components/ProductPage';
import PageHandler from './PageHandler';


export default function useApp(){
  const [page, setPage] = useState(0);

  let page_handler = PageHandler({setPage: setPage});

  if(page === 0){
    setPage(page_handler);
  }

  return page;
}

