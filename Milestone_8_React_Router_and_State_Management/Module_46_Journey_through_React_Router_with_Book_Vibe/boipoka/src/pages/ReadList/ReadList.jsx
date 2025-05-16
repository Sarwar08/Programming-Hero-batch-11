import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBookIds } from '../../utility/addToDB';
import { useLoaderData } from 'react-router';
import Book from '../Book/Book';

const ReadList = () => {

    const [readlist, setReadList] = useState([]);
    const [sort, setSort] = useState('');

    const books = useLoaderData();

    useEffect(() => {
        const storedIds = getStoredBookIds();

        const convertedId = storedIds.map(id => parseInt(id));
        console.log("con", convertedId[0]);

        const myReadList = books.filter(book => convertedId.includes(book.bookId));

        console.log(myReadList);

        setReadList(myReadList);
    }, [books])

    const handleSort = (type) => {
        setSort(type);

        if (type === 'pages'){
            const sortedByPage = [...readlist].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedByPage);
        }

        if (type === 'ratings'){
            const sortedByRatings = [...readlist].sort((a, b) => a.rating - b.rating);
            setReadList(sortedByRatings)
        }
    }

    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">Sort By:{sort ? sort : ""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => handleSort('pages')}><a>Pages</a></li>
                    <li onClick={() => handleSort('ratings')}><a>Ratings</a></li>
                </ul>
            </details>

            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>My read list: {readlist.length}</h2>
                    <div>
                        {
                            readlist.map(book => <Book book={book} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>My wish list</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default ReadList