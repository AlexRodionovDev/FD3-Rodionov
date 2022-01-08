import React from "react";
import PropTypes from "prop-types";
import'../styles/br2.css';


class AccountBlock extends React.Component {

    state = {
        stDataString: this.props.dataString,
    }

    render() {
        let arrWords = this.state.stDataString.split(/<br\s*?\/?>/g); 
        let resultArr = [];

        for(let i = 0; i < arrWords.length; i++){
            resultArr.push(<span key= {[i]}>{arrWords[i]}</span>);

            if(i < arrWords.length - 1){
                resultArr.push(<br key= {i+'br'}/>);
            }
        }
        
    return (
        <div>
            {resultArr}
        </div>
    )}
}

export default AccountBlock;