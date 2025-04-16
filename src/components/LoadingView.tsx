import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

export const LoadingView = () => {
  return (
    <View className='flex-1 items-center justify-center w-full h-full'>
      <ActivityIndicator/>
    </View>
  )
}
