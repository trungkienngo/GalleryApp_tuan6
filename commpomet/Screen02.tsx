import React, {
    useState,
  } from 'react';
  
  import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    StyleSheet,
  } from 'react-native';
  
  const bikes = [
    {
      id: '1',
      name: 'Pinarello',
      price: 1800,
      category: 'Roadbike',
      image: require('../assets/img2.png'),
    },
    {
      id: '2',
      name: 'Pina Mountain',
      price: 1700,
      category: 'Mountain',
      image: require('../assets/img3.png'),
    },
    {
      id: '3',
      name: 'Pina Bike',
      price: 1500,
      category: 'Roadbike',
      image: require('../assets/img2.png'),
    },
    {
      id: '4',
      name: 'Pinarello',
      price: 1900,
      category: 'Roadbike',
      image: require('../assets/img3.png'),
    },
    {
      id: '5',
      name: 'Pinarello',
      price: 2700,
      category: 'Mountain',
      image: require('../assets/img1.png'),
    },
    {
      id: '6',
      name: 'Pinarello',
      price: 1350,
      category: 'Mountain',
      image: require('../assets/img2.png'),
    },
  ];
  
  export default function Screen02({
    navigation,
  }: any) {
    const [category, setCategory] =
      useState('All');
  
    const filteredBikes =
      category === 'All'
        ? bikes
        : bikes.filter(
            (item) =>
              item.category === category
          );
  
    return (
      <View style={styles.container}>
  
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>
            ←
          </Text>
        </TouchableOpacity>
  
        <Text style={styles.title}>
          The world's Best Bike
        </Text>
  
        <View style={styles.filters}>
  
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() =>
              setCategory('All')
            }
          >
            <Text style={styles.filterText}>
              All
            </Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() =>
              setCategory('Roadbike')
            }
          >
            <Text style={styles.filterText}>
              Roadbike
            </Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() =>
              setCategory('Mountain')
            }
          >
            <Text style={styles.filterText}>
              Mountain
            </Text>
          </TouchableOpacity>
  
        </View>
  
        <FlatList
          data={filteredBikes}
          numColumns={2}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={
            styles.column
          }
  
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
  
              onPress={() =>
                navigation.navigate(
                  'Screen03',
                  {
                    bike: item,
                  }
                )
              }
            >
              <Text style={styles.heart}>
                ♡
              </Text>
  
              <Image
                source={item.image}
                style={styles.image}
                resizeMode="contain"
              />
  
              <Text style={styles.name}>
                {item.name}
              </Text>
  
              <Text style={styles.price}>
                $ {item.price}
              </Text>
            </TouchableOpacity>
          )}
        />
  
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      paddingHorizontal: 18,
      paddingTop: 40,
    },
  
    backButton: {
      width: 42,
      height: 42,
      borderRadius: 21,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
      marginBottom: 10,
    },
  
    backText: {
      fontSize: 28,
      fontWeight: 'bold',
    },
  
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#F44343',
      marginBottom: 20,
    },
  
    filters: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
  
    filterButton: {
      width: '30%',
      borderWidth: 1,
      borderColor: '#F6AAAA',
      paddingVertical: 8,
      borderRadius: 5,
    },
  
    filterText: {
      textAlign: 'center',
      color: '#F28B8B',
    },
  
    column: {
      justifyContent: 'space-between',
    },
  
    card: {
      width: '48%',
      backgroundColor: '#FFF3ED',
      borderRadius: 10,
      marginBottom: 15,
      padding: 10,
    },
  
    heart: {
      position: 'absolute',
      left: 8,
      top: 5,
      fontSize: 22,
      zIndex: 10,
    },
  
    image: {
      width: '100%',
      height: 130,
    },
  
    name: {
      textAlign: 'center',
      color: '#555',
      marginTop: 5,
    },
  
    price: {
      textAlign: 'center',
      color: '#D28745',
      fontWeight: '600',
    },
  });