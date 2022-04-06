export default {
	name: "workExperiences",
	title: "Work Experiences",
	type: "document",
	fields: [
		{ name: "name", title: "Name", type: "string" },
		{
			name: "company",
			title: "Company",
			type: "string",
		},
		{
			name: "desc",
			title: "Description",
			type: "string",
		},
		{
			name: "responsibilities",
			title: "Responsibilities",
			type: "array",
			of: [{ type: "block" }],
		},
	],
};
