import { Link, routes } from '@redwoodjs/router'

import ItemTile from 'src/components/ItemTile'

const ItemsList = ({ items }) => {
  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      {items.map((item) => (
        <div key={item.id}>
          <Link
            key={item.id}
            to={routes.item({ id: item.id })}
            title={'Show item ' + item.id + ' detail'}
          >
            <ItemTile item={item} />
          </Link>

          <nav className="rw-table-actions">
            <Link
              to={routes.item({ id: item.id })}
              title={'Show item ' + item.id + ' detail'}
              className="rw-button rw-button-small"
            >
              Show
            </Link>
          </nav>
        </div>
      ))}
    </div>
  )
}

export default ItemsList
