import React from 'react'

import { GiClothes } from "react-icons/gi"
import { BiRightArrowAlt } from "react-icons/bi"
const SignUp = () => {
    return (
        <>

            <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                    <div className="mb-2 flex justify-center items-center">

                        <GiClothes className='h-10 w-10' />
                    </div>
                    <h2 className="text-center text-2xl font-bold leading-tight text-black">
                        Sign up to create account
                    </h2>
                    <p className="mt-2 text-center text-base text-gray-600">
                        Already have an account?
                        <a
                            href="#"
                            title=""
                            className="font-medium text-black hover:underline"
                        >
                            Sign In
                        </a>
                    </p>
                    <form className="mt-8">
                        <div className="space-y-5">
                            <div>
                                <label for="name" className="text-base font-medium text-gray-900">

                                    Full Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed"
                                        type="text"
                                        placeholder="Full Name"
                                        id="name"
                                    />
                                </div>
                            </div>
                            <div>
                                <label for="email" className="text-base font-medium text-gray-900">

                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed "
                                        type="email"
                                        placeholder="Email"
                                        id="email"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label for="password" className="text-base font-medium text-gray-900">

                                        Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed "
                                        type="password"
                                        placeholder="Password"
                                        id="password"
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                >
                                    Create Account
                                    <BiRightArrowAlt className='ml-2' />
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>



        </>
    )
}

export default SignUp