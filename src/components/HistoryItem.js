import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ method, url }) => {
  return (
    <>
      <p>{method}</p>
      <p>{url}</p>
    </>
  )
}

HistoryItem.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default HistoryItem;