export const standard = defineScenario({
  categoriesOnItem: {
    one: {
      data: {
        category: {
          create: {
            name: 'String2700804',
            user: { create: { email: 'String9143925', name: 'String' } },
          },
        },
        item: {
          create: {
            name: 'String',
            user: { create: { email: 'String2774992', name: 'String' } },
          },
        },
      },
    },
    two: {
      data: {
        category: {
          create: {
            name: 'String3518328',
            user: { create: { email: 'String2984018', name: 'String' } },
          },
        },
        item: {
          create: {
            name: 'String',
            user: { create: { email: 'String7796897', name: 'String' } },
          },
        },
      },
    },
  },
})
