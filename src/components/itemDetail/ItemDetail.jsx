import React from 'react'
import ItemCounter from './itemCounter/ItemCounter'

function ItemDetail({item}) {

    return (
        <div className="itemDetail" >
            <img src={item.pictureSRC} alt={item.name} />
            <div>
                <p className="detailTitle" >{item.name}</p>
                <p className="detailPrice" >${item.price}</p>
                <ItemCounter stock={item.stock} initial={1} />
            </div>
        </div>
    )
}

export default ItemDetail