import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import AppItem from './AppItem'
import Database from './Database'

export default function AppList({ route, navigation }) {

  const [items, setItems] = useState([])

  useEffect(() => {
    Database.getItems().then(items => setItems(items));
  },[route])

  // function apagarItem(id) {
  //     items.find((elem) => {
  //       return elem.id !== id

  //     })

  // }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Compras</Text>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.itemContainer}
      >
        {items.map((item) => {
          return (
            <AppItem
              key={item.id}
              // apagar={() => apagarItem(item.id)}
              item={item.quantity + ' de ' + item.description}
            />
          )
        })}

      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AABBCC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FDFDFD',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20,

  },
  scrollContainer: {
    flex: 1,
    width: '100%',
    
  }
})