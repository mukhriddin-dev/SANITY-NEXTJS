import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'posts',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})