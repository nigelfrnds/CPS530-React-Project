import React from 'react';

const ListItem = ({ value }) => {
  return (
    <div style={styles.container}>
      <span>
        <text style={styles.label}>{value}</text>
      </span>
      <span className="squaredThree">
        <input
          id="squaredThree"
          type="checkbox" value={value}
        />
      </span>
    </div>
  );
}

const styles = {
  container: {
    display: 'inline',
    width: '75%',
  },
  label: {
    fontSize: '14px',
    padding: '10px',
  }
};

export default ListItem;
