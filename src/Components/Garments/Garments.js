import React from 'react';
import './Garments.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCaretSquareDown, faCalculator, faFaucet, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

const Garments = (props) => {
    // console.log(props.company);
    const { name, img, company, Website, Shares, phone } = props.company;
    const element = <FontAwesomeIcon icon={faCalculator} />

    return (

        <div className="single-comp">
            <img className="img-class" src={img} alt="" />
            <h3>Company Name : {company}</h3>
            <h4>Founder Name : {name}</h4>

            <h5>Contact No : {phone}</h5>
            <h5>Website : {Website}</h5>
            <h4>Share Amount : {Shares}</h4>



            <button className="btn" onClick={() => props.handleCart(props.company)}>
                {element} Get Total Share Amount</button>
            
            <div>
                <FontAwesomeIcon icon={["fas", "coffee"]} />
                <FontAwesomeIcon><i class="fab fa-linkedin"></i></FontAwesomeIcon>
            </div>
        </div>

    );
};

export default Garments;