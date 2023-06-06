import React from 'react'

const Login = () => {
  return (
    <>
        <div class="min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
            <div class="bg-white max-w-lg mx-auto p-8 md:p-12 my-8 rounded-lg shadow-xl">
                <h3 class="text-center font-bold text-2xl text-gray-700">Login</h3>
                <div class="mt-8">
                    <form class="flex flex-col" method="POST" action="#">
                        <div class="mb-6 pt-2 rounded bg-gray-100">
                            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Username</label>
                            <input type="username" id="username" class="bg-gray-100 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-200 focus:border-green-600 transition duration-500 px-2 pb-2" />
                        </div>
                        <div class="mb-6 pt-2 rounded bg-gray-100">
                            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
                            <input aria-hidden type="password" id="password" class="bg-gray-100 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-200 focus:border-green-600 transition duration-500 px-2 pb-2" />
                        </div>
                        <button class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-100" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login