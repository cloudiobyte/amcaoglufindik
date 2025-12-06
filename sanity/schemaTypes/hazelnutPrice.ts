import { defineType, defineField } from "sanity";

export default defineType({
  name: "hazelnutPrice",
  title: "Fındık Fiyatları / Hazelnut Prices",
  type: "document",
  fields: [
    defineField({
      name: "typeTr",
      title: "Type (Turkish)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "typeEn",
      title: "Type (English)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gradeTr",
      title: "Grade (Turkish)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gradeEn",
      title: "Grade (English)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "pricePerKg",
      title: "Price per Kg",
      type: "number",
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: "currency",
      title: "Currency",
      type: "string",
      options: {
        list: [
          { title: "Turkish Lira (TL)", value: "TL" },
          { title: "US Dollar ($)", value: "USD" },
          { title: "Euro (€)", value: "EUR" },
        ],
      },
      initialValue: "TL",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "noteTr",
      title: "Note (Turkish)",
      type: "text",
    }),
    defineField({
      name: "noteEn",
      title: "Note (English)",
      type: "text",
    }),
    defineField({
      name: "updatedAt",
      title: "Updated At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      typeTr: "typeTr",
      gradeTr: "gradeTr",
      price: "pricePerKg",
      currency: "currency",
    },
    prepare(selection) {
      const { typeTr, gradeTr, price, currency } = selection;
      return {
        title: `${typeTr} - ${gradeTr}`,
        subtitle: `${price} ${currency}/kg`,
      };
    },
  },
});
