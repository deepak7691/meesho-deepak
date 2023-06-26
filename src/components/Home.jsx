import React from 'react'
import "../Styles/home.css"
import main from "../Images/main.png"
import products from "../Images/products.png"
import homepic from "../Images/homepic.png"
import homepic3 from "../Images/homepic3.png"
import essential from "../Images/essential.png"
import signup from "../Images/signup.png"


function Home() {
    return (
        <>  <div className="wholepart">
            <div className='container'>
                <img src={main} className='main-image' />
            </div>
            <div className='top'>
                <div className="line1"></div>
                <div className="text">Top Categories to choose from</div>
                <div className="line2"></div>
            </div>
            <div className="products">
                <img src={products} className='photos' />
            </div>
            <div className="products">
                <img src={essential} className='photos' />

            </div>
            <div className="products">
                <img src={homepic} className='photos' />

            </div>
            <div className="products">
                <img src={homepic3} className='photos' />

            </div>

            <div className="signup">
                <img src={signup} className='signupImage'/>
            </div>
          
        </div>
        </>
    )
}

export default Home