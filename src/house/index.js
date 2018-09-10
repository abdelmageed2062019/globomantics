import React, { Component } from 'react';
import "./house.css"
import emailIcon from './Email.png';
import Inquiry from './Inquiry';

class House extends Component {
    state = { InquiryShown: false }

    inquiryToogle = () => {
        this.setState ({ InquiryShown: !this.state.InquiryShown })
    }

    render() { 
        const house = this.props.house;
        const inquiry = this.state.InquiryShown ?
            <Inquiry house={house} /> : null;
        return (  
            <div>
                <div className="row mt-2">
                <h5 className="col-md-12">{house.country}</h5>
                </div>
                <div className="row">
                <h3 className="col-md-12">{house.address}</h3>
                </div>
                <div className="row">
                <div className="col-md-7">
                    <img src={`https://images.pexels.com/photos/${house.photo}/pexels-photo-${house.photo}.jpeg?w=600&h=400&auto=compress&cs=tinysrgb`} alt="house" />
                    
                </div>
                <div className="col-md-12">
                    <p className="price">${house.price}</p>
                    <p>{house.description}</p>
                    <img src={emailIcon} height="50" alt="inquiry"
                        onClick={this.inquiryToogle} />
                        {inquiry}
                </div>
                </div>
            </div>


        );
    }
}
 
export default House;