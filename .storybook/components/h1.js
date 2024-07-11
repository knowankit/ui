import React from 'react';
import styles from './custom-styles';

// lang comes `undefined` (tested), thus hardcoding it to support `jsx` always
const H1 = ({ id, children }) => {
  return <h1 style={styles.source.h1}>{children}</h1>
}

H1.displayName = 'MD-H1'

export default H1
