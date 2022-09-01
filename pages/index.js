import { useUser } from '@auth0/nextjs-auth0'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className={styles.container}>
      <h1 className="max-w-sm py-20 text-center text-3xl font-bold py-8">
        Next auth
      </h1>

      {user ? (
        <div className="py-8 px-8 max-w-sm mx-auto bg-gray-800 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <div className="text-center space-y-2 sm:text-left">
            <img 
              className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" 
              src={user.picture} 
              alt="Woman's Face"
            />
          
            <div className="space-y-0.5">
              <p className="text-lg text-white font-semibold">
                {user.name}
              </p>
              <p className="text-slate-500 font-medium">
                {user.email}
              </p>
            </div>

            <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-800 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              <a href="/api/auth/logout">Logout</a>
            </button>
          </div>
        </div>
      ) : (
        <button className="max-w-sm mx-auto px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-800 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          <a href="/api/auth/login">Login</a>
        </button>
      )}

    </div>
  )
}
