import React from 'react';
import Layout from './components/Layout';

const App = () => {
  return (
    <Layout>
      <h2>Benvenuto nel mondo delle piante!</h2>
      <p>Scopri le meraviglie del regno vegetale e impara a prenderti cura delle tue piante.</p>
      <section>
        <h3>Piante da Interno</h3>
        <p>Le piante da interno migliorano la qualità dell'aria e aggiungono un tocco di natura alla tua casa.</p>
      </section>
      <section>
        <h3>Piante da Giardino</h3>
        <p>Scopri le piante perfette per il tuo giardino e come coltivarle al meglio.</p>
      </section>
    </Layout>
  );
};

export default App;
