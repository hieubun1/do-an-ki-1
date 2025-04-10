import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { current } from '@reduxjs/toolkit';

const CheckoutPage = () => {
    const cartItems = useSelector((state) => state.cart?.cartItems) || [];

    const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2);

    const [isChecked, setIsChecked] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Dữ liệu biểu mẫu:", data);
        alert("Đặt hàng thành công!");
        const newOrder = {
            name: data.name,
            email: currentUser?.email,
            address: {
                city: data.city,
                country: data.country,
                state: data.state,
                zipcode: data.zipcode,
            },
            phone: data.phone,
            productIds: cartItems.map((item) => item?._id),
            totalPrice: totalPrice,
        };
        console.log(newOrder)
    }

    const handleGoogleSignIn = () => {
        console.log("Đăng nhập với Google");
    };

    return (
        <section>
            <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                <div className="container max-w-screen-lg mx-auto">
                    <div>
                        <h2 className="font-semibold text-xl text-gray-600 mb-2">Thanh toán khi nhận hàng</h2>
                        <p className="text-gray-500 mb-2">Tổng tiền: ${totalPrice}</p>
                        <p className="text-gray-500 mb-6">Số lượng sản phẩm: {cartItems.length}</p>
                    </div>

                    <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-8"
                        >
                            <div className="text-gray-600">
                                <p className="font-medium text-lg">Thông tin cá nhân</p>
                                <p>Vui lòng điền đầy đủ thông tin.</p>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                    <div className="md:col-span-5">
                                        <label htmlFor="full_name">Họ và tên</label>
                                        <input
                                            type="text"
                                            {...register("full_name", { required: "Vui lòng nhập họ tên" })}
                                            id="full_name"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        />
                                        {errors.full_name && <p className="text-red-500">{errors.full_name.message}</p>}
                                    </div>

                                    <div className="md:col-span-5">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            {...register("email", { required: "Vui lòng nhập email" })}
                                            id="email"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        />
                                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                                    </div>

                                    <div className="md:col-span-3">
                                        <label htmlFor="address">Địa chỉ</label>
                                        <input
                                            type="text"
                                            {...register("address", { required: "Vui lòng nhập địa chỉ" })}
                                            id="address"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        />
                                        {errors.address && <p className="text-red-500">{errors.address.message}</p>}
                                    </div>

                                    <div className="md:col-span-2">
                                        <label htmlFor="phone">Số điện thoại</label>
                                        <input
                                            type="text"
                                            {...register("phone", { required: "Vui lòng nhập số điện thoại" })}
                                            id="phone"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        />
                                        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                                    </div>

                                    <div className="md:col-span-5">
                                        <div className="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                id="terms"
                                                className="form-checkbox"
                                                checked={isChecked}
                                                onChange={(e) => setIsChecked(e.target.checked)}
                                            />
                                            <label htmlFor="terms" className="ml-2">
                                                Tôi đồng ý với <Link to="/terms" className="text-blue-600">điều khoản và điều kiện</Link>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="md:col-span-5 text-right">
                                        <div className="inline-flex items-end">
                                            <button
                                                type="submit"
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                disabled={!isChecked}
                                            >
                                                Xác nhận đặt hàng
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className="text-center mt-4">
                            <button
                                onClick={handleGoogleSignIn}
                                className="text-blue-500 hover:underline"
                            >
                                Đăng nhập bằng Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckoutPage;
