import {
  categoriesOnItems,
  categoriesOnItem,
  createCategoriesOnItem,
  updateCategoriesOnItem,
  deleteCategoriesOnItem,
} from './categoriesOnItems'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('categoriesOnItems', () => {
  scenario('returns all categoriesOnItems', async (scenario) => {
    const result = await categoriesOnItems()

    expect(result.length).toEqual(Object.keys(scenario.categoriesOnItem).length)
  })

  scenario('returns a single categoriesOnItem', async (scenario) => {
    const result = await categoriesOnItem({
      id: scenario.categoriesOnItem.one.id,
    })

    expect(result).toEqual(scenario.categoriesOnItem.one)
  })

  scenario('creates a categoriesOnItem', async (scenario) => {
    const result = await createCategoriesOnItem({
      input: {
        categoryId: scenario.categoriesOnItem.two.categoryId,
        itemId: scenario.categoriesOnItem.two.itemId,
      },
    })

    expect(result.categoryId).toEqual(scenario.categoriesOnItem.two.categoryId)
    expect(result.itemId).toEqual(scenario.categoriesOnItem.two.itemId)
  })

  scenario('updates a categoriesOnItem', async (scenario) => {
    const original = await categoriesOnItem({
      id: scenario.categoriesOnItem.one.id,
    })
    const result = await updateCategoriesOnItem({
      id: original.id,
      input: { categoryId: scenario.categoriesOnItem.two.categoryId },
    })

    expect(result.categoryId).toEqual(scenario.categoriesOnItem.two.categoryId)
  })

  scenario('deletes a categoriesOnItem', async (scenario) => {
    const original = await deleteCategoriesOnItem({
      id: scenario.categoriesOnItem.one.id,
    })
    const result = await categoriesOnItem({ id: original.id })

    expect(result).toEqual(null)
  })
})
