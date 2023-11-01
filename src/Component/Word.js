import React from 'react'
import Worddata from './Worddata.json';

export default function Word() {
  return (
 <>
  <>
      <a href="#" class="block max-w-xlg p-4 bg-white border border-gray-400 rounded-lg shadow hover:bg-gray-120 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-900 text-center" style={{ marginLeft: "175px", width: '72%' }}>    <div>
        <h3 class="text-3xl font-bold dark:text-white">Word</h3></div></a>

      {
        Worddata.map((item) => (

          <>
 <a href="#" class="block p-6 bg-white border border-gray-400 rounded-lg shadow hover:bg-gray-120 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-900 mt-5" style={{ marginLeft: "175px", width: '72%' }}>
              <div class="grid grid-cols-3 gap-4 mt-5 px-8 p-5">
                <div>
                  <div className="col-span-2 ... p-5" style={{ width: "600px", marginTop: "-40px" }}><h4 className="text-2xl font-bold dark:text-white text-red-700">{item.subtitle}</h4>
                    <br />{item.description} <div className="..." style={{ marginLeft: "610px", width: "200px", marginTop: "-110px" }}>

                      <iframe
                        width="190"
                        height="150"
                      style={{marginTop:"-150px"}}
                        src={item.video}
                        frameborder="0"
                        allowfullscreen
                      ></iframe> 


                      <div>

                        <div style={{ marginLeft: "-610px", marginTop: "30px", color: "gray" }}> {item.name}</div>
                        <a href={item.linkfb}>
                          <img src={item.imgfb} width={'30px'} style={{ marginTop: "-25px" }} />
                        </a>
                        <a href={item.linktw}>
                          <img src={item.imgtw} width={'30px'} style={{ marginLeft: "85px", marginTop: "-25px" }} />
                        </a>
                        <a href={item.copylink}>
                          <img src={item.imgcopy} width={'30px'} style={{ marginLeft: "160px", marginTop: "-27px" }} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </>
        ))
      }


    </>
 </>
    )
}