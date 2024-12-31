import { Pressable, PressableProps, Text } from 'react-native'
import React from 'react'


interface Props extends PressableProps {
  children: string
  type?: 'black' | 'orange' | 'lightOrange',
  buttonClassName?: string,
  textClassName?: string
}

export const CustomButton = ({children, type='black', onPress, onLongPress, buttonClassName, textClassName } : Props) => {

  const bgColor = {
    black: 'bg-primaryGray',
    orange: 'bg-primary-default',
    lightOrange: 'bg-primary-light'
  }[type]


  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} className={`rounded-2xl h-16 p-2 active:opacity-80 justify-center ${buttonClassName} ${bgColor} `} >
      <Text className={`${textClassName} ${type === 'lightOrange' ? 'text-primary-default' : 'text-white'} text-center font-adelle-semibold text-lg`} >{children}</Text>
    </Pressable>
  )
}
