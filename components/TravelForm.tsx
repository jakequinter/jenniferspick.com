import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import Toast from '../components/Toast';
import { auth } from 'firebase-admin';
import { useAuth } from '../lib/auth';
import { createItem } from '../lib/db';

const TravelForm = () => {
  const auth = useAuth();
  const [showToast, setShowToast] = useState(false);
  const { register, handleSubmit } = useForm();
  const onCreateItem = ({ text, location, date, imageUrl }) => {
    createItem({
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      text,
      location,
      date,
      imageUrl
    });
  };

  return (
    <div>
      <div>
        <form className="space-y-6" onSubmit={handleSubmit(onCreateItem)}>
          <div>
            <label htmlFor="text" className="block text-gray-700">
              Display Text
            </label>
            <div className="mt-1">
              <input
                name="text"
                ref={register}
                placeholder="Spent Thanksgiving with my Mom"
                className="w-full border h-10 px-2 text-sm border-gray-400 bg-white rounded"
              />
            </div>
          </div>
          <div>
            <label htmlFor="location" className="block text-gray-700">
              Location
            </label>
            <div className="mt-1">
              <input
                name="location"
                ref={register}
                placeholder="Knoxville, TN"
                className="w-full border h-10 px-2 text-sm border-gray-400 bg-white rounded"
              />
            </div>
          </div>
          <div>
            <label htmlFor="date" className="block text-gray-700">
              Date
            </label>
            <div className="mt-1">
              <input
                name="date"
                ref={register}
                placeholder="November, 2020"
                className="w-full border h-10 px-2 text-sm border-gray-400 bg-white rounded"
              />
            </div>
          </div>
          <div>
            <label htmlFor="imageUrl" className="block text-gray-700">
              Image Url
            </label>
            <div className="mt-1">
              <input
                name="imageUrl"
                ref={register}
                placeholder="https://images.unsplash.com/photo-1607118563222-3bed9246a6e0"
                className="w-full border h-10 px-2 text-sm border-gray-400 bg-white rounded"
              />
            </div>
          </div>
          <button
            className="mt-8 bg-gray-700 px-4 py-2 rounded text-white float-right hover:bg-gray-900"
            onClick={() => auth.signout()}
          >
            Sign out
          </button>
          <button
            className="mt-8 mr-4 bg-green-600 px-4 py-2 rounded text-white float-right hover:bg-green-700"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      {/* <div className="mt-24">
        <Toast text="success" />
      </div> */}
    </div>
  );
};

export default TravelForm;
