import React from 'react';

import style from './style';

export default Component => props => (
  <>
    <style jsx>{style}</style>
    <Component {...props} />
  </>
);
