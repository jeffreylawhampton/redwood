import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_ITEM_MUTATION = gql`
  mutation DeleteItemMutation($id: Int!) {
    deleteItem(id: $id) {
      id
    }
  }
`

const Item = ({ item }) => {
  const [deleteItem] = useMutation(DELETE_ITEM_MUTATION, {
    onCompleted: () => {
      toast.success('Item deleted')
      navigate(routes.items())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete item ' + id + '?')) {
      deleteItem({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Item {item.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{item.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(item.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(item.updatedAt)}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{item.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{item.description}</td>
            </tr>
            <tr>
              <th>Value</th>
              <td>{item.value}</td>
            </tr>
            <tr>
              <th>Serial number</th>
              <td>{item.serialNumber}</td>
            </tr>
            <tr>
              <th>Quantity</th>
              <td>{item.quantity}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{item.userId}</td>
            </tr>
            <tr>
              <th>Room id</th>
              <td>{item.roomId}</td>
            </tr>
            <tr>
              <th>Container id</th>
              <td>{item.containerId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editItem({ id: item.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(item.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Item
