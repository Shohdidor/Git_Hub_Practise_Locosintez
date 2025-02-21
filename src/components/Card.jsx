import React from 'react'

import ph1 from '../assets/ph1.svg'
import ph2 from '../assets/ph2.svg'
import ph3 from '../assets/ph3.svg'
const Card = () => {
  return (
      <>
          
          <section className='w-[80%] mt-[50px] m-auto flex items-center'>
              
              <div className='w-[50%] h-[400px]'>
                  <img  className="object-cover w-full h-[400px]" src={ph1} alt="" />
              </div>

              <div className='w-[50%] h-[400px] flex justify-center items-center bg-[#0092FF1A]'>
                  <div className='w-[80%] h-[300px] '>
                      <h1 className='text-[36px] tracking-[0.5px] font-semibold leading-[45px] '>Политика системы менеджмента качества</h1>

                      <p className='text-[19px] font-normal leading-[25px] tracking-[0.5px] pt-[20px] text-[#525252]'>Совершенствовать систему правления <br /> качеством для  расширения <br /> возможностей удовлетворения <br /> потребностей заинтересованных сторон</p>

                      <button className='w-[178px] mt-[30px] h-[40px] border-none bg-[#FFD700] text-[19px] font-normal'> 
                          Узнать больше >
                      </button>
                  </div>
              </div>
          </section>

          <section className='w-[80%] mt-[30px] m-auto flex items-center'>

              <div className='w-[50%] h-[400px] flex justify-center items-center bg-[#0092FF1A]'>
                  <div className='w-[80%] h-[300px] '>
                      <h1 className='text-[36px] tracking-[0.5px] font-semibold leading-[45px] '>Экологическая политика</h1>

                      <p className='text-[19px] font-normal leading-[25px] tracking-[0.5px] pt-[20px] text-[#525252]'>Производить высококачественную лакокрасочную продукцию, уменьшая негативные воздействия <br />
                          на окружающую среду.</p>

                      <button className='w-[178px] mt-[30px] h-[40px] border-none bg-[#FFD700] text-[19px] font-normal'> 
                          Узнать больше >
                      </button>
                  </div>
              </div>


              <div className='w-[50%] h-[400px]'>
                  <img className="object-cover w-full h-[400px]" src={ph2} alt="" />
              </div>

          </section>

          <section className='w-[80%] mt-[30px] m-auto flex items-center'>

              <div className='w-[50%] h-[400px]'>
                  <img className="object-cover w-full h-[400px]" src={ph3} alt="" />
              </div>

              <div className='w-[50%] h-[400px] flex justify-center items-center bg-[#0092FF1A]'>
                  <div className='w-[80%] h-[300px]  '>
                      <h1 className='text-[36px] tracking-[0.5px] font-semibold leading-[45px] '>Бережливое производство</h1>

                      <p className='text-[19px] font-normal leading-[25px] tracking-[0.5px] pt-[20px] text-[#525252]'>высококачественные лакокрасочные материалы, которые комплексно решают задачи любой сложности по ремонту и отделке.</p>

                      <button className='w-[178px] mt-[30px] h-[40px] border-none bg-[#FFD700] text-[19px] font-normal'> 
                          Узнать больше >
                      </button>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Card