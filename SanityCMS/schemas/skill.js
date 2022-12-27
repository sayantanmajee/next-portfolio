export default {
    name: "skill",
    title: "Skill",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            description: "Title of Skill",
            type: "string",
        },
        {
            name: "progress",
            title: "Progress",
            description: "Progress of skill from 0 to 100%",
            type: "number",
            validation: (rule) => rule.min(0).max(100),
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            }
        },
    ],
}