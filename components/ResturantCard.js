import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import {HomeIcon} from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'

const ResturantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
}) => {
  return (
    <TouchableOpacity className="ml-2 bg-white">
      <Image
        source={{uri: urlFor(imgUrl).url()}}
        className="w-100 h-36 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="text-lg font-bold p-2">{title}</Text>
        <View className="flex-row items-center gap-x-1">
            <StarIcon color="green" opacity={0.5} size={22}/>
            <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating} - </Text>{genre}
            </Text>
        </View>
        <View className="flex-row items-center gap-x-1">
            <HomeIcon size={22} color={"green"} opacity={0.4} />
            <Text className="text-gray-500 text-xs">
                Nearby - {address}
            </Text> 
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ResturantCard