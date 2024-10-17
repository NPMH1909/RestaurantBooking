import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import React from 'react';
import { useGetAllRestaurantQuery } from '../apis/restaurantApi';
import { useNavigate } from 'react-router-dom';

const RestaurantCardComponent = () => {
  const { data, isLoading, error } = useGetAllRestaurantQuery();
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const restaurants = Array.isArray(data?.data?.data) ? data.data.data : [];
  const handleCardClick = (restaurantId) => {
    navigate(`/restaurant/${restaurantId}`); 
  };

  return (
    <div className="grid grid-cols-3 mb-4 p-8 gap-4">
      {restaurants.length === 0 ? (
        <div>No Restaurants Found</div>
      ) : (
        restaurants.map((restaurant) => (
          <Card 
            key={restaurant._id}
            className="w-[95%]" 
            onClick={() => handleCardClick(restaurant._id)} 
          >
            <CardHeader shadow={false} floated={false} className="h-90">
              <img
                src={restaurant.avatar_image.url}
                alt="card-image"
                className="h-60 w-full object-cover"
              />
            </CardHeader>
            <CardBody className="bg-[#EEEEEE]">
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium">
                  {restaurant.name}
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                <span className='font-medium'>Địa chỉ: </span>
                {restaurant.address}
              </Typography>
            </CardBody>
          </Card>
        ))
      )}
    </div>
  );
}

export default RestaurantCardComponent;
