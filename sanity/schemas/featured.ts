import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'featured',
    type: 'document',
    title: 'Featured Menu Categories',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Featured Category name',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'short_description',
            title: 'Short description',
            type: 'string',
            validation: (Rule) => Rule.max(200)
        }),
        defineField({
            name: 'resturants',
            type: 'array',
            title: 'Resturants',
            of: [{type: 'reference', to: [{
                type: 'resturant',
            }]}]
        })
    ]
})