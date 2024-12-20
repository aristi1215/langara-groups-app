import { View, Text } from 'react-native'
import React from 'react'
import {CustomButton} from '@/components/CustomButton'

export default function OnboardingIndex() {
  return (
    <View className='justify-center'>
      <CustomButton buttonClassName='mx-10 rounded-[1.2rem]' textClassName='text-md' >
            click
      </CustomButton>
    </View>
  )
}