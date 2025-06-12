import React from 'react'

import logo1 from '../assets/images/design logos/1.png'
import logo2 from '../assets/images/design logos/2.png'
import logo3 from '../assets/images/design logos/3.png'
import logo4 from '../assets/images/design logos/4.png'
import logo5 from '../assets/images/design logos/5.png'
import logo6 from '../assets/images/design logos/6.png'
import logo7 from '../assets/images/design logos/7.png'

const DesignSection = () => {
  const data = [
    { img: 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-app-90783.firebasestorage.app/o/design%20logos%2F1.png?alt=media&token=61e88959-6591-492a-9d39-ccdf1aaa6a8d' },
    { img: 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-app-90783.firebasestorage.app/o/design%20logos%2F2.svg.png?alt=media&token=f1ca1a90-4416-4f73-91f4-adfccffd0531' },
    { img: 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-app-90783.firebasestorage.app/o/design%20logos%2F3.svg.png?alt=media&token=22fb1384-146f-4a22-8310-d879fd592d8f' },
    { img: 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-app-90783.firebasestorage.app/o/design%20logos%2F4.svg.png?alt=media&token=f90d8d6a-4ce1-458a-a655-08238cbd77eb' },
    { img: 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-app-90783.firebasestorage.app/o/design%20logos%2F5.svg.png?alt=media&token=53092061-61b3-4148-8b7a-f70cce1a7925' },
    { img: 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-app-90783.firebasestorage.app/o/design%20logos%2F6.png?alt=media&token=df452ddf-2d0a-4247-a303-4cc40d8167dd' },
    { img: 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-app-90783.firebasestorage.app/o/design%20logos%2F7.png?alt=media&token=066977a9-ab31-4be7-98fb-43f964dfece6' },
  ]

  const designTools = [
    'photo shop',
    'illustrator',
    'in design',
    'premmier pro',
    'after effects',
    'figma',
    'in design',
    'apple motion',
  ]
  return (
    <section className='mt-10'>
      <div className='max-w-[1300px] m-auto'>
        <h3 className='text-4xl text-center my-10'>Design Software</h3>
        <div className='grid grid-cols-2'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            similique qui, eveniet voluptatibus aut hic doloremque voluptate
            cumque, quo sit facilis quaerat labore, atque in accusantium
            expedita minima. Quasi nulla omnis voluptas ducimus beatae assumenda
            debitis officiis dignissimos quia mollitia quisquam unde, corrupti
            expedita magni eveniet autem quam eos, nesciunt facere vel ad nisi.
            Est voluptatem, provident aspernatur ex earum totam harum et
            reiciendis, debitis ullam ad libero, asperiores blanditiis quo
            quibusdam sapiente modi adipisci doloribus molestias eveniet? Ab,
            maiores.
          </p>
        </div>

        <div className=' mt-18'>
          <div className='grid grid-cols-7 gap-6 '>
            {data.map((item, i) => {
              return (
                <div
                  key={i}
                  className='shadow-2xl p-2 flex justify-center rounded-2xl'
                >
                  <img
                    className='w-30 h-30 object-contain'
                    src={item.img}
                    alt=''
                  />
                </div>
              )
            })}
          </div>

          <div>
            <ul className=' mt-20 grid grid-cols-3'>
              {designTools.map((item, i) => {
                return (
                  <li key={i} className='flex items-center'>
                    <i className='fa-solid fa-square-check text-4xl text-[#D90404]'></i>
                    <span className='ml-5 text-2xl'>{item}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        {/* end of div */}
      </div>
    </section>
  )
}

export default DesignSection
