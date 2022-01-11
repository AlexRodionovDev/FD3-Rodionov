import React from "react";
import PropTypes from 'prop-types';


class DoubleButton extends React.Component{

    firstBtnClick = () => {
        alert(this.props.caption1)
    }


    secondBtnClick = () => {
        alert(this.props.caption2)
    }

    render() {
        let data = 
        <div>
            <button onClick={this.firstBtnClick}>{this.props.caption1}</button>
                {this.props.children}
            <button onClick={this.secondBtnClick}>{this.props.caption2}</button>
        </div>
    return data;
    }
}
export default DoubleButton;