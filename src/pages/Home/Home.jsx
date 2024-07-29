// import React, { useState } from 'react'
// import './Home.css'
// import Sidebar from '../../Components/Sidebar/Sidebar'
// import Feed from '../../Components/Feed/Feed'

// const Home = ({sidebar}) => {
// // game pe click kre to game aay music pe click kre to music aay is lie category ko use jr rhe hai 
//   const [category , setCategory] = useState(0);
//   return (
//     <>
//       <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
//       <div className={`container ${sidebar?"":'large-container'}`}>
//         <Feed category={category}/>
//       </div>
//     </>
//   )
// }

// export default Home


import React, { useState } from 'react';
import './Home.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';

const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0);
  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
      <div className={`container ${sidebar ? "" : 'large-container'}`}>
        <Feed category={category} />
      </div>
    </>
  );
};

export default Home;
