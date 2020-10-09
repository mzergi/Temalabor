import React from 'react';
import useHeadLine from '../Hooks/HeadLine.js';

export default function MainPage(){
    return (
        <h>
          <div>
            {useHeadLine("Z's Webshop")}
          </div>
        </h>
      );
}