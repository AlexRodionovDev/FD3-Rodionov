import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/ColorBlock.css'



/* function withRainbowFrame(colors) {
    return function(Component) {
      return function(props) {
        let frames = <Component {...props} />;

        colors.forEach((elem, i)=> {
            frames = <div style={{border:"solid 5px "+elem, padding:"10px"}} key={i}>
                {frames}
            </div>
        });
        return frames
      };
    };
} */


let withRainbowFrame = colors => Component => props => {
    let frames = <Component {...props} />;

    colors.forEach((elem, i)=> {
        frames = <div style={{border:"solid 5px "+elem, padding:"10px"}} key={i}>
                    {frames}
                </div>
        });
        return frames;
    };

    
export {withRainbowFrame};withRainbowFrame