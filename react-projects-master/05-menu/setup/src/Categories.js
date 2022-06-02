import React from 'react';

const Categories = ({allCategories,filterItems}) => {
  return(
    <div className='btn-container'> 
    <button className='filter-btn' onClick={()=>filterItems('allCategories')}>breakfast</button>
    {/* <button className='filter-btn' onClick={()=>filterItems('lunch')}>lunch</button> 
    <button className='filter-btn' onClick={()=>filterItems('shakes')}>shakes</button> 
    <button className='filter-btn' onClick={()=>filterItems('all')}>all</button>  */}
    </div>
    
  )
}

export default Categories;
