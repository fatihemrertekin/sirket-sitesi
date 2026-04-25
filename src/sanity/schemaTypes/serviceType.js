export const serviceType = {
  name: 'service',
  title: 'Hizmetler',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Başlık',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL Adresi (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Kısa Açıklama',
      type: 'text',
      rows: 3,
    },
    {
      name: 'longDescription',
      title: 'Uzun Açıklama',
      type: 'text',
      rows: 5,
    },
    {
      name: 'icon',
      title: 'İkon (Emoji vb.)',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'Kapak Görseli',
      type: 'image',
      options: { hotspot: true },
    },
  ],
}
