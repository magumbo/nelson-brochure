export function blog_postFields() {
  return [
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "object",
      name: "author_info",
      label: "author_info",
      fields: [
        {
          type: "string",
          name: "name",
          label: "name",
        },
        {
          type: "image",
          name: "image",
          label: "image",
        },
      ],
    },
  ];
}
