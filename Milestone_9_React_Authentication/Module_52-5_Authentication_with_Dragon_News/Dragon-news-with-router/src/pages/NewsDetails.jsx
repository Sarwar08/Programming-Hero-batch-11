
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import RightAside from '../components/homelayout/RightAside'
import NewsDetailsCard from '../components/NewsDetailsCard'
import { useLoaderData, useParams } from 'react-router'

const NewsDetails = () => {

    const [news, setNews] = useState({});

    const data = useLoaderData();
    const {id} = useParams();

    // console.log(data, id);

    useEffect(() => {

        const newsDetails = data.find( news => news.id == id); // returns a object

        // console.log(newsDetails);
        setNews(newsDetails);

    },[data, id]);


    return (
        <div>
            <header>
                <Header />
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 my-10'>
                <section className='col-span-9'>
                    <h2 className='font-bold mb-5'>News Details</h2>
                    <NewsDetailsCard news={news} />
                </section>
                <aside className='col-span-3'>
                    <RightAside />
                </aside>
            </main>
        </div>
    )
}

export default NewsDetails