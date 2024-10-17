import React from 'react';
const DescriptionComponent = ({ restaurant }) => {
   

    return (
        <div className="fixed-description"> {/* Thêm lớp CSS tại đây */}
            <div className="pt-10 pr-4">
                <h2 className="text-2xl font-semibold">{restaurant.name}</h2>
                <p className="mt-2">
                    <span className="font-medium">Địa chỉ: </span>
                    {restaurant.address}
                </p>
                <p className="mt-2">
                    <span className="font-medium">Giờ mở cửa: </span>
                    {restaurant.openTime} - {restaurant.closeTime}
                </p>
                <p className="mt-2">
                    <span className="font-medium">Khoảng giá: </span>
                    {restaurant.price_per_table}
                </p>
            </div>
           
        </div>
    );
};

export default DescriptionComponent;
