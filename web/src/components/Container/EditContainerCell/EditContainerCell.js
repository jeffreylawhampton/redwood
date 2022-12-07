import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ContainerForm from 'src/components/Container/ContainerForm'

export const QUERY = gql`
  query EditContainerById($id: Int!) {
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
const UPDATE_CONTAINER_MUTATION = gql`
  mutation UpdateContainerMutation($id: Int!, $input: UpdateContainerInput!) {
    updateContainer(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ container }) => {
  const [updateContainer, { loading, error }] = useMutation(
    UPDATE_CONTAINER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Container updated')
        navigate(routes.containers())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateContainer({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Container {container?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ContainerForm
          container={container}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
