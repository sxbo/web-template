import React from 'react';
import pig from '../img/pig.jpg';
import './img.css';

class Img extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
        this.text = "Click Me"
    }


    render(){
        return(
            <div className="img-s">
                <img src={pig}  alt="xiaozhu" />
            </div>
        )
    }
}


export default Img;