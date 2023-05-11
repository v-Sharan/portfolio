export default {
  name: 'certificate',
  title: 'Certificate',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'certificateLink',
      title: 'Certificate Link',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'ImageUrl',
      type: 'image',
    },
    {
      name: 'pdfUrl',
      title: 'PdfUrl',
      type: 'file',
    },
  ],
}
