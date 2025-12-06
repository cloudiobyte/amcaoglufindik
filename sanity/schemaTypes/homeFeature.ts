import { defineType, defineField } from "sanity";

export default defineType({
  name: "homeFeature",
  title: "Ana Sayfa Özellik / Home Feature",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      validation: (rule) => rule.required().integer().min(1),
      description: "Order in which features appear (1, 2, 3...)",
    }),
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
      title: "Icon Name",
      type: "string",
      options: {
        list: [
          { title: "💰 Money/Price", value: "money" },
          { title: "🚜 Equipment/Machine", value: "equipment" },
          { title: "✅ Check/Quality", value: "check" },
          { title: "📞 Contact/Phone", value: "phone" },
          { title: "🌟 Star/Premium", value: "star" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      titleTr: "titleTr",
      order: "order",
    },
    prepare(selection) {
      const { titleTr, order } = selection;
      return {
        title: `${order}. ${titleTr}`,
      };
    },
  },
});
