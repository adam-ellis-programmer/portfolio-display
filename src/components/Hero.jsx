import HeroButtons from './HeroButtons'
import SocialLinks from './SocialLinks'
import HeroImg from './HeroImg'

const name = 'designer'
const Hero = ({ showcase,isDarkMode }) => {
  //h-[calc(100vh-80px)]
  //min-h-[calc(100vh-80px)]
  return (
    <section className=''>
      {/* main wrap */}
      <div className='  grid grid-cols-1 md:grid-cols-2  mx-width px-10  mb-10'>
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
                <p className='tracking-[0.8em]'>& designer</p>
                <p className='tracking-[1rem] mr-5'>London</p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className='max-w-[600px] m-auto mt-10 text-justify md:shadow-[1px_2px_15px_rgba(0,0,0,0.1)]  p-0 md:p-10 rounded '>
            <div className='flex md:hidden justify-start'>
              <HeroImg  isDarkMode={isDarkMode}/>
            </div>
            <div className=' flex justify-center items-center mb-5 '>
              <i className='fa-solid fa-circle-info text-[1.5rem]'></i>
              <p className='text-2xlmy-5 text-2xl mx-3'>quick bio</p>
            </div>
            <p className=''> 
              Adam is a seasoned technology professional with over ten years of
              design experience and more than five years of programming
              expertise. Throughout his career, he has developed a unique blend
              of creative vision and technical implementation skills, allowing
              him to bridge the gap between aesthetic design and functional
              code. His extensive background in design provides him with a deep
              understanding of user experience principles, visual communication,
              and interface aesthetics, while his programming skills enable him
              to bring complex digital concepts to life. Adam's dual expertise
              makes him particularly valuable in creating cohesive,
              user-centered digital solutions that are both visually compelling
              and technically robust.
            </p>

            <HeroButtons showcase={showcase} />
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
              <HeroImg isDarkMode={isDarkMode} />
            </div>
            <div className=' mt-5'>
              <div className='max-w-[400px] mx-auto  text-end'>
                <p className='  text-2xl tracking-[0.5rem]'>over 10 projects</p>
                <p className='text-2xl tracking-[0.7rem]'>available for</p>
                <p className='text-2xl tracking-[0.9rem]'> demoing</p>
              </div>
              {/*  */}
              <div className=' mt-10 flex justify-center '>
                <p className='md:max-w-3/4 bg-[#6D84B0] shadow-2xl text-white  p-5 rounded-[0.4rem]  page-quote'>
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
