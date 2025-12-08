import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'secondHandEquipment',
  title: 'İkinci El Makineler / Second Hand Equipment',
  type: 'document',
  fields: [
    defineField({
      name: 'productImage',
      title: 'Ürün Görseli / Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'productName',
      title: 'Ürün Adı / Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'productDescription',
      title: 'Ürün Açıklaması / Product Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'productName',
      media: 'productImage',
      description: 'productDescription',
    },
    prepare(selection) {
      const { title, media, description } = selection
      return {
        title: title,
        subtitle: description ? description.substring(0, 50) + '...' : '',
        media: media,
      }
    },
  },
})
