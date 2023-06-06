import React from 'react'

const Login = () => {
  return (
    <>
        <div className="min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
            <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-8 rounded-lg shadow-xl">
                <h3 className="text-center font-bold text-2xl text-gray-700">SEMAR BETUL</h3>
                <div className="mt-8">
                    <form className="flex flex-col" method="POST" action="#">
                        <div className="mb-6 pt-2 rounded bg-gray-100">
                            <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">Username</label>
                            <input type="username" id="username" className="bg-gray-100 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-200 focus:border-green-600 transition duration-500 px-3 pb-2" />
                        </div>
                        <div className="mb-6 pt-2 rounded bg-gray-100">
                            <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Password</label>
                            <input aria-hidden type="password" id="password" className="bg-gray-100 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-200 focus:border-green-600 transition duration-500 px-3 pb-2" />
                        </div>
                        <button className="bg-green-600 hover:bg-green-700 text-white py-2 rounded shadow-lg hover:shadow-xl transition duration-100" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login