import React from 'react'

const apiKey="6vR2-GHDIXTpfBKFm2uruii808RZFxpDYhH2l-QhQeIyd_jXI1mkHEO-yqBjZZtj_vI4_W5ayJMypZBc5_fauilQZx3y5zuI2BDEZNF-gDNa7S9ogAvbAUNS9b-KYHYx"

const Yelp={
    search(term,location,sortBy){
      return  fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{headers:{Authorization:`Bearer ${apiKey}`}})
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
        return    res.businesses.map(item=>{
            const{id,image_url:imageSrc,name}=item
            return {id,
                imageSrc,
                name,
                address:item.location.address1,
                city:item.location.city,
                state:item.location.state,
                zipCode:item.location.zip_code,
                category:item.categories[0].title,
                rating:item.rating,
                reviewCount:item.review_count
                }
        })})
    }
}

export default Yelp

