import React from 'react';
import PropTypes from 'prop-types';
import '../styles/shop.css';

import ProductsBlock from '../components/product'
import CardBlock from './card'


class ShopBlock extends React.Component {
    static propTypes= {
        name: PropTypes.string.isRequired,
        colName: PropTypes.shape({
            name: PropTypes.string.isRequired,
            code: PropTypes.number.isRequired,
            price: PropTypes.string.isRequired,
            photo: PropTypes.string.isRequired,
            inStock: PropTypes.string.isRequired,
            btnDel: PropTypes.string.isRequired,
        }),
    }

    state = {
        cbTrClicked: null,
        stProducts: this.props.products,
        stFormValid: true,
        stСhangeValue: false,
    }

    cbTrClicked = (data) => {
        this.setState( {cbTrClicked: data} )
    }

/*     cbFormValid = (data) => {
        this.setState( {stFormValid: data} )
    } */

    cbСhangeValue = (data) => {
        this.setState( {stСhangeValue: data} )
    }


    render() {
        // console.log(this.state.stFormValid)
        console.log(this.state.stСhangeValue)
        let colNameTr =
            <tr key= {this.props.colName.code} className='ProductName'>
                <td className='NameCol ColName'>{this.props.colName.name}</td>
                <td className='PriceCol ColName'>{this.props.colName.price}</td>
                <td className='PhotoCol ColName'>{this.props.colName.photo}</td>
                <td className='InStockCol ColName'>{this.props.colName.inStock}</td>
                <td className='DelCol ColName'>{this.props.colName.btnDel}</td>
            </tr>
      

        return (
            <div>
                <table className='ShopBlock'>
                    <caption className='TableName'>{this.props.name}</caption>
                    <tbody className='TableBody'>
                        {colNameTr} 
                    </tbody>
                <ProductsBlock products={this.state.stProducts} 
                cbTrClicked={this.cbTrClicked} 
                stFormValid={this.state.stFormValid}
                stСhangeValue={this.state.stСhangeValue}/> 
                </table>
                <div>
                    <CardBlock cbTrClicked={this.state.cbTrClicked} 
                    selectedProduct ={this.state.stProducts[this.state.cbTrClicked-1]}
                    /* cbFormValid = {this.cbFormValid} */
                    cbСhangeValue = {this.cbСhangeValue}/>
                </div>
            </div>
        )
    }
}

export default ShopBlock;