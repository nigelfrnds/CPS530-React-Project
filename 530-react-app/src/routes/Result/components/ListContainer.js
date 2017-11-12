import React from 'react';
import ListItem from './ListItem';

const ListContainer = ({items}) => {
  return (
    <div>
      <ul>
        {
          items.map((item,index) => {
            return (
              <li key={index}>
                <ListItem value={item.text}/>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default ListContainer;
