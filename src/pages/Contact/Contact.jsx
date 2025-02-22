import React from 'react'



// Photo
import play from "../../assets/play.svg"

// MUI
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

function Contact() {
  return (
    <>
      <section className="w-[100%] h-screen mt-[30px] bg-no-repeat bg-cover bg-[url(src/assets/fon2.svg)] flex justify-center items-center">
        
        <img src={play} alt="" />
      </section>
      

      <section className='w-[80%] m-auto mt-[10%]'>
        <h1 className='text-[45px] font-bold'>Ответы на часто задаваемые вопросы</h1>


        <div className='w-[100%] h-[88px] mt-[50px] flex justify-between items-center border-b-[1px] border-[#ccc]'>

          <h1 className='w-[50%] text-[22px] font-normal text-[#252525]'>Меня интересует вакансия в компании Лакра. <br />
            Как я могу подать заявку?</h1>

          <button className='w-[24px] h-[24px] border-none outline-none bg-transparent'>
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
            </svg>
          </button>
        </div>

        <div className='w-[100%] h-[88px] flex justify-between items-center border-b-[1px] border-[#ccc]'>

          <h1 className='w-[50%] text-[22px] font-normal text-[#252525]'>Куда мне обратиться, если я не доволен продуктом?</h1>

          <button className='w-[24px] h-[24px] border-none outline-none bg-transparent'>
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
            </svg>
          </button>
        </div>


        <div className='w-[100%] h-[88px] flex justify-between items-center border-b-[1px] border-[#ccc]'>

          <h1 className='w-[50%] text-[22px] font-normal text-[#252525]'>Я заинтересован в сотрудничестве с компанией Лакра.</h1>

          <button className='w-[24px] h-[24px] border-none outline-none bg-transparent'>
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
            </svg>
          </button>
        </div>


        <div className='w-[100%] h-[88px] flex justify-between items-center border-b-[1px] border-[#ccc]'>

          <h1 className='w-[50%] text-[22px] font-normal text-[#252525]'>Как я могу получить информацию о бренде Лакра?</h1>

          <button className='w-[24px] h-[24px] border-none outline-none bg-transparent'>
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
            </svg>
          </button>
        </div>


        <div className='w-[100%] h-[88px] flex justify-between items-center border-b-[1px] border-[#ccc]'>

          <h1 className='w-[50%] text-[22px] font-normal text-[#252525]'>Куда мне обратиться, если я не доволен продуктом?</h1>

          <button className='w-[24px] h-[24px] border-none outline-none bg-transparent'>
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
            </svg>
          </button>
        </div>


        <div className='w-[100%] h-[88px] flex justify-between items-center border-b-[1px] border-[#ccc]'>

          <h1 className='w-[50%] text-[22px] font-normal text-[#252525]'>Как я могу стать дистрибьютором Лакра?</h1>

          <button className='w-[24px] h-[24px] border-none outline-none bg-transparent'>
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
            </svg>
          </button>
        </div>




      </section>


      <section className='w-[80%] m-auto mt-[100px]'>
        <h1 className='text-[45px] font-bold'>У вас остались вопросы?</h1>
        <p className='text-[18px] font-normal text-[#252525] pt-[20px]'>Заполните небольшую анкету и мы свяжемся с вами</p>

        <section className='w-[100%] flex justify-between '>

          <div className='w-[45%] '>

            <TextField fullWidth sx={{ marginTop: 3 }} id="standard-basic" label="Представьтесь, пожалуйста" variant="standard" />
            <TextField fullWidth sx={{ marginTop: 2 }} id="standard-basic" label="Электронная почта" variant="standard" />
            <TextField fullWidth sx={{ marginTop: 2 }} id="standard-basic" label="Номер телефона" variant="standard" />
            <TextField fullWidth sx={{ marginTop: 2 }} id="standard-basic" label="Страна пребывания" variant="standard" />

            <div className='w-[100%] flex items-center mt-[30px]'>
              <Checkbox />

              
              <p className='text-[14px] font-normal text-[#252525] pl-[5px] '>Вы соглашаетесь с Правовыми положениями и Политикой конфиденциальности</p>
            </div>
          </div>


          <div className='w-[45%] '>

            <TextField fullWidth sx={{ marginTop: 3 }} id="standard-basic" label="Выберите тему" variant="standard" />



            <TextField
              id="outlined-multiline-static"
              label="Ваш вопрос"
              fullWidth
              sx={{marginTop: 7}}
              multiline
              rows={4.5}
              defaultValue="Default Value" />
            
            <button className='w-[250px] h-[50px] bg-[#252525] mt-[30px] shadow-md text-[20px] font-noraml text-white'>
              Отправить
            </button>
            
          </div>
        </section>

      </section>

      
      <section className='w-[80%] m-auto mt-[100px]'>
        <h1 className='text-[45px] font-bold '>Свяжитесь с нашей командой</h1>

        <p className='text-[20px] font-normal pt-[15px] text-[#525252] w-[50%]'>Если вы не можете найти необходимую информацию, или у вас возникли вопросы, свяжитесь с нами.</p>
      </section>

      <section className='w-[85%] flex justify-between mt-[50px] border border-[red] '>

        <div className='w-[58%] '> 

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.047780910228!2d38.19211399519626!3d55.80209971576874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ad15d1f464ee7%3A0xaa3b8f0a903741a0!2z0YPQuy4g0JTQvtGA0L7QttC90LDRjywgNSwg0KHRgtCw0YDQsNGPINCa0YPQv9Cw0LLQvdCwLCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LsuLCDQoNC-0YHRgdC40Y8sIDE0MjQ1MA!5e0!3m2!1sru!2s!4v1740216935403!5m2!1sru!2s" width="100%" height="750" className='border border-[#ccc]'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>


        <div className='w-[38%] border border-[red]'>

          <h1 className='text-[20px] font-bold text-[#252525]'>М.О. г. Ногинск, г. Старая Купавна, ул. Дорожная, д.5</h1>

          <p className='text-[15px] font-normal pt-[15px]'>Тел.: +7 (495) 995-78-58
            <br />
            Факс: +7 (495) 702-96-49 (50)</p>
          
          <p className='text-[15px] font-normal pt-[10px]'>info@lakra.ru</p>

          <button className="flex items-center gap-2 text-gray-700 border-t pt-2 hover:text-gray-900">
            {/* <LocationOnIcon /> */}
            <span>Показать на карте</span>
          </button>
        </div>

      </section>



    </>
  )
}

export default Contact