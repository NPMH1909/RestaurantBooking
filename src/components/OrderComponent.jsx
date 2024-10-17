import React, { useState } from 'react'
import { Button, Option, Select } from '@material-tailwind/react';
import '../configs/slider.css'
import ModalComponent from './ModalComponent';

const OrderComponent = () => {
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const [date, setDate] = useState('2024-10-16');
    const [time, setTime] = useState('10:45');
    const [openModal, setOpenModal] = useState(false); // Thêm state để mở modal

    const handleBooking = () => {
        setOpenModal(true);
    };
  return (
    <div className='fixed-order'>
         <div className="p-4 bg-white shadow-lg rounded-lg">
                <h2 className="text-xl font-bold mb-2">Đặt chỗ (Để có chỗ trước khi đến)</h2>
                <h3 className="text-red-600 font-bold mb-2">Đặt bàn giữ chỗ</h3>
                <div className="mb-4">
                    <label className="block mb-1">Người lớn:</label>
                    <Select value={adults} onChange={(e) => setAdults(Number(e.target.value))}>
                        {[...Array(11).keys()].map((num) => (
                            <Option key={num} value={num}>{num}</Option>
                        ))}
                    </Select>
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Trẻ em:</label>
                    <Select value={children} onChange={(e) => setChildren(Number(e.target.value))}>
                        {[...Array(6).keys()].map((num) => (
                            <Option key={num} value={num}>{num}</Option>
                        ))}
                    </Select>
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Thời gian đến:</label>
                    <div className="flex space-x-2">
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="border border-gray-300 rounded px-2 py-1"
                        />
                        <input
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="border border-gray-300 rounded px-2 py-1"
                        />
                    </div>
                </div>
                <Button onClick={handleBooking} className="w-full h-8 bg-red-500 text-white hover:bg-red-600">
                    Đặt chỗ ngay
                </Button>
            </div>
            <ModalComponent 
                open={openModal} 
                setOpen={setOpenModal} 
                adults={adults} 
                children={children} 
                date={date} 
                time={time} 
            />
    </div>
  )
}

export default OrderComponent