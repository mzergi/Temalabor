import {useState} from 'react';

export default function usePageHandler(current_page){
    const[Page, setPage] = useState({
        page: current_page
    })
    return Page.page;
}