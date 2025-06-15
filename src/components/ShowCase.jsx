const ShowCase = ({ showcase }) => {
  const showcaseArr = [
    {
      lineOne: 'MERN',
      lineTwo: 'property rental site',
      fullStack: true,
      img: '',
      url: 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-app-90783.firebasestorage.app/o/project%20images%2Fsmart.png?alt=media&token=431db1a8-b996-4525-8963-39769787a8ee',
      gitLink: '',
      show: true,
      order: 1,
    },
    {
      lineOne: 'PYTHON REACT',
      lineTwo: 'e commerce shop',
      fullStack: true,
      img: '',
      url: 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-app-90783.firebasestorage.app/o/project%20images%2Feasy-store.png?alt=media&token=452d74ee-9f57-4c00-aee8-c4644f5956fe',
      gitLink: '',
      show: true,
      order: 2,
    },
    {
      lineOne: 'FIREBASE',
      lineTwo: 'CRM system',
      fullStack: true,
      img: '',
      url: 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-app-90783.firebasestorage.app/o/project%20images%2Feasy-data.png?alt=media&token=987d6bc0-edd6-4612-993d-11d9b333df88',
      gitLink: '',
      show: true,
      order: 3,
    },
    {
      lineOne: 'MERN',
      lineTwo: 'e commerce shop',
      fullStack: true,
      img: '',
      url: 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-app-90783.firebasestorage.app/o/project%20images%2Fjungle.png?alt=media&token=9a22056c-41bd-4222-ad04-1441b1114f1f',
      gitLink: '',
      show: true,
      order: 4,
    },
    {
      lineOne: 'MERN',
      lineTwo: 'content managment system',
      fullStack: true,
      img: '',
      url: 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-app-90783.firebasestorage.app/o/project%20images%2Fcms-blog.png?alt=media&token=b3a80260-d8db-4843-a1cf-d9559816dfc6',
      gitLink: '',
      show: true,
      order: 5,
    },
    {
      lineOne: 'VANILLA JAVASCRIPT',
      lineTwo: 'e commerce shop',
      fullStack: false,
      img: '',
      url: 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-app-90783.firebasestorage.app/o/project%20images%2Fvanilla-shop.png?alt=media&token=a55f7495-2524-45a1-8352-9db207646a71',
      gitLink: '',
      show: true,
      order: 6,
    },
    {
      lineOne: 'FIREBASE',
      lineTwo: 'admin functionality',
      fullStack: false,
      img: '',
      url: 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-app-90783.firebasestorage.app/o/project%20images%2Ffirebase-admin.png?alt=media&token=4aabd2a0-e254-4deb-9873-82196da15014',
      gitLink: '',
      show: true,
      order: 7,
    },
    {
      lineOne: 'VANILLA JAVASCRIPT',
      lineTwo: 'travel landing page super nav',
      fullStack: false,
      img: '',
      url: 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-app-90783.firebasestorage.app/o/project%20images%2Ftravel-landing-page.png?alt=media&token=05eada7f-d017-4356-bde4-ab6b4de484e0',
      gitLink: '',
      show: true,
      order: 8,
    },
    {
      lineOne: 'REACT FRONTEND',
      lineTwo: 'e commerce shop',
      fullStack: false,
      img: '',
      url: 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-app-90783.firebasestorage.app/o/project%20images%2Fcomfy-project.png?alt=media&token=9fd95778-be74-4efc-be4d-bb0fe18a57e9',
      gitLink: '',
      show: true,
      order: 8,
    },
  ]
  return (
    <section id='showCase' className='min-h-screen'>
      <h3 className='text-4xl text-center my-5'>Showcased Projects</h3>
      <div className='px-5 md:px-0 max-w-[1200px] m-auto grid md:grid-cols-2 my-5'>
        <div></div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque iusto
          hic nobis? Ipsam odit explicabo architecto perferendis ex non atque
          similique recusandae, sapiente exercitationem consectetur officia,
          quidem eum, temporibus animi sit sed deserunt laborum vel! Corporis
          alias qui animi, nobis laborum incidunt nihil, dignissimos
          voluptatibus perferendis inventore esse dolorum nam!
        </p>
      </div>
      <div className='grid md:grid-cols-2  gap-5 max-w-[1400px] mx-auto'>
        {showcase.map((item, i) => {
          return (
            <div key={i} className='h-100  rounded-[0.6rem] relative hover'>
              <a href={item.link}>
                {/* <div className='absolute to-0 z-10'>
                <div className='text-white'>
                  <i className='fa-solid fa-layer-group'></i>
                  <span>full stack</span>
                </div>
              </div> */}
                <div className='absolute top-0 bottom-0 left-0 right-0 bg-[#012840]/50 flex items-center justify-center rounded-[0.6rem] flex-col'>
                  <h3 className='text-white text-3xl'>{item.lineOne}</h3>
                  <p className='text-2xl text-white'>{item.lineTwo} </p>
                </div>
                <img
                  className='w-full h-full object-center rounded-[0.6rem] '
                  src={item.url}
                  alt=''
                />
              </a>
            </div>
          )
        })}
        <div className='h-100  rounded-[0.6rem] relative hover'>
          {/* <div className='absolute to-0 z-10'>
                <div className='text-white'>
                  <i className='fa-solid fa-layer-group'></i>
                  <span>full stack</span>
                </div>
              </div> */}
          <div className='absolute top-0 bottom-0 left-0 right-0 bg-[#012840]/50 flex items-center justify-center rounded-[0.6rem] flex-col'>
            <h3 className='text-white text-3xl capitalize'>
              new project coming soon!
            </h3>
            <p className='text-2xl text-white capitalize'> stay tuned... </p>
          </div>
          <img
            className='w-full h-full object-center rounded-[0.6rem] '
            // src={item.url}
            alt=''
          />
        </div>
      </div>
    </section>
  )
}

export default ShowCase
