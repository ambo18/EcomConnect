const path = require('path');

module.exports = {
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
      'react-native/Libraries/Components/View': 'react-native-web/dist/exports/View',
      'react-native/Libraries/Components/Text': 'react-native-web/dist/exports/Text',
      // Add other React Native components as needed
    },
    extensions: ['.web.js', '.js', '.jsx'],
  },
  // Other Webpack configurations...
};
