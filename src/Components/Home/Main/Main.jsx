import React from 'react'
import { NavLink } from 'react-router-dom'

const Main = () => {
  return (
    <div className='bg-[#2d303f] px-5 pt-5'>
      <main className=''>
        <h1 className='text-[#af7b67] border-b border-[#af7b67] pb-3 mb-3'>
          <span className='font-bold'>Xamsachilik</span> – Sharq xalqlari adabiyotida dostonnavislik shakllaridan biri; „Xamsa“ yozish bilan bogʻliq adabiy anʼana. Nizomiy Ganjaviy asos solgan.
        </h1>
        <h1 className='text-[#af7b67]'>Ijodkorlar Nizomiy 𝒫𝒶𝓃𝒿 𝑔𝒶𝓃𝒿 ini („Besh xazina“) tashkil etuvchi 𝑀𝒶𝒽𝓏𝒶𝓃 𝓊𝓁-𝒶𝓈𝓇,  𝒳𝓊𝓈𝓇𝒶𝓋 𝓋𝒶 𝒮𝒽𝒾𝓇𝒾𝓃, 𝐿𝒶𝓎𝓁𝒾 𝓋𝒶 𝑀𝒶𝒿𝓃𝓊𝓃 , 𝐻𝒶𝒻𝓉 𝓅𝒶𝓎𝓀𝒶𝓇, 𝒮𝒶𝒹𝒹𝒾 𝐼𝓈𝓀𝒶𝓃𝒹𝒶𝓇𝒾𝓎 dostonlarining mavzuyi, syujet va kompozitsiyasi, qahramonlari, vazni, joylashish tartibini saqlagan holda mustaqil asar yaratganlar. Bu badiiy ijodda katta mahorat maktabi sanalgan.</h1>

        <div className='mt-7'>
          <div className='flex justify-between items-center'>
            <img src="https://kitobxon.com/img_knigi/1990.jpg" alt="" className='w-[40vw]'/>
            <div className='border border-[#af8b67]  h-[20vh]'></div>
            <div className='flex flex-col gap-3'>
              <h1 className='text-[#af7b67] text-xl'>𝔐𝔞𝔥𝔷𝔞𝔫 𝔲𝔩-𝔞𝔰𝔯𝔬𝔯</h1>
              <NavLink to='/Mahzan_ul_asror' className='border border-[#af7b67] py-3 px-2 rounded-lg text-[#fffffa88] shadow-lg shadow-gray-400 text-center'>Ma'lumot o'qing</NavLink>
            </div>

          </div>
            <div className='flex justify-between items-center'>
              <div className='flex flex-col gap-3'>
                <h1 className='text-[#af7b67] text-md'>𝓧𝓾𝓼𝓻𝓪𝓿 𝓿𝓪 𝓢𝓱𝓲𝓻𝓲𝓷</h1>
                <NavLink to='/Xusrav_va_Shirin' className='border border-[#af7b67] py-3 px-2 rounded-lg text-[#fffffa88] shadow-lg shadow-gray-400 text-center'>Ma'lumot o'qing</NavLink>
            </div>
              <div className='border border-[#af8b67]  h-[20vh]'></div>
              <img src="https://edu.rmmk.uz/uploads/library/KK/KK/Kd/1613565108.jpg" alt="" className='w-[40vw]'/>
        </div>

        <div className='flex justify-between items-center'>
            <img src="https://kitobxon.com/img_knigi/6814.jpg" alt="" className='w-[40vw]'/>
            <div className='border border-[#af8b67]  h-[20vh]'></div>
            <div className='flex flex-col gap-3'>
              <h1 className='text-[#af7b67] text-xl'>𝕃𝕒𝕪𝕝𝕚 𝕧𝕒 𝕄𝕒𝕛𝕟𝕦𝕟</h1>
              <NavLink to='/Layli_va_Majnun' className='border border-[#af7b67] py-3 px-2 rounded-lg text-[#fffffa88] shadow-lg shadow-gray-400 text-center'>Ma'lumot o'qing</NavLink>
            </div>


          </div>
            <div className='flex justify-between items-center'>
              <div className='flex flex-col gap-3'>
                <h1 className='text-[#af7b67] text-lg'>Ⓗⓐⓕⓣ ⓟⓐⓨⓚⓐⓡ </h1>
                <NavLink to='/Haft_paykar' className='border border-[#af7b67] py-3 px-2 rounded-lg text-[#fffffa88] shadow-lg shadow-gray-400 text-center'>Ma'lumot o'qing</NavLink>
            </div>
              <div className='border border-[#af8b67]  h-[20vh]'></div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjY9kV_HDv9WEInuoytC_dRSStebdLy2wSA&s" alt="" className='w-[35vw]'/>
        </div>
        <div className='flex justify-between items-center pb-5'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGHBN1bYnh1ftl5CTNdL1_anJnjgtr7vDF4g&s" alt="" className='w-[40vw]'/>
            <div className='border border-[#af8b67]  h-[20vh]'></div>
            <div className='flex flex-col gap-3'>
              <h1 className='text-[#af7b67] text-xl'>S̷a̷d̷d̷i̷ ̷I̷s̷k̷a̷n̷d̷a̷r̷i̷y̷</h1>
              <NavLink to='/Iskandarnoma' className='border border-[#af7b67] py-3 px-2 rounded-lg text-[#fffffa88] shadow-lg shadow-gray-400 text-center'>Ma'lumot o'qing</NavLink>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}

export default Main
