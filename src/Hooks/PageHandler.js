import React, {useState} from 'react';
import './App.css';
import useProduct from './Product.js'
import useHeadLine from './HeadLine.js'
import useProductAPI from './ProductAPI'

export default function usePageHandler(current_page){
    const[Page, setPage] = useState({
        page: current_page
    })
    return Page.page;
}