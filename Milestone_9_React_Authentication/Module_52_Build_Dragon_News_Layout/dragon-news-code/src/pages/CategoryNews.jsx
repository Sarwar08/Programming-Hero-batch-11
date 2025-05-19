
import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {

  const { id } = useParams(); // string

  const data = useLoaderData();

  
  const [categoryNews, setCategoryNews] = useState([]);
  
  // console.log(id, data);

  useEffect(() => {

    if (id == '0') {
      setCategoryNews(data);
    }
    else if (id == '1') {
      const filteredNews = data.filter((news) => {return news.others.is_today_pick == true});
      setCategoryNews(filteredNews);
    }
    else {
      const filteredNews = data.filter((news) => {return news.category_id == id});
      setCategoryNews(filteredNews);
    }

  },[id, data]);
  
  

  return (
    <div>
      <h2>Category News - {id}</h2>
      <h2 className='font-bold mb-5 '>Total - <span className='text-secondary mx-1'>{categoryNews.length}</span> news found</h2>

      <div className='grid grid-cols-1 gap-5'>
        {
          categoryNews.map( news => <NewsCard key={news.id} news={news} />)
        }
      </div>
    </div>
  )
}

export default CategoryNews