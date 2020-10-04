import React, {useState} from 'react';
import './App.css';
import useProduct from './Product.js'
import useHeadLine from './HeadLine.js'
import useProductAPI from '../Components/ProductAPI'
import usePageHandler from './PageHandler'
import ProductPage from '../Components/ProductPage'

/*export default function App() {

    let page = usePageHandler(<ProductPage/>)

    return page;
}*/

export default function useApp(){
  let _page = usePageHandler(<ProductPage/>)
  const [App, setApp] = useState({
      page: _page
  })
  return App.page;
}

