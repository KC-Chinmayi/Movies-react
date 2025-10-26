import React from 'react'

const Watchlist = () => {
  return (
   <>
    {/*Genere part*/}
    <div className='flex justify-center text-wrap m-4'>
      <div className='flex justify-center overflow rounded-xl bg-blue-400 h-[3rem] w-[9rem] text-white font-bold items-center mx-4'>All Genere</div>
      <div className='flex justify-center overflow rounded-xl bg-gray-400/50 h-[3rem] w-[9rem] text-white font-bold items-center'>Action</div>
    </div>


{/* Table*/}
   <div className='flex justify-center my-4'>
    <input type="text" placeholder='Search Movies' className='h-[3rem] w-[18rem] bg-gray-200 outline-none px-4'/>
   </div>
   <div className='overflow rounded-lg border border-gray-200 m-8'>
    <table className='w-full text-gray-500 text-center'>
      <thead className='border-b-2'>
        <tr>
          <th>Name</th>
          <th>Ratings</th>
          <th>Popularity</th>
          <th>Genere</th>
        </tr>
      </thead>
      <tbody>
        {/*1st row */}
        <tr className='border-b-2'>
          <td className='flex items-center px-6 py-4'>
            <img className='h-[6rem] w-[10rem]'  src={`https://cdna.artstation.com/p/assets/images/images/063/096/684/large/william-j-harris-oppenheimer-movie-poster-2023.jpg?1684720979`} alt="" />
            <div className='mx-10'>Openheimer</div>
          </td>
          <td>
            8.5
          </td>
        <td>9</td>
        <td>Thriller</td>
        <td className='text-red-700'>
          Delete
        </td>
        </tr>
       {/*2nd row */}
        <tr className='border-b-2'>
          <td className='flex items-center px-6 py-4'>
            <img className='h-[6rem] w-[10rem]'  src={`https://i.pinimg.com/originals/b7/24/d9/b724d968025c6cda0580ccfa1541a89a.png`} alt="" />
            <div className='mx-10'>Zootopia</div>
          </td>
          <td>
            9
          </td>
        <td>9</td>
        <td>Comedy</td>
        <td className='text-red-700'>
          Delete
        </td>
        </tr>

      </tbody>
    </table>
   </div>
   </>
  )
}

export default Watchlist