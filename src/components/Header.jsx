import React, { useEffect, useState } from 'react'


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
 
<li className='navbar-icon-list-fac'><a href='https://www.facebook.com/share/19h7fcbJpC/?mibextid=wwXIfr' target='_blank'><i className="fa-brands fa-square-facebook" style = {{color:"#12424c",fontSize:"30px",cursor:"pointer"}}></i></a></li>
<li className='navbar-icon-list-ins'><a href='https://www.instagram.com/qasralbaronpatisserie?igsh=MWh1MW4wMDN2MDBncA==' target='_blank'><i className="fa-brands fa-square-instagram" style = {{color:"#12424c",fontSize:"30px",cursor:"pointer",margin:"0 0 0 20px" ,}}></i></a></li>
    
</ul>
</div>
<div>
<ul className='search-container'>
  <div style={{position: "absolute",
    top: "9px",
    right: "12px",}}><i class="fa-solid fa-magnifying-glass" style="color: #eeeeee;"></i></div>
    <input className='search-input'
      type="text"
      placeholder="   البحث عن منتج ..."
      value={searchText}
      onChange={(e) =>{ setSearchText(e.target.value); handleScrollToProducts()}} // تحديث نص البحث
    />

</ul>
</div>


    </div>
    </>
  )
}

export default Header