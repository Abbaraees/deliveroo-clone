import {defineField, defineType, Rule} from 'sanity'

export default defineType({
  name: 'resturant',
  title: 'Resturant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Resturant Name',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of the resturant',
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200)
    }),
    defineField({
      name: 'lat',
      type: 'number',
      title: 'Latitude of the resturant',
    }),
    defineField({
      name: 'long',
      type: 'number',
      title: 'Longtitude of the resturant',
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Address of the resturant',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Enter a rating from (1-5 stars)',
      validation: (Rule) => 
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a value between 1 and 5")
    }),
    defineField({
      name: 'type',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}]
    }),
    defineField({
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: {type: 'dish'}}]
    }),
  ],

  preview: {
    select: {
      title: 'name',
      author: 'resturant.name',
      media: 'image',
    },
  
  },
})
