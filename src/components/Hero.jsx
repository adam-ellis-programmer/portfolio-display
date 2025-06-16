
import HeroButtons from './HeroButtons'
import SocialLinks from './SocialLinks'
import HeroImg from './HeroImg'

const name = 'designer'
const Hero = () => {
  //h-[calc(100vh-80px)]
  return (
    <section className=''>
      {/* main wrap */}
      <div className='min-h-[calc(100vh-80px)]  grid grid-cols-1 md:grid-cols-2  mx-width  '>
        <div className=''>
          <div className=' flex justify-center'>
            <div className=' w-fit '>
              <div className=''>
                <p className=' tracking-widest clamp-hero-p'>Adam Ellis</p>
                <p className='text-6xl tracking-[0.4rem] clamp-hero-p-1 mt-1'>
                  programmer
                </p>
              </div>
              {/*  */}
              <div className=' text-2xl  mt-5 leading-[2.4rem] text-end'>
                <p className='tracking-[1em]'>& designer</p>
                <p className='tracking-[1rem] mr-5'>London</p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className='max-w-[600px] m-auto mt-10 text-justify p-10 md:p-0'>
            <div className='flex md:hidden justify-start'>
              <HeroImg />
            </div>
            <div className=' flex justify-center items-center mb-5 '>
              <i className='fa-solid fa-circle-info text-[1.5rem]'></i>
              <p className='text-2xlmy-5 text-2xl mx-3'>quick bio</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium fuga officia consectetur reprehenderit temporibus hic
              nam aperiam necessitatibus repellat consequuntur eius porro
              quaerat ullam delectus suscipit, voluptatem laboriosam debitis
              veritatis id! Quod soluta obcaecati dignissimos deleniti commodi
              voluptatum asperiores non sunt exercitationem laudantium. Dolorem,
              voluptate alias ipsum voluptatum recusandae ex qui veniam, eos
              consectetur a est repudiandae. Accusantium nam dolorem explicabo
              quod quia officiis alias obcaecati, voluptatibus reprehenderit
              eius quisquam corrupti incidunt tempora ab dolore et est numquam
              ipsam excepturi. Amet voluptates repudiandae, veritatis voluptate
              ratione vel nulla eveniet, dolor blanditiis exercitationem alias
              quibusdam libero eligendi facilis. Incidunt, exercitationem
              voluptatibus?
            </p>

            <HeroButtons />
            <SocialLinks />
            {/* <p className='text-center mt-15 animate-pulse text-2xl text-rose-500'>
              <span>scroll down for more</span>
            </p> */}
          </div>
        </div>
        {/*  */}
        <div className='flex justify-center '>
          <div className=''>
            {/* <p className='text-center text-6xl absolute'>digital design and production!</p> */}
            <div className=' hidden md:flex justify-start'>
              <HeroImg />
            </div>
            <div className=' mt-5'>
              <div className='max-w-[400px] mx-auto  text-end'>
                <p className='  text-2xl tracking-[0.5rem]'>over 10 projects</p>
                <p className='text-2xl tracking-[0.7rem]'>available for</p>
                <p className='text-2xl tracking-[0.9rem]'> demoing</p>
              </div>
              {/*  */}
              <div className=' mt-10 flex justify-center'>
                <p className='max-w-3/4 bg-[#6D84B0] shadow-2xl text-white  p-5 rounded-[0.4rem]  page-quote'>
                  Your work is going to fill a large part of your life, and the
                  only way to be truly satisfied is to do what you believe is
                  great work. And the only way to do great work is to love what
                  you do. If you haven't found it yet, keep looking. Don't
                  settle. -- steve jobs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
