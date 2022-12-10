// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Images" titleTo="images" buttonLabel="New Image" buttonTo="newImage">
        <Route path="/images/new" page={ImageNewImagePage} name="newImage" />
        <Route path="/images/{id:Int}/edit" page={ImageEditImagePage} name="editImage" />
        <Route path="/images/{id:Int}" page={ImageImagePage} name="image" />
        <Route path="/images" page={ImageImagesPage} name="images" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Items" titleTo="items" buttonLabel="New Item" buttonTo="newItem">
        <Route path="/items/new" page={ItemNewItemPage} name="newItem" />
        <Route path="/items/{id:Int}/edit" page={ItemEditItemPage} name="editItem" />
        <Route path="/items/{id:Int}" page={ItemItemPage} name="item" />
        <Route path="/items" page={ItemItemsPage} name="items" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Containers" titleTo="containers" buttonLabel="New Container" buttonTo="newContainer">
        <Route path="/containers/new" page={ContainerNewContainerPage} name="newContainer" />
        <Route path="/containers/{id:Int}/edit" page={ContainerEditContainerPage} name="editContainer" />
        <Route path="/containers/{id:Int}" page={ContainerContainerPage} name="container" />
        <Route path="/containers" page={ContainerContainersPage} name="containers" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Categories" titleTo="categories" buttonLabel="New Category" buttonTo="newCategory">
        <Route path="/categories/new" page={CategoryNewCategoryPage} name="newCategory" />
        <Route path="/categories/{id:Int}/edit" page={CategoryEditCategoryPage} name="editCategory" />
        <Route path="/categories/{id:Int}" page={CategoryCategoryPage} name="category" />
        <Route path="/categories" page={CategoryCategoriesPage} name="categories" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Rooms" titleTo="rooms" buttonLabel="New Room" buttonTo="newRoom">
        <Route path="/rooms/new" page={RoomNewRoomPage} name="newRoom" />
        <Route path="/rooms/{id:Int}/edit" page={RoomEditRoomPage} name="editRoom" />
        <Route path="/rooms/{id:Int}" page={RoomRoomPage} name="room" />
        <Route path="/rooms" page={RoomRoomsPage} name="rooms" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Set wrap={ScaffoldLayout} titleTo="items" buttonLabel="New Item" buttonTo="newItem">
        <Route path="/" page={ItemItemsPage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
