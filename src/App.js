import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import './App.css';

function App() {
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;
