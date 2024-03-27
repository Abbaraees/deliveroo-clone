import { View, Text, ScrollView } from 'react-native'
import {useEffect, useState} from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ResturantCard from './ResturantCard'
import sanityClient from '../sanity'

const FeaturedRow = ({id, title, description}) => {
  const [resturants, setResturants] = useState([])
  useEffect(() => {
    sanityClient.fetch(`
    *[_type == 'featured' && _id == $id] {
      ...,
      resturants[]->{
        ...,
        dishes[]->{
          ...
        }
      }
    }[0]
    `, {id}).then(data => {
      setResturants(data)
    }).catch(errr => {
      console.log(errr)
    })

  }, [])
  
  return (
    <View>
        <View className="flex-row mt-4 items-center justify-between px-4">
            <Text className="text-lg font-bold">{title}</Text>
            <ArrowRightIcon color={"#00CCBB"} />
        </View>
        <Text className="text-xs text-gray-500 px-4">{description}</Text>

        <ScrollView 
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
        >
          {resturants.resturants?.map(resturant => 

            <ResturantCard 
                key={resturant._id}
                id={resturant._id}
                title={resturant.name}
                imgUrl={resturant.image}
                genre={resturant.type?.name}
                rating={resturant.rating}
                address={resturant.address}
                short_description={resturant.short_description}
                lat={resturant.lat}
                long={resturant.log}
                dishes={resturant.dishes}
            />
          )}
        
            
        </ScrollView>
    </View>
  )
}

export default FeaturedRow