import { useState } from 'react';

function OrderSubtotal({ product }){
    const quantity = <OrderQuantity />

    return (
        quantity * product.pricetoLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })

    );
}

export default OrderRow;