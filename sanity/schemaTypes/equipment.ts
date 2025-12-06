import { defineType, defineField } from "sanity";

export default defineType({
  name: "equipment",
  title: "Makineler / Equipment",
  type: "document",
  fields: [
    defineField({
      name: "nameTr",
      title: "Name (Turkish)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "nameEn",
      title: "Name (English)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "descriptionTr",
      title: "Description (Turkish)",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "descriptionEn",
      title: "Description (English)",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "specsTr",
      title: "Specifications (Turkish)",
      type: "text",
    }),
    defineField({
      name: "specsEn",
      title: "Specifications (English)",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "nameTr",
      subtitle: "nameEn",
      media: "images.0",
    },
  },
});
