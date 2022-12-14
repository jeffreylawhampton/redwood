import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ItemForm from 'src/components/Item/ItemForm'

export const QUERY = gql`
  query EditItemById($id: Int!) {
    item: item(id: $id) {
      id
      createdAt
      updatedAt
      name
      description
      value
      serialNumber
      quantity
      userId
      roomId
      containerId
      user {
        name
        rooms {
          name
        }
      }
    }
  }
`
const UPDATE_ITEM_MUTATION = gql`
  mutation UpdateItemMutation($id: Int!, $input: UpdateItemInput!) {
    updateItem(id: $id, input: $input) {
      id
      createdAt
      updatedAt
      name
      description
      value
      serialNumber
      quantity
      userId
      roomId
      containerId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ item }) => {
  const [updateItem, { loading, error }] = useMutation(UPDATE_ITEM_MUTATION, {
    onCompleted: () => {
      toast.success('Item updated')
      navigate(routes.items())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateItem({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Item {item?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ItemForm item={item} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
