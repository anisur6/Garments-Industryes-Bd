import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Garments from '../Garments/Garments';
import './Industries.css'

const Industries = () => {
    const [industrys, setindustrys] = useState([]);
    const [cart, setcart] = useState([]);

    useEffect(() => {
        fetch('./garments.JSON')
            .then(res => res.json())
            .then(data => setindustrys(data));
    }, [])

    const handlecart = (company) => {
        // console.log(product);
        const newcart = [...cart, company]
        setcart(newcart);
    }



    return (
        <div className="industry-container">

            <div className="garments-container">
                {
                    industrys.map(company => console.log(company))
                }

                {
                    industrys.map(company => <Garments
                        company={company}
                        key={company.name}
                        handleCart={handlecart}></Garments>)
                }
            </div>


            <div className="garments-capital">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Industries;