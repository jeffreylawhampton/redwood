import {
  containers,
  container,
  createContainer,
  updateContainer,
  deleteContainer,
} from './containers'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('containers', () => {
  scenario('returns all containers', async (scenario) => {
    const result = await containers()

    expect(result.length).toEqual(Object.keys(scenario.container).length)
  })

  scenario('returns a single container', async (scenario) => {
    const result = await container({ id: scenario.container.one.id })

    expect(result).toEqual(scenario.container.one)
  })

  scenario('creates a container', async (scenario) => {
    const result = await createContainer({
      input: { name: 'String6933692', userId: scenario.container.two.userId },
    })

    expect(result.name).toEqual('String6933692')
    expect(result.userId).toEqual(scenario.container.two.userId)
  })

  scenario('updates a container', async (scenario) => {
    const original = await container({
      id: scenario.container.one.id,
    })
    const result = await updateContainer({
      id: original.id,
      input: { name: 'String44368432' },
    })

    expect(result.name).toEqual('String44368432')
  })

  scenario('deletes a container', async (scenario) => {
    const original = await deleteContainer({
      id: scenario.container.one.id,
    })
    const result = await container({ id: original.id })

    expect(result).toEqual(null)
  })
})
