import React, { useState } from "react";
// import elbasharqi from '../images/test1.jpeg'
// import elbasharqir from '../images/elba-sharqi.png'
// import gharpii from '../images/test2.jpeg'
// import ice from '../images/test4.jpeg'
// import basbosabondok from '../images/basbosabondok.png'
// import korwa from '../images/mognatttt/eftar/kortommdkh.webp'


import basbosasada from '../images/sharqiiii/basbosa/basbosasada.webp'
import knafa from '../images/sharqiiii/knafa/knesh.webp'
import sharqyat from '../images/sharqiiii/sharkyat/balhshamkr.webp'
import foram from '../images/sharqiiii/foram/forbklsori.webp'
// import atbak from '../images/sharqiiii/atbak/elbabeklawaturki.webp'
import baklawa from '../images/sharqiiii/baklawa/bklskerf.webp'

import blackbes from '../images/gharpiiii/black-bes/bblots.webp'
import bolat from '../images/gharpiiii/bolat/omalkber.webp'
import sheseacake from '../images/gharpiiii/chese-cake/chc4.webp'
import eclair from '../images/gharpiiii/eclair/eclnotl.webp'
import englishcake from '../images/gharpiiii/english-cake/qlbengchoc.webp'
import bodabst from '../images/gharpiiii/bodabst-rol/bdb2.webp'
import brawness from '../images/gharpiiii/brawnes-stick/brws2.webp'
import gatoah from '../images/gharpiiii/gatoah/gthfrrosh.webp'
import gatoahsoareh from '../images/gharpiiii/gatoah-soareh/boxsada.webp'
// import halwaatfal from '../images/gharpiiii/halwa-atfal/macron24.webp'
import ketaahalwa from '../images/gharpiiii/ketaa-halwa/moltcak.webp'
import especialbes from '../images/gharpiiii/especia-bes/espp11.webp'
import melfay from '../images/gharpiiii/melfay/melfmksr.webp'
import milkcream from '../images/gharpiiii/milk-kreem/mk3.webp'
// import tart from '../images/gharpiiii/tart/qtatrtlots.webp'
import tortfrance from '../images/gharpiiii/torat-france/blcfrst.webp'
import tortagensokr from '../images/gharpiiii/tort-agen-sokr/sokaragen1.webp'
import tortamercan from '../images/gharpiiii/tort-amerecan/amrcblkchoc.webp'
import tortmkasatkh from '../images/gharpiiii/tort-makasat-khasa/tortmksatkhs.webp'
import tortmini from '../images/gharpiiii/tort-mini/tmleprnc.webp'
import treletche from '../images/gharpiiii/treletche/trenotil.webp'
import chocolate from '../images/iceee/checolate/chocremkahwa.webp'
import icecream from '../images/iceee/ice-cream/iceckelo.webp'
import icecreamcake from '../images/iceee/ice-cream-cake/icecoreo.webp'
// import eftar from '../images/mognatttt/eftar/batbastrm.webp'
import makhbozat from '../images/mognatttt/makhbozat/mkh4.webp'
import fataer from '../images/mognatttt/fataer/ftrrom.webp'
import mogan from'../images/mognatttt/mogan/mog4.webp'
import korwas from'../images/mognatttt/korwason/krw4.webp'
import danshh from'../images/mognatttt/dansh/dan2.webp'
// import salezonat from '../images/mognatttt/salezonat/salskher.webp'
import kaak from '../images/nawaem/kaak/kaakagmia.webp'
import donates from '../images/mognatttt/donates-senabon/ds5.webp'
import betefoer from '../images/nawaem/betefore-sable/btfchoc.webp'
import baskwet from '../images/nawaem/baskwet/basknash.webp'
import waiting from '../images/favicon.webp'

