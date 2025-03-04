import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useGroups } from '@/api/groups'

const AllGroups = () => {

    const {data} = useGroups()

  return (
    <FlatList 
        data={data}
        renderItem={({item}) => <View></View>}
    />
  )
}


export default AllGroups
