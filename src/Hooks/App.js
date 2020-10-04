import {useState} from 'react';
import './App.css';
import useMainPage from '../Components/MainPage';
import useProductPage from '../Components/ProductPage';


export default function useApp(){
  const [page, setPage] = useState(0);

  
  let main_page = useMainPage({setPage: setPage});

  

  if(page === 0){
    setPage(main_page);
  }
  return page;
}

