import { defineType, defineField } from "sanity";

export default defineType({
  name: "presentPrice",
  title: "Anlık Fiyat / Present Price",
  type: "document",
  fields: [
    defineField({
      name: "productDescription",
      title: "Ürün Açıklaması / Product Description",
      type: "string",
      description: "Örnek: %50 Randıman Kabuklu Fındık Fiyatı",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "brutPrice",
      title: "Brüt Fiyatı / Gross Price",
      type: "number",
      description: "TL/KG cinsinden brüt fiyat",
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: "netPrice",
      title: "Net Fiyatı / Net Price",
      type: "number",
      description: "TL/KG cinsinden net fiyat",
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: "updatedAt",
      title: "Güncellenme Tarihi / Updated At",
      type: "datetime",
      description: "Otomatik olarak güncellenir / Automatically updated",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "isActive",
      title: "Aktif / Active",
      type: "boolean",
      description: "Bu fiyatı ana sayfada göster / Show this price on homepage",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "productDescription",
      brutPrice: "brutPrice",
      netPrice: "netPrice",
      isActive: "isActive",
    },
    prepare(selection) {
      const { title, brutPrice, netPrice, isActive } = selection;
      return {
        title: title,
        subtitle: `Brüt: ${brutPrice} TL/KG - Net: ${netPrice} TL/KG ${isActive ? '✓ Aktif' : '✗ Pasif'}`,
      };
    },
  },
});
