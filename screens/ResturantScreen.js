import { View, Text, ScrollView, Image, StatusBar, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity'
import { ArrowLeftIcon, StarIcon, HomeIcon, QuestionMarkCircleIcon, ChevronRightIcon } from 'react-native-heroicons/solid'
import DishRow from '../components/DishRow'
import BasketIcon from '../components/BasketIcon'

const ResturantScreen = () => {

  const navigation = useNavigation()
  const {params: {
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
  }} = useRoute()

  console.log(dishes)


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <>
    <BasketIcon />
    <ScrollView style={{marginTop: StatusBar.currentHeight}}>
      <View className="relative">
        <Image
          source={{uri: urlFor(imgUrl).url()}}
          className="w-full h-56 bg-gray-500 p-4"
        />
        <TouchableOpacity 
          onPress={navigation.goBack}
          className="absolute top-5 left-5 p-2 bg-gray-100 rounded-full"
        >
          <ArrowLeftIcon size={20} color={"#00CCBB"} />
        </TouchableOpacity>
      </View>

      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row space-x-2 my-2">
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
          <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
        </View>

        <TouchableOpacity className="flex-row items-center space-x-2 border-y p-4 border-gray-300">
          <QuestionMarkCircleIcon color="gray" size={22} opacity={0.6} />
          <Text className="pl-2 flex-1 text-md font-bold">
            Have a food allergy?
          </Text>
          <ChevronRightIcon color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View className="pb-36">
        <Text className="px-4 py-6 font-bold text-xl">
          Menu
        </Text>

        {dishes?.map(dish => (
          <DishRow
            key={dish._id}
            id={dish._id}
            name={dish.name}
            short_description={dish.short_description}
            price={dish.price}
            image={dish.image}
          />
        ))}
      </View>
    </ScrollView>
    </>
  )
}

export default ResturantScreen