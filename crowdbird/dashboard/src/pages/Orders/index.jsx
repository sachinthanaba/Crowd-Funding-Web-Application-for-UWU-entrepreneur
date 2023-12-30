import React, {useState, useEffect} from 'react';
import DashboardHeader from '../../components/DashboardHeader';
import ActionButton from '../../components/ActionButton';

import all_orders from '../../constants/orders';
import {calculateRange, sliceData} from '../../utils/table-pagination';

import '../styles.css';
import DoneIcon from '../../assets/icons/done.svg';
import CancelIcon from '../../assets/icons/cancel.svg';
import RefundedIcon from '../../assets/icons/refunded.svg';


import { PostsData1 as getPostApi } from '../../data/PostData';




function Orders () {
    const [search, setSearch] = useState('');
    const [orders, setOrders] = useState(all_orders);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);

    useEffect(() => {
        getPostApi().then(data =>{
            setPosts(data);
          });
        setPagination(calculateRange(posts, 10));
        setOrders(sliceData([posts], page, 10));
        
    }, []);

    // Search
    const __handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== '') {
            let search_results = posts.filter((post) =>
            post.name.toLowerCase().includes(search.toLowerCase()) ||
            post.last_name.toLowerCase().includes(search.toLowerCase()) ||
            post.product.toLowerCase().includes(search.toLowerCase())
            );
            setOrders(search_results);
        }
        else {
            __handleChangePage(1);
        }
    };

    // Change Page 
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        setOrders(sliceData(posts, new_page, 5));
    }
    const postDate = function getRandomDate() {
        const maxDate = Date.now();
        const timestamp = Math.floor(Math.random() * maxDate);
        return new Date(timestamp);
    }
    

    return(
        <div className='dashboard-content'>
            <DashboardHeader
                btnText="New Post" />

            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <h2>Posts List</h2>
                    <div className='dashboard-content-search'>
                        <input
                            type='text'
                            value={search}
                            placeholder='Search..'
                            className='dashboard-content-input'
                            onChange={e => __handleSearch(e)} />
                    </div>
                </div>

                <table>
                    <thead>
                        <th>ID</th>
                        <th>DATE</th>
                        <th>STATUS</th>
                        <th>PUBLISHER</th>
                        <th>POST OVERVIEW</th>
                        <th>STATUS</th>
                    </thead>

                    {posts.length !== 0 ?
                        <tbody>
                            {posts.map((post, index) => (
                                <tr key={index}>
                                    <td><span>{post.id}</span></td>
                                    <td><span>{(new Date(Date.now())).getFullYear()+"/"+(new Date(Date.now())).getMonth()+"/"+(new Date(Date.now())).getDate()}</span></td>
                                    
                                    <td>
                                        <div>
                                            {post.status === 'APPROVED' ?
                                                <img
                                                    src={DoneIcon}
                                                    alt='paid-icon'
                                                    className='dashboard-content-icon' />
                                            : post.status === 'PENDING' ?
                                                <img
                                                    src={RefundedIcon}
                                                    alt='canceled-icon'
                                                    className='dashboard-content-icon' />
                                            : post.status === 'SUSPENDED' ?
                                                <img
                                                    src={CancelIcon}
                                                    alt='refunded-icon'
                                                    className='dashboard-content-icon' />
                                            : null}
                                            <span>{post.status}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            {/* <img 
                                                src={orders[0].avatar}
                                                className='dashboard-content-avatar'
                                                alt={post.name + ' ' +post.name} /> */}
                                            <span>{post.name}</span>
                                        </div>
                                    </td>
                                    <td><span>{post.desc}</span></td>
                                    <td><ActionButton id={post.id} current_status={post.status} /></td>
                                    
                                   
                                    {/* <td><button className='dashbord-header-btn' onClick={onClick}>{btnText}</button></td> */}
                                </tr>
                            ))}
                        </tbody>
                    : null}
                </table>

                {posts.length !== 0 ?
                    <div className='dashboard-content-footer'>
                        {pagination.map((item, index) => (
                            <span 
                                key={index} 
                                className={item === page ? 'active-pagination' : 'pagination'}
                                onClick={() => __handleChangePage(item)}>
                                    {item}
                            </span>
                        ))}
                    </div>
                : 
                    <div className='dashboard-content-footer'>
                        <span className='empty-table'>No data</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Orders;