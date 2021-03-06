import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationProps } from './navigationProps/navigationProps'
import { RootStackParamList } from '../../../types/types'
import HeaderRightButton from '../../../components/HeaderRightButton'

import Home from '../../../scenes/home/Home'
import Details from '../../../scenes/details/Details'

const Stack = createStackNavigator<RootStackParamList>()

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={navigationProps}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerShown: true,
          headerRight: () => <HeaderRightButton from='Home' />
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: 'Details',
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  )
}