import React from 'react';
import PropTypes from 'prop-types';
import styles from './Display.css'

const Display = ({ data }) => {
  return (
    <div className={styles.Display}>
      {data}
    </div>
  )
}

Display.propTypes = {
  data: PropTypes.string.isRequired
}

export default Display;