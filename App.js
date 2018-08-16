import { createStackNavigator } from 'react-navigation';

import Third from './pages/Third';
import Second from './pages/Second';
import Home from './pages/Home';

const App = createStackNavigator({
  Home: { screen: Home },
  Second: { screen: Second },
  Third: { screen: Third },
});

export default App;
