import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Backbutton from '../component/Backbutton';
import Spinner from '../component/Spinner';

function ShowallBooks() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams(); // Corrected: Call useParams as a function

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5000/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]); // Added id as dependency to re-fetch when id changes

  return (
    <div className='p-4'>
      <Backbutton />
      <h1 className='text-3xl my-4'>Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl'>
          <div className="my-4">
            <span className='text-3xl mr-4 text-gray-500'>Id</span>
            <span>{book._id}</span>
          </div>
          <div className="my-4">
            <span className='text-3xl mr-4 text-gray-500'>Title</span>
            <span>{book.title}</span> {/* Corrected: Changed _title to title */}
          </div>
          <div className="my-4">
            <span className='text-3xl mr-4 text-gray-500'>Author</span>
            <span>{book.author}</span>
          </div>
          <div className="my-4">
            <span className='text-3xl mr-4 text-gray-500'>PublishYear</span> {/* Corrected: Changed PublsihYear to PublishYear */}
            <span>{book.publishYear}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowallBooks;
