import { AppRegistry } from 'react-native';
import App from './App'; // Your main App component
import { name as appName } from './app.json';

// Register the App component
AppRegistry.registerComponent(appName, () => App);
