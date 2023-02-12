import React from 'react';
import Header from './Header';
import Info from './Info/Info';
import Profile from './Profile';

const Dashboard = () => {
    return (
        <>
            <Header></Header> 
            <Profile></Profile>
            <Info></Info>
            
        </>
    );
};

export default Dashboard;