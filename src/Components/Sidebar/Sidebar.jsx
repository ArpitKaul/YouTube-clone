import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';
import home from '../../assets/home.png';
import game_icon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'

const Sidebar = ({sidebar , category , setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className="shortcut-links">
        <div className={`side-links ${category===0? "active": ""}`} onClick={()=>setCategory(0)}>
          <Link to="/">
            <img src={home} alt="" /><p>Home</p>
          </Link>
        </div>
        <div className={`side-links ${category===20? "active": ""}`} onClick={()=>setCategory(20)}>
          <Link to="/gaming">
            <img src={game_icon} alt="" /><p>Gaming</p>
          </Link>
        </div>
        <div className={`side-links ${category===2? "active": ""}`} onClick={()=>setCategory(2)}>
          <Link to="/automobiles">
            <img src={automobiles} alt="" /><p>Automobiles</p>
          </Link>
        </div>
        <div className={`side-links ${category===17? "active": ""}`} onClick={()=>setCategory(17)}>
          <Link to="/sports">
            <img src={sports} alt="" /><p>Sports</p>
          </Link>
        </div>
        <div className={`side-links ${category===24? "active": ""}`} onClick={()=>setCategory(24)}>
          <Link to="/entertainment">
            <img src={entertainment} alt="" /><p>Entertainment</p>
          </Link>
        </div>
        <div className={`side-links ${category===28? "active": ""}`}onClick={()=>setCategory(28)}>
          <Link to="/technology">
            <img src={tech} alt="" /><p>Technology</p>
          </Link>
        </div>
        <div className={`side-links ${category===10? "active": ""}`} onClick={()=>setCategory(10)}>
          <Link to="/music">
            <img src={music} alt="" /><p>Music</p>
          </Link>
        </div>
        <div className={`side-links ${category===22? "active": ""}`} onClick={()=>setCategory(22)}>
          <Link to="/blogs">
            <img src={blogs} alt="" /><p>Blogs</p>
          </Link>
        </div>
        <div className={`side-links ${category===25? "active": ""}`} onClick={()=>setCategory(25)}>
          <Link to="/news">
            <img src={news} alt="" /><p>News</p>
          </Link>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
            <img src={jack} alt="" /> <p>pewDiepie</p>
        </div>
        <div className="side-link">
            <img src={simon} alt="" /> <p>MrBeast</p>
        </div>
        <div className="side-link">
            <img src={tom} alt="" /> <p>Justin Bieber</p>
        </div>
        <div className="side-link">
            <img src={megan} alt="" /> <p>5-Minute Crafts</p>
        </div>
        <div className="side-link">
            <img src={cameron} alt="" /> <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
