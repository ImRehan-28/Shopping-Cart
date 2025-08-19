import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner';
import Product from '../Components/Product';
const Home = () => {

  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setposts] = useState([])

  async function fetchProductdata() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setposts(data);
    }
    // eslint-disable-next-line no-unused-vars
    catch (error) {
      console.log("error hai bhai")
      setposts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductdata();
  }, [])


  return (
    <div>
      {
        loading ? <div className='flex justify-center items-center h-lvh'><Spinner /></div> :
          posts.length > 0 ?
            (<div className='w-screen mb-6'>
              <div className="w-[90%] sm:w-[84%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
                {
                  posts.map((post) => (
                    <Product key={post.id} post={post} />
                  ))
                }
              </div>
            </div>) :
            <div className='h-[90.3vh] flex justify-center items-center bg-[#8EAAAD]'>
              <p className='text-3xl'>No Data Found</p>
            </div>
      }
    </div>
  );
}

export default Home
