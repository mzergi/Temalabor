import React, {useState} from 'react';
import './App.css';
import useProduct from './Product.js'
import useHeadLine from './HeadLine.js'
import useProductAPI from '../Components/ProductAPI'
import usePageHandler from './PageHandler'
import ProductPage from '../Components/ProductPage'
import useMainPage from './MainPage';

/*export default function App() {

    let page = usePageHandler(<ProductPage/>)

    return page;
}*/

export default function useApp(){
  const [page, setPage] = useState(0);

  let _page = useMainPage({_setPage: setPage});
  if(page == 0){
    setPage(_page);
  }
  return page;
}

