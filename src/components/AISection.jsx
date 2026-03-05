const testUrls = [
  {
    url: 'https://icon.icepanel.io/Technology/png-shadow-512/Jupyter.png',
    text: 'Jupyter',
  },
  { url: 'https://icon.icepanel.io/Technology/svg/NumPy.svg', text: 'NumPy' },
  {
    url: 'https://icon.icepanel.io/Technology/png-shadow-512/Pandas.png',
    text: 'Pandas',
  },
  {
    url: 'https://icon.icepanel.io/Technology/svg/Matplotlib.svg',
    text: 'Matplotlib',
  },
  {
    url: 'https://icon.icepanel.io/Technology/svg/scikit-learn.svg',
    text: 'SciKit Learn',
  },
]

const AISection = () => {
  return (
    <section id="AI" className=' min-h-[500px] max-w-[1700px]  mx-auto'>
      <div>
        <h3 className='text-4xl text-center mt-10 mb-5 text-blue-500'>
          Artificial Intelligence
          <p>
            <span className='text-3xl  text-blue-500'>&</span> data science
          </p>
        </h3>

        <div className='mt-11 min-h-[200px]   grid md:grid-cols-2 lg:grid-cols-5 gap-5 rounded p-3'>
          {testUrls.map((item) => {
            return (
              <div className="hover mb-5 border-b border-dashed md:border-none pb-5 md:pb-0">
                <div className=' md:shadow-2xl flex items-center justify-center p-2'>
                  <img
                    className='h-[200px]'
                    src={
                      item.url ||
                      'https://icon.icepanel.io/Technology/png-shadow-512/Jupyter.png'
                    }
                    alt=''
                  />
                </div>
                <div className="mt-5">
                  <p className="text-center text-2xl ">{item.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
// 
export default AISection
