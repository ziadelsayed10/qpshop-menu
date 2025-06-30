import React, { useEffect, useState } from 'react'
import { FaMagnifyingGlass, FaSquareFacebook, FaSquareInstagram } from 'react-icons/fa6';


const Header = ({searchText,setSearchText,handleScrollToProducts}) => {
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    // إضافة مستمع التمرير عند تحميل المكون
    window.addEventListener("scroll", handleScroll);

    // إزالة مستمع التمرير عند تفريغ المكون
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
     <div  className={`header ${isTransparent ? "header-transparent" : ""}`}>
     <div>
<ul id="left-navbar">
 
<li className='navbar-icon-list-fac'><a href='https://www.facebook.com/share/19h7fcbJpC/?mibextid=wwXIfr' aria-label="facebook-icon" target='_blank'><FaSquareFacebook  style = {{color:"#12424c",fontSize:"30px",cursor:"pointer"}}/></a></li>
<li className='navbar-icon-list-ins'><a href='https://www.instagram.com/qasralbaronpatisserie?igsh=MWh1MW4wMDN2MDBncA==' aria-label="insta-icon" target='_blank'><FaSquareInstagram  style = {{color:"#12424c",fontSize:"30px",cursor:"pointer",margin:"0 0 0 20px" ,}}/></a></li>
    
</ul>
</div>
<div>
<div className='search-container'>
  <div style={{position: "absolute",
    top: "9px",
    right: "12px",}}><FaMagnifyingGlass style={{color:"#eeeeee"}}/></div>
    <input className='search-input'
      type="text"
      placeholder="   البحث عن منتج ..."
      value={searchText}
      onChange={(e) =>{ setSearchText(e.target.value); handleScrollToProducts()}} // تحديث نص البحث
    />

</div>
</div>


    </div>
    </>
  )
}

export default Header