import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../apis/userApi';

const LoginPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, { isLoading, error }] = useLoginMutation();

    const loginHandle = async(email, password) =>{
        try {
            const data = {
                username: username,
                email: username,
                phone_number: username,
                password: password,
              };
              // if check if
              const result = await login(data).unwrap();
              if (result.status === 200) {
                Toast.fire({
                  icon: "success",
                  title: "Login successfully",
                }).then(() => {
                  localStorage.setItem("user", username);
                  localStorage.setItem("token", result.data);
                  navigate("/");
                });
              }
        } catch (error) {
            
        }
    }
    return (
        <section className="h-screen bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
            <div className="max-w-5xl w-full p-10">
                <div className="bg-white rounded-lg shadow-lg dark:bg-neutral-800">
                    <div className="flex flex-col lg:flex-row">
                        <div className="px-4 py-6 lg:w-6/12 m-2">
                            <div className="text-center">
                                <img
                                    className="mx-auto w-48"
                                    src="https://i.pinimg.com/564x/3b/86/6a/3b866aa9f7817fcaaa860ebe20afbfcb.jpg"
                                    alt="logo"
                                />
                                <h4 className="mb-6 mt-1 text-xl font-semibold">
                                    We are The Lotus Team
                                </h4>
                            </div>

                            <form>

                                <div className="mb-4 ">
                                    <input
                                        type="text"
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-500"
                                        placeholder="Username"
                                    />
                                </div>

                                <div className="mb-4">
                                    <input
                                        type="password"
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-500"
                                        placeholder="Password"
                                    />
                                </div>

                                <div className="mb-6 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            className="form-checkbox h-4 w-4 ml-1 text-primary border-neutral-300 rounded focus:ring-primary"
                                            type="checkbox"
                                            id="exampleCheck2"
                                            defaultChecked
                                        />
                                        <label
                                            className="ml-2 hover:cursor-pointer"
                                            htmlFor="exampleCheck2"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" className="text-blue-600 hover:underline">Forgot password?</a>
                                </div>





                                <div className="text-center mb-4">
                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-2 rounded-md transition duration-200 hover:shadow-lg"
                                        onClick={()=>loginHandle(username, password)}
                                    >
                                        Log in
                                    </button>
                                </div>



                                <div className="flex items-center justify-between ">
                                    <span className="mb-0 ">Don't have an account? <span onClick={() => { navigate('/register') }}
                                        className="text-blue-600 hover:underline cursor-pointer">Register</span></span>
                                </div>
                            </form>
                        </div>

                        <div
                            className="hidden lg:flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                            style={{
                                background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                        >
                            <div className="px-4 py-6 text-white">
                                <h4 className="mb-6 text-xl font-semibold">We are more than just a company</h4>
                                <p className="text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginPage;
