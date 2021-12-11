const storeName = 'ishop';

const productsArr =[
    {name: 'tv', code: 1, price: 700, photo: 'https://www.millionpodarkov.ru/incoming_img/pleer.ru/9203547.jpg', inStock: 100},
    {name: 'smartphone', code: 2, price: 300, photo: 'https://microless.com/cdn/products/d98a338fc1ea731d545043ca8d89a174-hi.jpg', inStock: 200},
    {name: 'laptop', code: 3, price: 1000, photo: 'https://ae01.alicdn.com/kf/Uf0c0a7b0ba0d46e9802508593e35ba85w/255-G7-39-6-15-6-1366x768-AMD-Ryzen-3-8.jpg', inStock: 50},
    {name: 'fan', code: 4, price: 70, photo: 'https://www.777555.by/content/thumb/items/img_2006524_big_1_1024.jpg', inStock: 100},
    {name: 'mixer', code: 5, price: 100, photo: 'https://imarket.by/upload/simpleimage_cache/aa00b6e87209b7c2a5f74d7cfaa4662e_1200x800_w0_100.jpg', inStock: 150},
]


let MyShop = React.createClass({

    displayName: 'MyShop',

    render: function(){

        let tableItem = [];
        this.props.products.forEach(elem => {
            let product = elem;
            let productCode = 
                React.DOM.tr( {key: product.code, className: 'Product'}, 
                    React.DOM.td( {className: 'Name tdItem'}, product.name ),
                    React.DOM.td( {className: 'Price tdItem'}, product.price ),
                    React.DOM.td( {className: 'Photo tdItem'}, product.photo ),
                    React.DOM.td( {className: 'InStock tdItem'}, product.inStock ),
                    );
            tableItem.push(productCode);
        });
 
      return React.DOM.table( {className:'MyShop'}, 
        React.DOM.caption( {className: 'TableName'},this.props.name),
        React.DOM.tbody( {className: 'TableItem'}, tableItem )
        );
    },
});

