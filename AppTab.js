import React from 'react'
import AppList from './AppList'
import AppForm from './AppForm'
import { Ionicons } from '@expo/vector-icons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

export default function AppTab() {

  const TabBar = createBottomTabNavigator()

  return (
    <TabBar.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#32264D',
        tabBarInactiveTintColor: '#C1BCCC',
        tabBarActiveBackgroudColor: '#EBEBF5',
        tabBarInactiveBackgroundColor: '#FAFAFC',
        tabBarLabelStyle: {
          fontSize: 13,
        //   position: 'absolute',
        //   top: 15,
        //   bottom: 0,
          // left: 0,
          // right: 0,
        // },
        // tabBarIconStyle: {
        //   display: 'none',
          
        }
      }}
    >
      <TabBar.Screen
        options={{
          title: 'Lista de Compras',
          tabBarLabel: "Compras",
          tabBarIcon:  ({color}) => (<Ionicons name="list-outline" size={30} color={color}/> )
        }}
        name="AppList" component={AppList} />
      <TabBar.Screen
        options={{
          title: 'Formulário',
          tabBarLabel: "Adicionar",
          tabBarIcon:  ({color}) => (<Ionicons name="add-sharp" size={30} color={color}/> )
        }}
        name="AppForm" component={AppForm} />
    </TabBar.Navigator>
  )
}