export const standard = defineScenario({
  image: {
    one: {
      data: {
        url: 'String',
        item: {
          create: {
            name: 'String',
            user: { create: { email: 'String8104933', name: 'String' } },
          },
        },
        user: { create: { email: 'String109629', name: 'String' } },
      },
    },
    two: {
      data: {
        url: 'String',
        item: {
          create: {
            name: 'String',
            user: { create: { email: 'String8990240', name: 'String' } },
          },
        },
        user: { create: { email: 'String8576247', name: 'String' } },
      },
    },
  },
})
