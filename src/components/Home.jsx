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
                <img src={main} className='main-image' alt='abc' />
            </div>
            <div className='top'>
                <div className="line1"></div>
                <div className="text">Top Categories to choose from</div>
                <div className="line1"></div>
            </div>
            <div className="products">
                <img src={products} className='photos' alt='abc' />
            </div>
            <div className="products">
                <img src={essential} className='photos' alt='abc'/>

            </div>
            <div className="products">
                <img src={homepic} className='photos' alt='abs' />

            </div>
            <div className="products">
                <img src={homepic3} className='photos' alt='abc' />

            </div>

            <div className="signup">
                <img src={signup} className='signupImage' alt='abc'/>
            </div>
          
        </div>
        </>
    )
}

export default Home