import React from 'react'
import BestSellerCard from '../../components/best_seller_card'
import MidBar from '../../components/MidBar'
import ProductSample from '../../components/productSample'
import ServiceLayer from '../../components/Services'


const MidSection = () => {
    return (
        <div>
            <MidBar/>
            <ProductSample/>
            <ServiceLayer/>
        </div>
    )
}

export default MidSection
