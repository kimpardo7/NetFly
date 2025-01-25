import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './components/Root';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Articles from './components/Articles';
import Article from './components/Article';
import Author from './components/Author';
import Categories from './components/Categories';
import Category from './components/Category';
import Profile from './components/Profile';
import './App.css';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root/>}>
    <Route index element={<Home/>} />
    <Route path="about" element={<About/>} />
    <Route path="contact" element={<Contact/>} />
    <Route path="sign-up" element={<SignUp/>} />  
    <Route path="login" element={<Login/>} />
    <Route path="articles" element={<Articles/>} />
    <Route path="article/:title" element={<Article/>} />
    <Route path="authors/:name" element={<Author/>} />
    <Route path="article/:id" element={<Article/>} />
    <Route path="categories" element={<Categories/>} />
    <Route path="category/:id" element={<Category/>} /> 
    <Route path="profile" element={<Profile/>} />
    <Route path="profile/:id" element={<Profile/>} /> 
  </Route>
));

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}