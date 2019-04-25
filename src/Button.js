import React from 'react';
import './button.css';

class Button extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
        console.log(new Promise(function(resolve,reject){

        }))
        console.log("foobar".includes("foo"));
        this.text = "Click Me"

    }


    render(){
        return(
            <span className="button">
                {this.text}
            </span>
        )
    }
}

export default Button;