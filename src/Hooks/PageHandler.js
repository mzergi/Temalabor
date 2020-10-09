import {useEffect, useState} from 'react';
import MainPage from '../Pages/MainPage';
import ProductPage from '../Pages/ProductPage';

export const PAGES = {
    MAIN: 'main',
    PRODUCT: 'product'
}

export default function usePageHandler(props){
    const[page, setPage] = useState(null);

    let main_page = MainPage({setPage: setPage});
    let product_page = ProductPage({setPage: setPage});

    useEffect (() => {
        var curr_page;
        switch(page){
            case PAGES.MAIN:
                curr_page = main_page;
                break;
            case PAGES.PRODUCT:
                curr_page = product_page;
                break;
            default:
                curr_page = main_page;
        }
        props.setPage(curr_page);
    })

    if(page === null){
        setPage(PAGES.MAIN);
    }

    return page;
}