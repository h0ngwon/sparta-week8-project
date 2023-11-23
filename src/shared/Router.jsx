import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import PostEditDetail from '../pages/PostEditPage';
import RegisterPage from '../pages/RegisterPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import DetailPage from '../pages/DetailPage';
import MyPage from '../pages/MyPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/editDetail' element={<PostEditDetail />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/detailpage/:id' element={<DetailPage />} />
                </Route>
                <Route path='/login' element={<LoginPage />} />
                <Route path='mypage' element={<MyPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
