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
    }}
    >
      <View style={{
        textAlignVertical: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
      >
        <Bubbles size={10} color="#ccc" styles={{}} />
      </View>
    </View>
  );
}
