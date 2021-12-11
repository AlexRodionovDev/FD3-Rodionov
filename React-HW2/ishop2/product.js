
let ProductsBlock = React.createClass({

    displayName: 'ProductsBlock',

    propTypes: {
        products:React.PropTypes.arrayOf(
            React.PropTypes.shape({
                name: React.PropTypes.string.isRequired,
                    code: React.PropTypes.number.isRequired,
                    price: React.PropTypes.number.isRequired,
                    photo: React.PropTypes.string.isRequired,
                    inStock: React.PropTypes.number.isRequired,
                    btnDel: React.PropTypes.string.isRequired,
            })
        ),
    },


    getInitialState: function() {
        return {
            stateProducts: this.props.products,
         }
    },


    trColor: function(e) {
        e.target.parentElement.classList.toggle('BrownColor');
        console.log(this.props.products);
        console.log(this.state.stateProducts);
    },


    trDel: function(e) {
        delElem = this.state.stateProducts;

        delElem.forEach((elem, i) => {

            if(e.target.parentElement.parentElement.id == elem.code){

                if(confirm('Удалить товар из списка')){
                    delElem.splice(i,1)
                }
            }
            this.setState( {stateProducts: delElem} );
            e.stopPropagation();
        })
    },
    

    render: function(){
        let prodBody = [];

        this.state.stateProducts.forEach((elem)=> {
            let productCode = 
                React.DOM.tr( {key: elem.code, className: 'Product', id: elem.code, onClick: this.trColor}, 
                    React.DOM.td( {className: 'Name tdItem '}, elem.name ),
                    React.DOM.td( {className: 'Price tdItem'}, elem.price ),
                    React.DOM.td( {className: 'Photo tdItem'}, elem.photo ),
                    React.DOM.td( {className: 'InStock tdItem'}, elem.inStock ),
                    React.DOM.td( {className: 'BtnDelContainer tdItem'}, 
                        React.DOM.button( {className: 'BtnDel', onClick: this.trDel}, elem.btnDel )),
                    );
                prodBody.push(productCode);
        });
       return React.DOM.tbody( {className: 'TableBody'}, prodBody )
    },
});


