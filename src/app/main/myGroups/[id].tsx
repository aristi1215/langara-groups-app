import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function ChatGroup() {
  const {id} = useLocalSearchParams()

  return (
    <View>
      <Text>Watching a group by name</Text>
    </View>
  )
}