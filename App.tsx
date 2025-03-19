import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [bgColor, setBgColor] = useState('#fffff');

  const generateRandomColor = () => {
    const haxRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += haxRange[Math.floor(Math.random() * haxRange.length)];
    }
    console.log(color);

    setBgColor(color);
  };

  return (
    <>
      <StatusBar backgroundColor="#000" />
      <View style={[styles.container, {backgroundColor: bgColor}]}>
        <TouchableOpacity onPress={generateRandomColor}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Click Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#F38C79',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
  },
});

export default App;
