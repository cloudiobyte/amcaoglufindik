import { defineType, defineField } from "sanity";

export default defineType({
  name: "contactInfo",
  title: "İletişim / Contact",
  type: "document",
  fields: [
    defineField({
      name: "location",
      title: "Location Name",
      type: "string",
      description: "e.g., Head Office, Factory, etc.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: "addressTr",
      title: "Address (Turkish)",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "addressEn",
      title: "Address (English)",
      type: "text",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "location",
      subtitle: "phone",
    },
  },
});
