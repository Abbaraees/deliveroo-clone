import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'

const CategoryCard = ({imageUrl, title}) => {
  return (
    <TouchableOpacity className="mx-2 relative">
        <Image
            source={{uri: urlFor(imageUrl).url()}}
            className="w-28 h-28 rounded-corner"
        />
        <Text className="text-white absolute bottom-1 left-1">{title}</Text>
    </TouchableOpacity>

  )
}

export default CategoryCard