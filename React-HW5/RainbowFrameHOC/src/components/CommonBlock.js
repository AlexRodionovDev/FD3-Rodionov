import React from 'react';
import PropTypes from 'prop-types';
import DoubleButton from '../components/DoubleButton'
import {withRainbowFrame} from '../components/withRainbowFrame'
import '../styles/ColorBlock.css'




class CommonBlock extends React.Component {
  
    render() {
        let FramedDoubleButton = withRainbowFrame(this.props.colors)(DoubleButton);

    return  <div>
                <FramedDoubleButton 
                caption1={this.props.caption1} 
                caption2={this.props.caption2}
                colors={this.props.colors}
                cbPressed={num => alert(num)}>
                    {this.props.children}
                </FramedDoubleButton>    
            </div>
    }
}

export default CommonBlock;