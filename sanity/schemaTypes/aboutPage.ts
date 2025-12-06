import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "Hakkımızda Sayfası / About Page",
  type: "document",
  fields: [
    defineField({
      name: "titleTr",
      title: "Page Title (Turkish)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "titleEn",
      title: "Page Title (English)",
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
      name: "storyTitleTr",
      title: "Story Section Title (Turkish)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "storyTitleEn",
      title: "Story Section Title (English)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "storyTextTr",
      title: "Story Text (Turkish)",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "storyTextEn",
      title: "Story Text (English)",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "missionTitleTr",
      title: "Mission Title (Turkish)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "missionTitleEn",
      title: "Mission Title (English)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "missionTextTr",
      title: "Mission Text (Turkish)",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "missionTextEn",
      title: "Mission Text (English)",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "valuesTitleTr",
      title: "Values Section Title (Turkish)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "valuesTitleEn",
      title: "Values Section Title (English)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "values",
      title: "Company Values",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "titleTr",
              title: "Value Title (Turkish)",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "titleEn",
              title: "Value Title (English)",
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
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  { title: "🎯 Target/Quality", value: "target" },
                  { title: "🤝 Handshake/Trust", value: "handshake" },
                  { title: "🚀 Rocket/Innovation", value: "rocket" },
                  { title: "💚 Heart/Care", value: "heart" },
                  { title: "🏆 Trophy/Excellence", value: "trophy" },
                ],
              },
            }),
          ],
          preview: {
            select: {
              title: "titleTr",
              subtitle: "titleEn",
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "titleTr",
      subtitle: "titleEn",
    },
  },
});
