import React, { Suspense, useEffect, useRef, useState } from "react";
import './app.css'
import Categories from './components/Categories'
import Header from './components/Header'
import SubCategories from './components/SubCategories'
import Products from './components/Products'
import logog from '../src/images/cqasrorang22.png'
// const Categories = React.lazy(() => import('./components/Categories'));
export function App() {
  const subCategoriesRef = useRef(null); // مرجع لـ SubCategories
  const productsRef = useRef(null); // مرجع لـ SubCategories

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedSubCategory, setSelectedSubCategory] = useState(null)
  const [searchText, setSearchText] = useState(""); // نص البحث
 
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2500);
  // }, []);




  const handleScrollToSubCategories = () => {
    setTimeout(() => {
      subCategoriesRef.current?.scrollIntoView({  behavior: 'smooth', // لتمرير سلس
        block: 'start', // يحدد مكان العنصر عند التمرير (start, center, end)
        });
      //   window.scrollBy({ 
      //     top: 20, // تحريك لأعلى بمقدار 20px 
      //     behavior: 'smooth' // نفس السلاسة
      // });
      
    }, 500);
  };
  const handleScrollToProducts = () => {
    setTimeout(() => {
      productsRef.current?.scrollIntoView({  behavior: 'smooth', // لتمرير سلس
        block: 'start', // يحدد مكان العنصر عند التمرير (start, center, end)
       });
      
    }, 500);
  };
  
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 2000);

    // تنظيف الـ timer عند فك تركيب المكون
    return () => clearTimeout(timer);
  }, []);

  if (initialLoading) {
    return (
      <div className="loading-screen">
        <p className="lod-text">... مرحباً بك في منيو قصر البارون</p>
        <img src={logog} alt="Loading..." className="loading-image" />
        <div className="loading-circle"></div>
      </div>
    );
  }

  
  return (
    <>
       
    

    <Header searchText={searchText} setSearchText={setSearchText} handleScrollToProducts={handleScrollToProducts}/>
   
    <Categories selectedCategory ={selectedCategory} setSelectedCategory ={setSelectedCategory}
     setSelectedSubCategory={setSelectedSubCategory} handleScrollToSubCategories={handleScrollToSubCategories}/>
     
    <div ref={subCategoriesRef}>
     <SubCategories selectedSubCategory={selectedSubCategory} setSelectedSubCategory={setSelectedSubCategory}
        selectedCategory ={selectedCategory} handleScrollToProducts={handleScrollToProducts}/>
    </div>
    <div ref={productsRef}>
    <Products searchText={searchText}  setSelectedSubCategory = {setSelectedSubCategory}
       selectedSubCategory ={selectedSubCategory}/>
       </div>
   
    </>
  )
}
