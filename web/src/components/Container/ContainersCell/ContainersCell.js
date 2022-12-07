import { Link, routes } from '@redwoodjs/router'

import Containers from 'src/components/Container/Containers'

export const QUERY = gql`
  query FindContainers {
    containers {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No containers yet. '}
      <Link to={routes.newContainer()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ containers }) => {
  return <Containers containers={containers} />
}
