import { useNavigation } from '@react-navigation/native'
import {View, Text, StatusBar, Image, TextInput, ScrollView} from 'react-native'
import {useLayoutEffect, useEffect, useState} from 'react';
import {UserIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon, ChevronDoubleDownIcon} from 'react-native-heroicons/outline'
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';



export default function HomeScreen() {
    const [featuredCategories, setFeaturedCategoties] = useState([])
    const navigation = useNavigation()

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false
      })
    }, [])

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == 'featured'] {
            name,
            _id,
            short_description,
            resturants[] -> {
              name,
              image,
              short_description
            }
        }
        `).then(data => {
            setFeaturedCategoties(data)
        })
    })

    
    return (
        <ScrollView style={{marginTop: StatusBar.currentHeight}} className="" >
            {/* Header */}
            <View className="flex-row  pb-3 items-center mx-4 space-x-2">
                <Image 
                    source={{uri: 'https://links.papareact.com/wru'}} 
                    className="w-7 h-7 bg-gray-300 p-4 rounded-full"
                    // style={{width: "25%"}}
                />
                <View className="flex-row  mx-4 items-center justify-between" style={{width: "90%"}}>
                    <View>
                        <Text className="font-bold text-gray-400 text-xs">
                            Deliver Now!
                        </Text>
                        <Text className="font-bold text-xl items-center">
                            Current Location
                            <ChevronDoubleDownIcon size={15} color="#00CCBB" />
                        </Text>
                    </View>
                    <UserIcon size={35} color={"#00CCBB"} />
                </View>
            </View>

            {/* Search */}
            <View className="flex-row items-center space-x-2 pb-2 px-4">
                <View className="flex-row  w-full bg-gray-200 p-2 items-center" style={{width: "90%"}}>
                    <MagnifyingGlassIcon size={20} color={"gray"} />
                    <TextInput 
                        placeholder="resturant and ...."
                    />
                </View>
                <AdjustmentsHorizontalIcon size={25} color={"#00CCBB"} />
            </View>

            {/* Categories */}
            <Categories />

            {/* Featured Rows */}
            {featuredCategories?.map(category =>   
                <FeaturedRow
                    key={category._id}
                    id={category._id}
                    title={category.name}
                    description={category.short_description}
                />
            )}

        </ScrollView>
    )
}