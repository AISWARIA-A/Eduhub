import React from 'react';
import './Plans.css'

export default function Plans (){

    const pricingData = [
      {
        title: "Regular Member",
        price: "Rs.0",
        duration: "/month",
        color: "#fff",
        features: [
          "Limited access to customers",
          "Standard options",
          "5 classess per week",
          "Limited courses",
          "Learn without mentor",
        ],
      },
      {
        title: "Premium Member",
        price: "Rs.300",
        duration: "/month",
        color: "#6f55f2",
        features: [
          "Unlimited access to customers",
          "Personal mentor",
          "Standard options",
          "5 classess per week",
          "Free certificates after completion",
        ],
      },
      {
        title: "Standard Member",
        price: "Rs.100",
        duration: "/month",
        color: "#fff",
        features: [
          "Unlimited access to customers",
          "Personal mentor",
          "Standard options",
          "5 classess per week",
          "Free certificates after completion",
        ],
      },
    ];

    return(

        <div className='container'>
            <div className='pricing-top'>
                <h2 className='section_title'>Premium Pricing Plans</h2>
                <p>Unlock elite tech services with our premium pricing plan and soar ahead of the competition</p>
            </div>
            <div className='pricing-wrapper'>
                {pricingData.map((item,index) => (
                    <div className='pricing_item' key={index}>
                        <div className='pricing-card-top' style={{background : item.color}}>
                            <h2 className='section_title'>{item.title}</h2>
                            <h2 className='pricing-section-title'>
                                {item.price} <span>{item.duration}</span>
                            </h2>
                        </div>
                        <div className='services'>
                            <ul>
                                {item.features.map((feature,index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <button className='register-btn'>Join</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )

}