import React from 'react';
import styles from './custom-styles';

// lang comes `undefined` (tested), thus hardcoding it to support `jsx` always
const H2 = ({ id, children }) => {
  return <h2 style={styles.source.h2}>{children}</h2>
}

H2.displayName = 'MD-H2'

export default H2
