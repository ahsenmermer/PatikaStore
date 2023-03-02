import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

import products_data from './products.json'
import Product from './components/Product'


export default function App() {
  const renderItem = ({ item }) => <Product product={item} />

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PATİKA STORE</Text>
      <TextInput
        placeholder='Ara...'
        placeholderTextColor={'#999897'}
        style={styles.searchContainer} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={products_data}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10
  },
  searchContainer: {
    width: '97%',
    backgroundColor: '#e6e6e6',
    padding: 15,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 5
  },
  title: {
    color: 'purple',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    alignSelf: 'flex-start'
  }
})