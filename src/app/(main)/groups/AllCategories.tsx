import { useGetGroupsCategories } from '@/api/group-categories'
import { View, Text, FlatList } from 'react-native'

const AllCategories = () => {

    const {data} = useGetGroupsCategories()

  return (
     <FlatList 
         data={data}
         renderItem={({item}) => <View><Text>{item.name}</Text></View>}
     />
  )
}

export default AllCategories