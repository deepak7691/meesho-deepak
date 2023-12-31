import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import meeshoLogo from '../Images/meeshoLogo.png';
import SearchIcon from '@mui/icons-material/Search';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import '../Styles/header.css';
import { MyAppContext } from './App';
import Profile from './Profile';

function Header() {
  const navigate = useNavigate();
  const { inputValue, setInputValue, count } = useContext(MyAppContext);

  const handleNavigate = (category) => {
    navigate(`/homeReplace/${category}`);
  };

  const navigateHome = () => {
    navigate('/meesho');
  };

  const goToCart = () => {
    navigate('/cart')
  }

  const handleInputChange = (e) => {
    navigate("meesho")
    setInputValue(e.target.value);
  };

 

  const showProfile = () => {
    const profileDetails = document.getElementById('user');
  profileDetails.classList.remove("hidden")

  }

  const hideProfile = () => {
    const profileDetails = document.getElementById('user');
    profileDetails.classList.add("hidden")
  }

  return (
    <div className="container1">
      <header className="header">
        <div className="left-side">
          <div className="logo">
            <img src={meeshoLogo} onClick={navigateHome} alt="logo" />
          </div>
          <div className="input-box">
            <SearchIcon fontSize="large" className="search-icon" />
            <input
              className="input-search"
              type="text"
              placeholder="Try Saree, Kurti or Search by Product Code"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="right-side">
          <ul className="list">
            <li className="download"><PhoneAndroidOutlinedIcon fontSize="small" className='icons' />Download App    </li>
            <li className="supplier">Become a Supplier     </li>
            <div className="profilepart" onClick={showProfile} >
              <div className='profileicon' ><Person2OutlinedIcon fontSize='medium' className='icons' /></div>
              <div className="profile">Profile</div>
            </div>
            <div className="cartpart">
              <div className='cartIcon'><AddShoppingCartOutlinedIcon fontSize='medium' onClick={goToCart} /> {count > 0 && <span className='counter'>{count}</span>} </div>
              <div className="cart">Cart</div>
            </div>
          </ul>
        </div>
      </header>
      <header className="header2">
        <ul className="items">
          <li onClick={() => handleNavigate('women-ethnic')}>Women Ethnic</li>
          <li onClick={() => handleNavigate('women-western')}>Women Western</li>
          <li onClick={() => handleNavigate('men')}>Men</li>
          <li onClick={() => handleNavigate('kids')}>Kids</li>
          <li onClick={() => handleNavigate('home')}>Home & Kitchen</li>
          <li onClick={() => handleNavigate('beauty')}>Beauty & Health</li>
          <li onClick={() => handleNavigate('jewellery')}>Jewellery & Accessories</li>
          <li onClick={() => handleNavigate('bags')}>Bags & Footwear</li>
          <li onClick={() => handleNavigate('electronics')}>Electronics</li>
        </ul>
      </header>
      <div id='user' className="user hidden" onMouseLeave={hideProfile}>
      <Profile/>
      </div>
    </div>

  );
}

export default Header;
