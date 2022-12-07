import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_IMAGE_MUTATION = gql`
  mutation DeleteImageMutation($id: Int!) {
    deleteImage(id: $id) {
      id
    }
  }
`

const Image = ({ image }) => {
  const [deleteImage] = useMutation(DELETE_IMAGE_MUTATION, {
    onCompleted: () => {
      toast.success('Image deleted')
      navigate(routes.images())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete image ' + id + '?')) {
      deleteImage({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Image {image.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{image.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(image.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(image.updatedAt)}</td>
            </tr>
            <tr>
              <th>Caption</th>
              <td>{image.caption}</td>
            </tr>
            <tr>
              <th>Url</th>
              <td>{image.url}</td>
            </tr>
            <tr>
              <th>Item id</th>
              <td>{image.itemId}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{image.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editImage({ id: image.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(image.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Image
