import { defineType, defineField } from "sanity";

export default defineType({
  name: "heroSection",
  title: "Ana Sayfa Hero / Home Hero",
  type: "document",
  fields: [
    defineField({
      name: "titleTr",
      title: "Title (Turkish)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "titleEn",
      title: "Title (English)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitleTr",
      title: "Subtitle (Turkish)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitleEn",
      title: "Subtitle (English)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "buttonTextTr",
      title: "Button Text (Turkish)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "buttonTextEn",
      title: "Button Text (English)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "string",
      description: "e.g., /prices",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "titleTr",
      subtitle: "titleEn",
      media: "backgroundImage",
    },
  },
});