const SubCategories = ({ selectedCategory, setSelectedSubCategory, selectedSubCategory,handleScrollToProducts }) => {
  const [loading, setLoading] = useState(true)
  
  const subCategories = [
    { id: 2, className: "gharpi", name:  "تورت فرنسي" , img: `${tortfrance}` },
    { id: 3, className: "gharpi", name:  "تورت اميركان" , img: `${tortamercan}` },
    { id: 4, className: "gharpi", name:  "تورت ميني" , img: `${tortmini}` },
    { id: 5, className: "gharpi", name:  "تورت مقاسات خاصة" , img: `${tortmkasatkh}` },
    { id: 6, className: "gharpi", name:  "تورت عجين سكر" , img: `${tortagensokr}` },
    { id: 7, className: "gharpi", name:  "تريلتشي" , img: `${treletche}` },
    { id: 8, className: "gharpi", name:  "بولات" , img: `${bolat}` },
    { id: 9, className: "gharpi", name:  "ميلك كريم" , img: `${milkcream}` },
    { id: 10, className: "gharpi", name:  "تشيز كيك" , img: `${sheseacake}` },
    { id: 11, className: "gharpi", name: "بلاك بيس" , img: `${blackbes}` },
    { id: 12, className: "gharpi", name:  "انجلش كيك" , img: `${englishcake}` },
    { id: 13, className: "gharpi", name:  "بودابست رول" , img: `${bodabst}` },
    { id: 14, className: "gharpi", name:  "براونز استيك" , img: `${brawness}` },
    { id: 15, className: "gharpi", name:  "جاتوه" , img: `${gatoah}` },
    { id: 16, className: "gharpi", name:  "جاتوه سواريه" , img: `${gatoahsoareh}` },
    { id: 17, className: "gharpi", name:  "ميلفاي" , img: `${melfay}` },
    { id: 18, className: "gharpi", name:  "اكلير" , img: `${eclair}` },
    { id: 19, className: "gharpi", name:  "ديزيرت" , img: `${ketaahalwa}` },
    { id: 20, className: "gharpi", name:  "اسبشيال بيس" , img: `${especialbes}` },
    
    { id: 21, className: "chocice", name:  "شوكولاتة" , img: `${chocolate}` },
    { id: 22, className: "chocice", name:  "ايس كريم كيك" , img: `${icecreamcake}` },
    { id: 23, className: "chocice", name:  "ايس كريم" , img: `${icecream}` },
    
    { id: 24, className: "sharqi", name:  "بسبوسة" , img: `${basbosasada}` },
    { id: 25, className: "sharqi", name:  "كنافة" , img: `${knafa}` },
    { id: 26, className: "sharqi", name:  "شرقيات" , img: `${sharqyat}` },
    { id: 27, className: "sharqi", name:  "فورم" , img: `${foram}` },
    // { id: 6, className: "sharqi", name:  "اطباق" , img: `${atbak}` },
    { id: 28, className: "sharqi", name:  "بقلاوة" , img: `${baklawa}` },

    { id: 29, className: "moganat", name:  "مخبوزات" , img: `${makhbozat}` },
    { id: 30, className: "moganat", name:  "فطائر" , img: `${fataer}` },
    { id: 31, className: "moganat", name:  "معجنات" , img: `${mogan}` },
    { id: 32, className: "moganat", name:  "دوناتس و سينامون" , img: `${donates}` },
    { id: 33, className: "moganat", name:  "كرواسون" , img: `${korwas}` },
    { id: 34, className: "moganat", name:  "دانش" , img: `${danshh}` },
    
    { id: 35, className: "nawaem", name:  "كعك" , img: `${kaak}` },
    { id: 36, className: "nawaem", name:  "بسكويت" , img: `${baskwet}` },
    { id: 37, className: "nawaem", name:  "ببيتي فور و سابليه" , img: `${betefoer}` },
    
    // { id: 38, className: "gharpi", name:  "حلوي اطفال" , img: `${halwaatfal}` },
    // { id: 39, className: "gharpi", name:  "تارت" , img: `${tart}` },
    // { id: 40, className: "moganat", name:  "افطار" , img: `${eftar}` },
    // { id: 41, className: "moganat", name:  "ساليزونات" , img: `${salezonat}` },
  ];

  // تصفية التصنيفات الفرعية بناءً على التصنيف الرئيسي
  const filteredSubCategories = subCategories.filter(
    (subCategory) => subCategory.className === selectedCategory
  );
 
  // window.addEventListener('scroll', () => {
  //   // console.log(window.scrollY);
  // });    const handleScroll = () => {
  //  setTimeout(() => {
  //   window.scrollTo({
  //       top: 550, // تعديل هذه القيمة للوصول إلى المسافة المطلوبة
  //       behavior: "smooth",
  //     });
  //  }, 500);
  // };
  return (
    <div className="par-sub">
      {filteredSubCategories.map((subCategory) => (
        <div
          key={subCategory.id}
          onClick={() =>{ setSelectedSubCategory(subCategory.id); handleScrollToProducts();}}
          // style={{ backgroundImage: `url(${subCategory.img})` }}
          // className={`category-sub ${selectedSubCategory === subCategory.id ? "active" : ""}`}
          className="sub-category-card"
        >
          <div className="sub-category-card-img-div">
          <img
        onLoad={() => setLoading(false)} // عند اكتمال التحميل
        style={{
         
          opacity: loading ? 0.5 : 1,
          transition: 'opacity 0.3s ease',
        }}
        className="sub-category-card-img"
        src={subCategory.img}
       
        loading="lazy"
      />

      {/* مؤشر التحميل */}
      {loading && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}
        </div>
          {/* <p
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              fontFamily: "Dancing Script",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontWeight: "bold",
              fontSize: "20px",
              textShadow: "1px 1px 5px rgba(0,0,0,0.9)",
            }}
          >
            {subCategory.name[language]}
          </p> */}
          <div className="sub-category-card-text-div">
          <p className="sub-category-card-text">{subCategory.name}</p>
        </div>
        </div>
      ))}
    </div>
  );
};

export default SubCategories;
