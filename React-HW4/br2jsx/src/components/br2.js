import React from "react";
import PropTypes from "prop-types";
import'../styles/br2.css';


class AccountBlock extends React.Component {

    state = {
        stDataString: this.props.dataString,
    }


    render() {
        let arr = this.state.stDataString.split(' ').join(''); //'первый<br>второй<br/>третий<br/>последний'
        let arr2 = arr.replace(/<br>/ig, '<br/>'); //'первый<br/>второй<br/>третий<br/>последний'
        let arrBr = arr2.match(/<br\/>/g); // ['<br/>', '<br/>', '<br/>']
        let arrWords = arr2.split('<br/>'); //['первый', 'второй', 'третий', 'последний']
        let resultArr = []; //['первый', '<br/>', 'второй', '<br/>', 'третий', '<br/>', 'последний']


        for(let i = 0; i < arrWords.length; i++){
            if(arrWords[i]){
                resultArr.push(arrWords[i]);
            }
            if(arrBr[i]){
                resultArr.push(<br/>);
            }
        }
        
    return (
        <div>
            {resultArr}
        </div>
    )}
}

export default AccountBlock;