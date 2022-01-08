import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ColorBlock.css'

class ColorBlock extends React.Component {

    render() {
        let frames = this.props.children;

        this.props.colors.forEach((elem, i) => {
            frames = <div style={{border:"solid 5px "+elem, padding:"10px"}} key={i}>{frames}</div>
        });
        return frames;
    }
}

export default ColorBlock;