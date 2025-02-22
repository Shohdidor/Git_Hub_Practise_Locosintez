import React from 'react'



// Photo


import play from '../../assets/play.svg'
import linz from '../../assets/linz.svg'
import logolife from '../../assets/logolife.svg'
import ph4 from '../../assets/ph4.svg'

// Components

import Card from '../../components/Card'
const Develop = () => {
  return (
      <>
      
          <section className='w-[100%] flex justify-center items-center bg-cover bg-no-repeat h-screen bg-[url(src/assets/fon.svg)]'>
          
              <img src={play} alt="" />
          </section>

          <div className='w-[80%] m-auto mt-[10%]'>
              
              <h1 className='text-[45px] font-bold'>Стратегия в области качества</h1>

              <div className='w-[35%] mt-[6%] '>
                  
                  <div className='w-[100%] h-[41px] flex justify-between items-center border-b-[1px] border-black'>
                      
                      <h1 className='text-[24px] font-medium text-[#525252]'>
                          Менеджмент качества
                      </h1>

                      <button className='w-[18px] h-[18px] border-none outline-none bg-transparent'>
                          <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                          </svg>
                      </button>
                  </div>

                  <div className='w-[100%] h-[41px] flex justify-between items-center border-b-[1px] border-black'>

                      <h1 className='text-[24px] font-medium text-[#525252]'>
                          Экологическая политика
                      </h1>

                      <button className='w-[18px] h-[18px] border-none outline-none bg-transparent'>
                          <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                          </svg>
                      </button>
                  </div>

                  <div className='w-[100%] h-[41px] flex justify-between items-center border-b-[1px] border-black'>

                      <h1 className='text-[24px] font-medium text-[#525252]'>
                          Бережливое производство
                      </h1>

                      <button className='w-[18px] h-[18px] border-none outline-none bg-transparent'>
                          <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                          </svg>
                      </button>
                  </div>


                  
              </div>

          </div>


          <Card />

          <section className='w-[80%] m-auto mt-[100px] '>
              <h1 className='text-[45px] font-bold'>Независимая оценка</h1>

              
              <section className='w-[100%] mt-[50px] flex justify-between items-center'>
                  
                  <div className='w-[35%]'>
                      <img src={linz} alt="" />
                  </div>

                  <div className='w-[50%] '>
                      <h1 className='text-[36px] font-semibold pt-[90px]'>Листок жизни</h1>
                      <p className='text-[18px] text-[#525252] font-normal'>Совершенствовать систему управления качеством для
                          расширения возможностей удовлетворения потребностей
                          заинтересованных сторон</p>
                      
                      <img className='mt-[35px]' src={logolife} alt="" />
                  </div>
              </section>

          </section>


          <section className='w-[80%] m-auto mt-[90px]'>
              <h1 className='text-[45px] font-bold'>Партнёрские проекты</h1>

              <section className='w-[100%] mt-[60px] flex justify-between'>
                  
                  <div className='w-[29%] h-[98px] px-[10px] flex justify-between items-center border border-[#ccc]'>

                      <h1 className='text-[18px] font-normal'>Политика системы  <br />
                          менеджмента качества <br />
                          Группы компания "Лакра"</h1>
                      
                      <button className='border-none outline-none bg-transparent'>
                          <svg data-slot="icon" className='w-[20px] h-[20px]' fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                          </svg>
                      </button>

                  </div>

                  <div>
                      
                  </div>

                  <div className='w-[35%]'>

                      <div className='w-[100%] h-[41px] flex justify-between items-center border-b-[1px] border-black'>

                          <h1 className='text-[20px] font-medium text-[#525252]'>
                              Экосрез
                          </h1>

                          <button className='w-[18px] h-[18px] border-none outline-none bg-transparent'>
                              <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                              </svg>
                          </button>
                      </div>

                      <div className='w-[100%] h-[41px] flex justify-between items-center border-b-[1px] border-black'>

                          <h1 className='text-[20px] font-medium text-[#525252]'>
                              Листок жизни
                          </h1>

                          <button className='w-[18px] h-[18px] border-none outline-none bg-transparent'>
                              <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                              </svg>
                          </button>
                      </div>

                      <div className='w-[100%] h-[41px] flex justify-between items-center border-b-[1px] border-black'>

                          <h1 className='text-[20px] font-medium text-[#525252]'>
                              Eco Brend
                          </h1>

                          <button className='w-[18px] h-[18px] border-none outline-none bg-transparent'>
                              <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                              </svg>
                          </button>
                      </div>



                  </div>
              </section>
          </section>




           <section className='w-[80%] mt-[50px] m-auto flex items-center'>
                        
                        <div className='w-[50%] h-[380px]'>
                            <img  className="object-cover w-full h-[380px]" src={ph4} alt="" />
                        </div>
          
                        <div className='w-[50%] h-[380px] flex justify-center items-center bg-[#0092FF1A]'>
                            <div className='w-[80%] h-[240px] '>
                      <h1 className='text-[36px] tracking-[0.5px] font-semibold leading-[45px] '>Листок жизни</h1>
          
                                <p className='text-[19px] font-normal leading-[25px] tracking-[0.5px] pt-[20px] text-[#525252]'>Совершенствовать систему правления <br /> качеством для  расширения <br /> возможностей удовлетворения <br /> потребностей заинтересованных сторон</p>
          
                                <button className='w-[178px] mt-[30px] h-[40px] border-none bg-[#FFD700] text-[19px] font-normal'> 
                                    Узнать больше 
                                </button>
                            </div>
                        </div>
                    </section>
      </>


  )
}

export default Develop