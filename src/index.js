import React from 'react';
import {render} from 'react-dom';
import ShandowButtom from './Button';
import Pig from './module1/Img';

render(
    <div>
        <ShandowButtom/>    
        <Pig></Pig>
    </div>,
    document.getElementById("template")
);
