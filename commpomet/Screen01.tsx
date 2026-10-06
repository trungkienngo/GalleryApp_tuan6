import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Screen01({
  navigation,
}: any) {
  return (
    <View style={styles.container}>

      <Text style={styles.intro}>
        A premium online store for
        {'\n'}
        sporter and their stylish choice
      </Text>

      <View style={styles.imageBox}>
        <Image
          source={require('../assets/img1.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>
        POWER BIKE
        {'\n'}
        SHOP
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Screen02')
        }
      >
        <Text style={styles.buttonText}>
          Get Started
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },

  intro: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 25,
  },

  imageBox: {
    backgroundColor: '#FDECEC',
    borderRadius: 25,
    height: 330,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  image: {
    width: '90%',
    height: '90%',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 35,
  },

  button: {
    backgroundColor: '#F44343',
    paddingVertical: 16,
    borderRadius: 30,
  },

  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});