import React from 'react';

const ListItem = ({ value }) => {
  return (
    <div style={styles.container}>
      <text style={styles.label}>{value}</text>
      <input
        type="checkbox" value={value}
      />
    </div>
  );
}

const styles = {
  container: {
    display: 'inline-block',
    width: '75%',
  },
  label: {
    padding: '10px',
  }
};

export default ListItem;
