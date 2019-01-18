import Helmet from 'react-helmet';
import React from 'react';

import Header from '../components/header';
import Hello from '../components/blocks/hello';
import withLayout from '../components/with-layout';

export default withLayout(() => (
  <main>
    <Helmet>
      <title>Goska Soluch</title>
    </Helmet>

    <Header title="Trainerin • Referentin • Prozessbegleiterin" />

    <Hello
      title="Hallo!"
      intro="Begleitung von durch. bedeutet für mich und immer schon. Begleitung von
      durch. bedeutet für mich und immer schon.Begleitung von durch. bedeutet
      für mich und immer schon."
    />
  </main>
));
