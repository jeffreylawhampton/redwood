import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Container/ContainersCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_CONTAINER_MUTATION = gql`
  mutation DeleteContainerMutation($id: Int!) {
    deleteContainer(id: $id) {
      id
    }
  }
`

const ContainersList = ({ containers }) => {
  const [deleteContainer] = useMutation(DELETE_CONTAINER_MUTATION, {
    onCompleted: () => {
      toast.success('Container deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete container ' + id + '?')) {
      deleteContainer({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Name</th>
            <th>User id</th>
            <th>Room id</th>
            <th>Parent container id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {containers.map((container) => (
            <tr key={container.id}>
              <td>{truncate(container.id)}</td>
              <td>{timeTag(container.createdAt)}</td>
              <td>{timeTag(container.updatedAt)}</td>
              <td>{truncate(container.name)}</td>
              <td>{truncate(container.userId)}</td>
              <td>{truncate(container.roomId)}</td>
              <td>{truncate(container.parentContainerId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.container({ id: container.id })}
                    title={'Show container ' + container.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editContainer({ id: container.id })}
                    title={'Edit container ' + container.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete container ' + container.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(container.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ContainersList
