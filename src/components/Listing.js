import React from 'react';

function Listing({ items }) {
    return (
        <div class="item-list">
            {items.map((item) => {
                let levelColor = 'level';
                if (item.quantity >= 20) {
                    levelColor += '-high'
                } else if (item.quantity <= 10) {
                    levelColor += '-low'
                } else {
                    levelColor += '-medium'
                }
                return (
                    <div div class="item" key={item.listing_id} >
                        <div class="item-image">
                            <a href={item.url}>
                                <img alt="" src={item.MainImage.url_570xN} />
                            </a>
                        </div>
                        <div class="item-details">
                            <p class="item-title">{item.title.length > 50 ? item.title.substring(0, 50) + '...' : item.title}</p>
                            <p class="item-price">{item.currency_code === 'USD' ? `$${item.price}` : item.currency_code === 'EUR' ? `€${item.price}` : `${item.price}${item.currency_code}`}</p>
                            <p class={"item-quantity " + levelColor}>{item.quantity} left</p>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

Listing.defaultProps = {
    items: []
}

export default Listing;