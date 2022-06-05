import React from 'react'
import { Layout } from '../../components/layout/Layout';

export const Error404 = () => {
  return (
    <Layout tittle='Error404' >
      <div className='absolute w-full h-1/2 flex flex-col justify-center items-center' >
        <h1 className='sm:text-8xl text-4xl'>Error 404</h1>
        <h2 className='sm:text-3xl'>Pagina no encontrada</h2>
      </div>
    </Layout>
  )
}
