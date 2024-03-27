import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import sanityClient from '../sanity'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    sanityClient.fetch(`
      *[_type == "category"]
    `).then(data => {
      setCategories(data)
    })
  }, [])
  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
             paddingToo: 10
        }}
        horizontal
        showHorizonralScrollIndicator={false}
    >
      {categories?.map(cat => <CategoryCard imageUrl={cat.image} title={cat.name} key={cat._id}/>)}
        
    </ScrollView>

  )
}

export default Categories