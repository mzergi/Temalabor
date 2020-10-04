import {useState} from 'react';
import './App.css';
import MainPage from '../Components/MainPage';


export default function useApp(){
  const [page, setPage] = useState(0);

  let _page = MainPage({_setPage: setPage});
  if(page === 0){
    setPage(_page);
  }
  return page;
}

