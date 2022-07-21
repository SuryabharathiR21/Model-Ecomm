import React from 'react'

const Cards = ({item , handleClick}) => {
    const {name,imageUrl,price,description,countInStock} = item; 
  return (

<div className='cards'>
    <div className='image_box'>
        <img src={imageUrl} alt='' />
    </div>
    <div className='details'>
    <p>{name}</p>
    <p>{description}</p>
    <p> price - ${price}</p>
    <p>InStock -{countInStock}</p>
    <button className='button' onClick={() => handleClick(item)}>Add to Cart</button>
    </div>
</div>

  );

}

export default Cards