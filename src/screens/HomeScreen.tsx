import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigation } from '../Navigation'

const HomeScreen = () => {
  const { navigate } = useNavigation<StackNavigation>()
  return (
    <View>
      <Text>Home Screen</Text>
      <Button color={`#32cd32`} title="Visit About Page" onPress={() => navigate('about')} />
    </View>
  )
}

export default HomeScreen