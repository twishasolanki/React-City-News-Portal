import React from 'react'
import zodiacdata from './Zodiacdata.json';

export default function Zodiac() {

  return (
    <>
      <a href="#" class="block max-w-xlg p-4 bg-white border border-gray-400 rounded-lg shadow hover:bg-gray-120 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-900 text-center" style={{ marginLeft: "30px", width: '95%' }}>   
        <h3 class="text-3xl font-bold dark:text-white">Zodiac</h3><br />

        <div className="flex flex-wrap justify-center -mx-4">
  {
  zodiacdata.map((item, index) => (
    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
      <div className="max-w-xs mx-auto bg-white border border-gray-400 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-900 text-center">
        <h3 className="text-3xl font-bold dark:text-white">{item.title}</h3>
        <img src={item.img} className="w-48 mx-auto mt-4" alt={item.name} />
        <p className="mt-4">{item.name} <br />{item.letters1} <br />{item.letters2} <br /> {item.letters3}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4" onClick={() => document.getElementById(`my_modal_${index}`).showModal()}>Read More</button>
        <dialog id={`my_modal_${index}`} className="modal">
          <div className="modal-box text-center" style={{ width: "900px", height: "280px" }}>
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="py-4">{item.dec1} <br />
              {item.dec2} <br />{item.dec3} <br />{item.dec4}<br />{item.dec5}</p>
            <div className="modal-action">
              <form method="dialog">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  ))}
</div>
</a>

        </>
  )
}