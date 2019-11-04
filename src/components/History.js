import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const History = ({ items }) => {
  const elements = items.map((item, i) => {
    return <HistoryItem key={i} {...item} />
  })
  return (
    <div>
      {elements}
    </div>
  )
}

export default History;