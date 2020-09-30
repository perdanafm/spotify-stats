const styles = {
  button: {
    fontSize: '12px'
  },
  item: {
    '&:last-child': {
      borderBottom: 'none'
    },
    '&:nth-child(2n)': {
      background: '#EEF6FF'
    },
    background: '#FFF',
    borderBottom: '1px solid #EEE',
    listStyle: 'none',
    padding: '10px'
  }
};

export default styles;