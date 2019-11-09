import React from 'react';
import PropTypes from 'prop-types';
import styles from './Display.css'

const Display = ({ data }) => {
  return (
    <pre className={styles.Display}>
      {data}
    </pre>
  )
}

Display.propTypes = {
  data: PropTypes.string.isRequired
}

export default Display;