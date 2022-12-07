import Container from 'src/components/Container/Container'

export const QUERY = gql`
  query FindContainerById($id: Int!) {
    container: container(id: $id) {
      id
      createdAt
      updatedAt
      name
      userId
      roomId
      parentContainerId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Container not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ container }) => {
  return <Container container={container} />
}
