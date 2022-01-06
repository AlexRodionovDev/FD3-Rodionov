import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ColorBlock.css'

class ColorBlock extends React.Component {

    render() {
        let frames = this.props.text;

        this.props.colors.forEach((elem, i)=> {
            frames = <div style={{border:"solid 5px "+elem, padding:"10px"}} key={elem}>{frames}</div>
        });
        console.log(frames)  
        return frames
    }
}

export default ColorBlock;