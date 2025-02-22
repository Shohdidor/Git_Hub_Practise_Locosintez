import React from 'react'

function Home() {
  return (
    <>
    <div className='bg-[url(src/assets/unsplash_JF56wwlr4Gw.svg)] h-screen dark:opacity-20'>
    </div>
    <div className='px-[10%] pb-[10%]'>
      
    <div className='mt-[10%]'>
      <h1 className='text-[230%] mb-[1%] font-bold'>
      О компании
      </h1>
      <p className='w-[45%] mb-[2%] dark:text-gray-500'>
      На российском рынке Lakra Sintez является ведущим производителем декоративных красок и покрытий. По оценке аналитиков рынка входит в ТОП-3 компаний-производителей отрасли. Успешно развивает новые направления  деятельности: клеевые материалы и дисперсии
      </p>
      <button className='bg-[#C4C4C4] px-[1%] text-[#000000c3] font-medium text-[80%] py-[0.5%] dark:bg-gray-400 dark:text-black'>
      Узнать больше >
      </button>
    </div>

    <div className='mt-[10%] gap-[5%] flex items-center'>
      <div>
        <h1 className='font-bold text-[300%]'>
        25 лет
        </h1>
        <p className='w-[60%] text-gray-700 dark:text-gray-500'>
        С 1996 г. мы производим и продаём широкий спектр лакокрассочнх материалов
        </p>
      </div>
      <div>
        <h1 className='font-bold text-[300%]'>
        11.000 точек
        </h1>
        <p className='w-[80%] text-gray-700 dark:text-gray-500'>
        Наша продукция представлена свыше 11 тыс. торговых точек по всей России
        </p>
      </div>
      <div>
        <h1 className='font-bold text-[300%]'>
        40.000 литров
        </h1>
        <p className='w-[60%] text-gray-700 dark:text-gray-500'>
        За 25 лет работы реализовали более 1 млн. литров разнообразных материалов для отделки и ремонта
        </p>
      </div>
    </div>

    
    </div>

    <div className='bg-[url(src/assets/unsplash_Uf7orCeRVsA.svg)] h-[77vh] w-auto dark:opacity-20 posit'>
    </div>

    <div className='px-[10%]'>
      <p className='w-[30%] mt-[7%] mb-[7%] ml-auto text-gray-600 dark:text-gray-400'>
      На российском рынке Lakra Sintez является ведущим производителем декоративных красок и покрытий. По оценке аналитиков рынка входит в ТОП-3 компаний-производителей отрасли. Успешно развивает новые направления  деятельности: клеевые материалы и дисперсии
      </p>


      <h1 className='text-[230%] mb-[1%] font-bold'>
      Бизнес - подразделения
      </h1>

      <div className='pb-[10%]'>
        <div className='flex pr-[10%] items-center'>
          <form className='mr-auto'> 
          <input type="text" className='block bg-none dark:bg-transparent border-b-[1px] border-gray-600 text-gray-600 py-[0.5%] w-[180%] text-[115%]' placeholder='Декоративные ЛКМ покрытия'/>
          <input type="text" className='block bg-none dark:bg-transparent border-b-[1px] border-gray-600 text-gray-600 py-[0.5%] w-[180%] text-[115%]' placeholder='Клеевые материалы'/>
          <input type="text" className='block bg-none dark:bg-transparent border-b-[1px] border-gray-600 text-gray-600 py-[0.5%] w-[180%] text-[115%]' placeholder='Дисперсии'/>
          </form>
          <img src="src/assets/img.svg" alt="bucket" />
        </div>

        <div className='flex justify-between'>
        <img src="src/assets/img.svg" className='ml-[10%]' alt="bucket" />
        <div className='mt-[10%] w-[45%] ml-auto'>
          <h1 className='text-[230%] mb-[1%] font-bold'>
          О компании
          </h1>
        <p className='w-[75%] mb-[2%] dark:text-gray-500'>
          На российском рынке Lakra Sintez является ведущим производителем декоративных красок и покрытий. По оценке аналитиков рынка входит в ТОП-3 компаний-производителей отрасли. Успешно развивает новые направления  деятельности: клеевые материалы и дисперсии
          </p>
        <button className='bg-[#C4C4C4] px-[1%] text-[#000000c3] font-medium text-[80%] py-[0.5%] dark:bg-gray-400 dark:text-black'>
          Узнать больше >
        </button>
    </div>

        </div>
      </div>

      <h1 className='text-[230%] mb-[1%] font-bold'>
        География присутствия
      </h1>
      <p className='w-[45%] mb-[2%] dark:text-gray-500'>
      Производственные площадки, распределительные центры расположены в основных регионах присутствия. География продаж – вся Россия.
      </p>

      <img src="src/assets/map.svg" alt="map" className='m-auto py-[10%]' />

    </div>

</>
  )
}

export default Home