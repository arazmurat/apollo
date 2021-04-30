import Business from '../Business/Business'

import React, { Component } from 'react'

export default class BusinessList extends Component {

    render() {
        const {businesses}=this.props
        return (
            <div className="BusinessList">
                {businesses.map((item,index)=>{
                    return <Business key={index} business={item}/>
                })}
            </div>
        )
    }
}
