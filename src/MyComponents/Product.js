import React from 'react';
import './Product.css';
import {useStateValue} from './StateProvider'

function Product({ id, title, image, price, rating }) {

    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        console.log("This is basket item >>> ",basket);
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };


    return (
        <div className="product">
            <div className="product__info">
                <p>{title.slice(0, 50)}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>&#9733;</p>
                    ))}
                </div>
            </div>
            <img src={image} alt="" />

            <button onClick={addToBasket}>ADD TO BASKET</button>
        </div>
    )
}

export default Product;