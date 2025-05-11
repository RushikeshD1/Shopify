import React from 'react'

const Home = () => {

    

    return (
        
    <div 
        style={{
            backgroundImage:
            'linear-gradient(to bottom right, #180b1f 30%, #3b1f2b 60%, #4b1414 100%)',
        }}
        className='flex flex-col gap-8 justify-center text-center px-20 w-full min-h-screen text-white'>
        <h1 className='font-semibold text-4xl'>Welcome to React</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit quisquam blanditiis temporibus. Hic soluta pariatur asperiores vel, et dolore perferendis corporis aperiam accusamus. Doloremque, nihil repudiandae asperiores architecto quidem facere? Est illum quos sint sunt iste pariatur repudiandae esse distinctio laboriosam. Sed iusto architecto pariatur beatae labore exercitationem, veniam aliquam esse veritatis magnam voluptatem eaque. Nam esse nesciunt alias atque beatae saepe. Architecto ratione cumque...</p>
        
        <div>
            <button className='p-4 inline-block border-2 border-blue-900 w-48 text-center align-middle font-semibold text-xl text-blue-600 rounded-md'>
                Explore More !!!
            </button>
        </div>       


    </div>
  )
}

export default Home