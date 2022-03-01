module.exports = {
  description: "Component Generator",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "component name",
    },
    {
      type: "input",
      name: "folder",
      message: "folder in components",
    },
    {
      type: "list",
      name: "variants",
      message: "generate variants?",
      choices: ["No", "Brand", "State", "Both"],
    },
  ],
  actions: (data) => {
    const actions = [
      {
        type: "add",
        path: "src/components/{{folder}}/{{properCase name}}/index.ts",
        templateFile: "generators/component/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{folder}}/{{properCase name}}/{{properCase name}}.stories.tsx",
        templateFile: "generators/component/Component.stories.tsx.hbs",
      },
    ];

    if (data.variants === "Brand") {
      actions.push({
        type: "add",
        path: "src/components/{{folder}}/{{properCase name}}/{{properCase name}}.tsx",
        templateFile: "generators/component/ComponentWithBrandVariant.tsx.hbs",
      });
    } else if (data.variants === "State") {
      actions.push({
        type: "add",
        path: "src/components/{{folder}}/{{properCase name}}/{{properCase name}}.tsx",
        templateFile: "generators/component/ComponentWithStateVariant.tsx.hbs",
      });
    } else if (data.variants === "Both") {
      actions.push({
        type: "add",
        path: "src/components/{{folder}}/{{properCase name}}/{{properCase name}}.tsx",
        templateFile:
          "generators/component/ComponentWithBrandAndStateVariant.tsx.hbs",
      });
    } else {
      actions.push({
        type: "add",
        path: "src/components/{{folder}}/{{properCase name}}/{{properCase name}}.tsx",
        templateFile: "generators/component/Component.tsx.hbs",
      });
    }

    return actions;
  },
};
