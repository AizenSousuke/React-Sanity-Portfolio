export default {
	name: "works",
	title: "Works",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "description",
			title: "Description",
			type: "array",
			of: [{ type: "block" }],
		},
		{
			name: "imgUrl",
			title: "ImgUrl",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "projectLink",
			title: "Project Link",
			type: "string",
		},
		{
			name: "codeLink",
			title: "Code Link",
			type: "string",
		},
		{
			name: "tags",
			title: "Tags",
			type: "array",
			of: [
				{
					name: "tag",
					title: "Tag",
					type: "string",
				},
			],
		},
	],
};
