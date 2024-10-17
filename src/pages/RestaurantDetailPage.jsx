// RestaurantPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetRestaurantByIdQuery } from '../apis/restaurantApi';
import DescriptionComponent from '../components/DescriptionComponent';
import SliderComponent from '../components/SliderComponent';
import HeaderComponent from '../components/HeaderComponent';
import NavbarComponent from '../components/NavbarComponent';
import OrderComponent from '../components/OrderComponent';

const RestaurantPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetRestaurantByIdQuery(id);
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const restaurant = data?.data;
  const sliders = restaurant?.slider_images || []; // Lấy slider_images từ restaurant

  return (
    <div className='bg-[#faebd7]'>
      <HeaderComponent />
      <NavbarComponent />
      <div className="flex flex-col md:flex-row p-4">
        <div className="md:w-3/5">
          <div className='pb-2'>
            <span className='text-blue-500 cursor-pointer' onClick={() => { navigate('/restaurants') }}>
              Nhà hàng
            </span> {'>'} {restaurant.name}
          </div>
          {/* Truyền sliders vào SliderComponent */}
          <SliderComponent sliders={sliders} />
          <div>
            {restaurant.description}
          </div>
        </div>

        <div className="md:w-2/5">
          <DescriptionComponent restaurant={restaurant} />
          <OrderComponent/>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
