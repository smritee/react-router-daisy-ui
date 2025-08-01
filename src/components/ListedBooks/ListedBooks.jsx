import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../Utility/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    //const [sort, setSort] = useState('');
    const allBooks = useLoaderData();
    // ideally we will directly get the read book list from the database

    useEffect(() => {
        
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        // worst way
        console.log(storedReadList, storedReadListInt, allBooks);

        // 
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList);

    }, []);

    // const handleSort = sortType => {
    //     setSort(sortType);

    //     // 
    //     if(sortType === 'No of pages'){
    //         const sortedReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages);
    //         setReadList(sortedReadList);
    //     }

    //     if(sortType === 'Ratings'){
    //         const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
    //         setReadList(sortedReadList);
    //     }

    // }
    
    return (
        <div>
            <Tabs>
                <TabList>
                <Tab>Read List</Tab>
                <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                <h2>Read List {readList.length}</h2>
                {
                    readList.map(book => <Book key={book.bookId} book={book}></Book>)
                }
                </TabPanel>
                <TabPanel>
                <h2>Wish List</h2>
                </TabPanel>
            </Tabs>            
        </div>
    );
};

export default ListedBooks;