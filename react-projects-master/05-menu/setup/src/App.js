import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [itemMenu,setItemMenu]=useState(items);
  const [Categorie,setCategorie]=useState([])
 const filterItems=(category)=>{
   if(category==='all'){
     setItemMenu(items)
     return;
   }
    const itemsFilter=items.filter((newitems)=>newitems.category===category);
    setItemMenu(itemsFilter);
 }
  return (
    <main>
      <section className='menu Section'>
       <div className='title'>
         <h2>Our menu</h2>
       </div>
       <div className='underline'></div>
       <Categories filterItems={filterItems}/>
       <Menu items={itemMenu} />
      </section>
    </main>
  )
}

export default App;
