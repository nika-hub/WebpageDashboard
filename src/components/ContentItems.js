import React from 'react';
import '../css/Content.css';
import { FaTrophy, FaUtensils, FaListAlt ,FaArrowRight} from 'react-icons/fa'; 

const IconCard = ({ title, Icon }) => {
  return (
    <div className="icon-card">
      <div className="icon-card-icon">
        <Icon size={50} />
      </div>
      <div className="icon-card-content">
        <h3 className="icon-card-title">{title}</h3>
        <FaArrowRight className="icon-card-arrow" />
      </div>
    </div>
  );
};

const Content = () => {
  const items = [
    { title: 'Goals', Icon: FaTrophy },
    { title: 'Popular Dishes', Icon: FaUtensils },
    { title: 'Menus', Icon: FaListAlt }
  ];

  return (
    <div className='iconcontainer'>
    <div className="icon-gallery">
      {items.map((item, index) => (
        <IconCard key={index} title={item.title} Icon={item.Icon} />
      ))}
    </div>
    </div>
  );
};

export default Content;
