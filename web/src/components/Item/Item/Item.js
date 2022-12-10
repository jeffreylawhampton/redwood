// import { useEffect } from 'react'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import './styles.css'
import Carousel from 'src/components/ImageCarousel'

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
    <div className="page-wrapper">
      {item.images.length ? (
        <div style={{ position: 'relative' }}>
          <Carousel images={item.images} />
        </div>
      ) : null}
      <div>
        <div className="rw-segment">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>{item.value}</p>
          <p>{item.serialNumber}</p>
          <p>{item.quantity}</p>
          <p> {item.room && item.room.name}</p>
          <p>{item.container && item.container.name}</p>
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
        </div>
      </div>
    </div>
  )
}

export default Item
