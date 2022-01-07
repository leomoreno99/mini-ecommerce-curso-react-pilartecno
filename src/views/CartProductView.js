import React, { useEffect, useState } from 'react'
import { getProductById } from '../app/services/productServices'

export const CartProductView = ({match}) => {

    const [productDetail, setProductDetail] = useState(null)


    useEffect(()=> {
        const {params} = match
        getProductById(params.id)
        .then(productFromDB => setProductDetail(productFromDB))
        .catch( e => console.log(e))
    }, [match])


    return (
        <div>
            <h1>{ productDetail && JSON.stringify(productDetail)}</h1>
        </div>
    )
}
