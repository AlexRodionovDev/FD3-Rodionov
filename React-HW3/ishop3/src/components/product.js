import React from 'react';
import PropTypes from 'prop-types';
import '../styles/product.css';


class ProductsBlock extends React.Component {

    static propTypes= {
        products: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                    code: PropTypes.number.isRequired,
                    price: PropTypes.number.isRequired,
                    photo: PropTypes.string.isRequired,
                    inStock: PropTypes.number.isRequired,
                    btnDel: PropTypes.string.isRequired,
            })
        )
    }


    state = {
        stateProducts: this.props.products,
        trClicked: '',
    }

   
    trDel = (e) => {
        let delElem = this.state.stateProducts;

        delElem.forEach((elem, i) => {

            if(e.target.parentElement.parentElement.id/* this.state.tdClick */ == elem.code){

                if(confirm('Удалить товар из списка')){
                    delElem.splice(i,1)
                }
            }
            this.setState( {stateProducts: delElem} );
        })
    }


    setTrClick = (e) => { 
        if(!this.props.stСhangeValue){
            this.setState({trClicked: e.target.parentElement.id}, this.cbTrClicked);
        }
    }

    setEditClick = (e) => { 
        this.setState({trClicked: e.target.parentElement.parentElement.id}, this.cbTrClicked);
        e.stopPropagation();
    }


    cbTrClicked = () => { 
        this.props.cbTrClicked(this.state.trClicked)
        return this.state.trClicked;
    }
    

    render() {
        // console.log(this.card())
        let prodBody = [];   

        this.state.stateProducts.forEach((elem)=> {
 
            let productCode = 
                <tr key= {elem.code} id= {elem.code} onClick= {this.setTrClick} className={elem.code == this.state.trClicked ? 'BrownColor Product': 'Product'}>
                    <td className='Name tdItem'>{elem.name}</td>
                    <td className='Price tdItem'>{elem.price}</td>
                    <td className='Photo tdItem'>{elem.photo}</td>
                    <td className='InStock tdItem'>{elem.inStock}</td>
                    <td className='BtnDelContainer tdItem'>
                        <button className='BtnEdit' onClick= {this.setEditClick}>{elem.BtnEdit}</button>
                        <button className='BtnDel' onClick= {this.trDel}>{elem.btnDel}</button>
                    </td>
                </tr>
            prodBody.push(productCode);
        });

       return (
            <tbody className= 'TableBody'>
                {prodBody}
            </tbody>
       );
    }
}

export default ProductsBlock; 
