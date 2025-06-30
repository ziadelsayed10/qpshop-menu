import React from 'react'
import elbasharqi from '../images/shrqii3.webp'
import gharpii from '../images/frfr3.webp'
import ice from '../images/ice.webp'
import mognat from '../images/mognat4.webp'
import nawam from '../images/bskbsk.webp'
const Categories = ({selectedCategory,setSelectedCategory,setSelectedSubCategory,handleScrollToSubCategories}) => {
    const categories = [
        { id: 2,className: "sharqi", name:  "شرقي" , img: `${elbasharqi}` },
    { id: 3,className: "gharpi", name:  "غربي" , img:  `${gharpii}` },
    { id: 4,className: "chocice", name: "شوكلاتة وايس كريم" , img: `${ice}`},
    { id: 5,className: "moganat", name: "بيكري" , img: `${mognat}`},
    { id: 6,className: "nawaem", name: "نواعم" , img: `${nawam}`},
    ]

    
  return (
    <>
    <div className='text-title'>we make your sweet dreams come true</div>
<div className='cat-par'>
{categories.map((category) => (
    <div onClick={() => {
        setSelectedCategory(category.className); // تحديد التصنيف
        setSelectedSubCategory(null); // تحديد التصنيف
        handleScrollToSubCategories(); // تنفيذ التمرير
        
      }} key={category.id} className={`category-card ${selectedCategory === category.id ? "active" : ""}`}>
    <img alt={category.name} className='category-card-img'  src={category.img} style={{width:"60px",height:"79px"}} />
     <div className='category-card-text'>{category.name}</div>
     </div>
))}
</div>
{/* <div className='text-btm-title'>متاح كوليكشن شرقي ميكس حسب الاختيار بداية من سعر 250 جنيه وحتي 550 جنيه(للكيلو)</div> */}
    {/* <div className='category-card'>
       <img className='category-card-img'  src={elbasharqi} style={{width:"60px"}} />
        <div className='category-card-text'>شرقي</div>
        </div>
    <div className='category-card'>
       <img className='category-card-img'  src={gharpii} style={{width:"60px"}} />
        <div className='category-card-text'>غربي</div>
        </div>
    <div className='category-card'>
       <img className='category-card-img'  src={ice} style={{width:"60px"}} />
        <div className='category-card-text'>شوكلاتة وايس كريم</div>
        </div>
    <div className='category-card'>
       <img className='category-card-img'  src={mognat} style={{width:"60px"}} />
        <div className='category-card-text'>مخبوزات ومعجنات</div>
        </div> */}
    </>
  )
}

export default Categories