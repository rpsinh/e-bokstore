import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "../context/auth";
import { RoutePaths } from "../utils/enum";

import Login from "../Pages/Login/index";
import Register from "../Pages/register/index";
import User from "../Pages/user/index";
import EditUser from "../Pages/user/editUser/index";
import Category from "../Pages/category/index";
import EditCategory from "../Pages/category/editCategory/index";
import Book from "../Pages/book/index";
import EditBook from "../Pages/book/editBook/index";
import BookList from "../Pages/book-listing/index";
import Cart from "../Pages/cart";
import UpdateProfile from "../Pages/update-profile/index";

const AppRoutes = () => {
  const authContext = useAuthContext();

  const Redirect = <Navigate to={RoutePaths.Login} />;

  return (
    <Routes>
      <Route exact path={RoutePaths.Login} element={<Login />} />
      <Route
        exact
        path={RoutePaths.Register}
        element={!authContext.user.id ? <Register /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.BookListing}
        element={authContext.user.id ? <BookList /> : Redirect}
      />

      <Route
        exact
        path={RoutePaths.User}
        element={authContext.user.id ? <User /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.EditUser}
        element={authContext.user.id ? <EditUser /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.Category}
        element={authContext.user.id ? <Category /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.EditCategory}
        element={authContext.user.id ? <EditCategory /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.AddCategory}
        element={authContext.user.id ? <EditCategory /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.Book}
        element={authContext.user.id ? <Book /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.EditBook}
        element={authContext.user.id ? <EditBook /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.AddBook}
        element={authContext.user.id ? <EditBook /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.Cart}
        element={authContext.user.id ? <Cart /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.UpdateProfile}
        element={authContext.user.id ? <UpdateProfile /> : Redirect}
      />
    </Routes>
  );
};

export default AppRoutes;
