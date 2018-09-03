import React from 'react';
import {
  View,
} from 'react-native';

import {
  Bubbles,
} from 'react-native-loader';

export default function Loader() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#fff',
      alignItems: 'center',

    }}
    >
      <View>
        <Bubbles size={10} color="#ccc" />
      </View>
    </View>
  );
}
