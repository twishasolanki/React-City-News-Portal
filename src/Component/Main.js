import React from 'react'
import data from './Data.json';


export default function Header(props) {
    return (   
        <>
            {
                data.map((item) => (
                    <div className='ms-8'>
                        <h1 className="text-5xl font-extrabold dark:text-white text-center">  <p class="font-mono ...">{item.title}</p></h1><br />

                        <a href="#" className=" block  p-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" style={{ width: '100%' }}>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </a>
                        <br />
                        <div className="grid grid-cols-1 divide-y">
                            <div>  <div className="grid grid-cols-3 gap-5">

                                <div className="grid grid-cols-3 divide-x">
                                    <div>   <div>
                                        <p className="text-red-600 text-3x font-bold dark:text-white text-lg" >
                                            {item.heading}
                                        </p>
                                        <br />
                                        <p className='text-sm'>
                                            {item.information}
                                        </p>
                                    </div></div>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-center dark:text-white me-20"  > <p className="text-black-600"> {props.heading1}</p></h4>
                                    <br />

                                    <div className="grid grid-cols-2 gap-5 mt-3 text-sm" style={{ marginLeft: "-250px"}}>

                                        <div className="font-semibold">
                                            <h4 class=" mt-0 text-2xl font-medium leading-tight text-primary">
                                                {item.subheading}</h4>


                                            <div className="grid grid-cols-3 gap-1">

                                                <div>{item.information1}
                                                </div>
                                                <div>
                                                    <div className="box-content h-20 w-10 p-5 border-4" style={{ width: "130px", marginLeft: "30px", borderColor: "blue" }}>
                                                        <img className="h-auto max-w-xs" style={{ marginLeft: "-15PX", height: "110px", width: "160px", marginTop: "-15px" }} src={item.img1} alt="image description" />
                                                    </div>
                                                    <div className="container ml-10 w-32" >{item.information2}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="font-semibold">
                                            <h4 class="mb-2 mt-0 text-2xl font-medium leading-tight text-primary">{item.subheading1}</h4>
                                            <div className="grid grid-cols-4 gap-4">
                                                <div className="container" style={{ marginLeft: "10px", width: "120px" }}>
                                                    {item.information3}
                                                </div>
                                                <div className="container" style={{ marginLeft: "50px", width: "120px" }}>
                                                    {item.information4}
                                                </div>
                                                <div className="container" style={{ marginLeft: "150px", width: "110px", marginTop: "-50px" }}>
                                                    {item.information5}

                                                </div>

                                                <div style={{ marginLeft: "-100px", marginTop: '450px' }}>

                                                    <div className="box-content w-25 p-5 border-4" style={{ width: "180px", marginLeft: "300px", marginTop: "-510px", height: "105px", borderColor: 'blue' }}>
                                                        <img className="h-auto max-w-xs" style={{ marginLeft: "-15px", height: "135px", width: "210px", marginTop: "-15px" }} src={item.img2} alt="image description" />

                                                    </div>
                                                    <div className="grid grid-cols-2" style={{ marginLeft: "400px" }}>
                                                        <div style={{ marginLeft: "-100px", fontSize: '13px', width: '100px', marginTop: "10px" }}>
                                                            <p>
                                                                {item.info1}
                                                            </p>
                                                        </div>
                                                        <div className=''>
                                                            <p style={{ fontSize: '13px', marginLeft: '30px', width: '100px', marginTop: "10px" }}> {item.info2}</p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{}}><h3 className="text-3xl font-bold dark:text-white"> <p className="text-black-600">{item.heading2}</p></h3>
                                </div>
                            </div></div>
                            <div className="grid grid-cols-4 divide-x" style={{ marginTop: '-150px', fontSize: '13px' }}  >
                                <div>
                                    <h3 className="text-3x font-bold dark:text-white"> <p className="text-black-600">{item.heading3}<br />{item.heading03}</p></h3><br />
                                    <p style={{ width: '130px' }}>{item.information6}
                                    </p>
                                </div>
                                <div>
                                    <div className="grid grid-cols-4" style={{ marginLeft: '-180px' }}>
                                        <div> <h3 className="text-3x font-bold dark:text-white"> <p className="text-black-600">{item.heading4}<br /></p></h3><br />
                                            <p style={{ margin: "1px" }}>{item.information7}
                                            </p>

                                        </div>
                                        <div style={{ width: '390px', marginLeft: "10px" }}>  <p className="text-black-600 text-3xl font-bold dark:text-white">{item.heading5}</p><br />
                                            <div className="grid grid-cols-2" style={{ fontSize: '13px' }}>
                                                <div> <p>{item.info3}</p></div>
                                                <div>  <p>{item.info4}</p></div>
                                            </div>
                                        </div>
                                        <div style={{ marginLeft: '280px', width: '130px' }}><h3 className="text-3x font-bold dark:text-white"> <p className="text-black-600">{item.heading6} <br /></p></h3>
                                            <p style={{ margin: "5px" }}>{item.information8}</p>

                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: '380px', marginLeft: '230px' }}><h3 className="text-3xl font-bold dark:text-white" style={{ marginLeft: '-50px' }}> <p className="text-black-300">{item.heading7} <br />{item.heading8} <br />{item.heading9} <br /></p></h3><br />
                                    <div className="grid grid-cols-3 gap-1" style={{ fontSize: '13px', marginLeft: '-60px' }}>
                                        <div> <p> {item.info5}</p></div>
                                        <div> <p>{item.info6}</p></div>

                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-2">

                                    <div style={{ marginLeft: '160px', width: "400px" }}> <div><h3 className="text-3x font-bold dark:text-white"> <p className="text-black-300"> {item.heading10} <br />{item.heading11}<br /></p></h3><br />
                                        <div className="grid grid-cols-3 gap-1" style={{ fontSize: '13px' }}>
                                            <div> <p>{item.information9}</p></div>

                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 ">
                                    <div>  <div className="grid grid-cols-1 gap-2" style={{ fontSize: '13px', marginTop: "-90px", width: "200px" }}>

                                        <div><h3 className="text-3x font-bold dark:text-white" style={{ width: "700px" }}> <p className="text-black-300">{item.heading12}<br />{item.heading13}<br /></p></h3><br />
                                            <div className="grid grid-cols-3 gap-1" >
                                                <div> <p style={{ width: "180px" }}>{item.information10}                                               </p></div>
                                            </div>
                                        </div>


                                    </div>   </div>
                                    <div> <div className="grid grid-cols-1 gap-5">
                                        <div style={{ marginTop: "-100px", width: "510px", marginLeft: "90px" }}> <p className="text-black-600 text-3xl font-bold dark:text-white">{item.heading14}<br /></p><br />
                                            <div className="grid grid-cols-3 gap-1" >
                                                <div> <p>{item.info7} </p></div>
                                                <div>
                                                    <div className="box-content h-20 w-25 p-5 border-4" style={{ width: "150px", marginLeft: "33px", borderColor: "blue" }}>
                                                        <img className="h-auto max-w-xs" style={{ marginLeft: "-15PX", height: "110px", width: "180px", marginTop: "-15px" }} src={item.img3} alt="image description" />
                                                    </div>
                                                    <p style={{ marginLeft:"30px", width:"210px" }}>{item.info8}</p></div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div style={{ marginTop: "-90px", marginLeft: "450px", width: "150px" }}><h3 className="text-x font-bold dark:text-white"> <p className="text-black-600" style={{marginLeft:"10px"}}>{item.heading15}<br /></p></h3>
                                        <p style={{ margin: "10px" }}>{item.information11}</p>
                                    </div>
                                    <div> <div className="grid grid-cols-1 gap-5">
                                        <div style={{ marginTop: "-420px", width: "410px", marginLeft: "820px"}}> <p className="text-black-600 text-3xl font-bold dark:text-white">{item.heading16}<br /></p><br />
                                            <div className="grid grid-cols-3 gap-1" >
                                                <div> <p>{item.info9} </p></div>

                                                <div>
                                                    <div className="box-content h-32 w-8 p-5 border-4" style={{ width: "200px", marginLeft: "30px", borderColor: 'blue' }}>

                                                        <img className="h-auto max-w-xs" style={{ marginLeft: "-15PX", height: "157px", width: "230px", marginTop: "-15px" }} src={item.img4}  alt="image description" />
                                                    </div>


                                                    <p style={{ marginLeft: "30px", width: "250px" }}>{item.info10} </p></div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 gap-2">

                                            <div style={{ marginLeft: '10px', width: "400px", marginTop: "-320px" }}> <div><h3 className="text-3x font-bold dark:text-white"> <p className="text-black-300">{item.heading17}<br />{item.heading18}<br /></p></h3><br />
                                                <div className="grid grid-cols-3 gap-1" style={{ fontSize: '13px' }}>
                                                    <div> <p>{item.information12}  </p></div>


                                                </div>
                                            </div>
                                            </div>

                                        </div>

                                    </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                ))
            }
        </>
    )
}

// import React from 'react';
// import data from './Data.json';

// export default function Header(props) {
//     return (
//         <>
//             {data.map((item) => (
//                 <div className='ms-8' key={item.id}>
//                     <h1 className="text-5xl md:text-3xl font-extrabold dark:text-white text-center">
//                         <p className="font-mono ...">{item.title}</p>
//                     </h1>
//                     <br />

//                     <a href="#" className="block p-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" style={{ width: '100%' }}>
//                         <h5 className="mb-2 text-2xl md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//                         <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//                     </a>
//                     <br />

//                     <div className="grid grid-cols-1 divide-y">
//                         <div>
//                             <div className="grid grid-cols-3 gap-5">
//                                 <div className="grid grid-cols-3 divide-x">
//                                     <div>
//                                         <div>
//                                             <p className="text-red-600 text-3xl md:text-xl font-bold dark:text-white" style={{ fontSize: '20px' }}>
//                                                 {item.heading}
//                                             </p>
//                                             <br />
//                                             <p style={{ fontSize: '13px' }}>
//                                                 {item.information}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <h4 className="text-2xl md:text-xl font-bold dark:text-white" style={{ marginLeft: '-100px' }}  > <p className="text-black-600"> {props.heading1}</p></h4>
//                                     <br />

//                                     <div className="grid grid-cols-2 gap-5 mt-7" style={{ marginLeft: "-250px", fontSize: '13px' }}>

//                                         <div className="font-semibold">
//                                             <h4 className="mb-2 mt-0 text-2xl md:text-xl font-medium leading-tight text-primary">
//                                                 {item.subheading}
//                                             </h4>


//                                             <div className="grid grid-cols-3 gap-1">
//                                                 <div>{item.information1}</div>
//                                                 <div>
//                                                     <div className="box-content h-20 w-10 md:h-32 md:w-32 p-5 border-4" style={{ width: "130px", marginLeft: "30px", borderColor: "blue" }}>
//                                                         <img className="h-auto max-w-xs" style={{ marginLeft: "-15PX", height: "110px", width: "160px", marginTop: "-15px" }} src={item.img1} alt="image description" />
//                                                     </div>
//                                                     <div className="container" style={{ marginLeft: "50px" }}>{item.information2}</div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="font-semibold">
//                                             <h4 className="mb-2 mt-0 text-2xl md:text-xl font-medium leading-tight text-primary">{item.subheading1}</h4>
//                                             <div className="grid grid-cols-4 gap-4">
//                                                 <div className="container" style={{ marginLeft: "10px", width: "120px" }}>
//                                                     {item.information3}
//                                                 </div>
//                                                 <div className="container" style={{ marginLeft: "50px", width: "120px" }}>
//                                                     {item.information4}
//                                                 </div>
//                                                 <div className="container" style={{ marginLeft: "150px", width: "110px", marginTop: "-50px" }}>
//                                                     {item.information5}

//                                                 </div>

//                                                 <div style={{ marginLeft: "-100px", marginTop: '450px' }}>

//                                                     <div className="box-content w-25 p-5 border-4" style={{ width: "180px", marginLeft: "300px", marginTop: "-510px", height: "105px", borderColor: 'blue' }}>
//                                                         <img className="h-auto max-w-xs" style={{ marginLeft: "-15px", height: "135px", width: "210px", marginTop: "-15px" }} src={item.img2} alt="image description" />

//                                                     </div>
//                                                     <div className="grid grid-cols-2" style={{ marginLeft: "400px" }}>
//                                                         <div style={{ marginLeft: "-100px", fontSize: '13px', width: '100px', marginTop: "10px" }}>
//                                                             <p>
//                                                                 {item.info1}
//                                                             </p>
//                                                         </div>
//                                                         <div className=''>
//                                                             <p style={{ fontSize: '13px', marginLeft: '30px', width: '100px', marginTop: "10px" }}> {item.info2}</p>
//                                                         </div>

//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div style={{}}><h3 className="text-3xl md:text-2xl font-bold dark:text-white"> <p className="text-black-600">{item.heading2}</p></h3>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="grid grid-cols-4 divide-x" style={{ marginTop: '-150px', fontSize: '13px' }}  >
//                             <div>
//                                 <h3 className="text-3x font-bold dark:text-white"> <p className="text-black-600">{item.heading3}<br />{item.heading03}</p></h3><br />
//                                 <p style={{ width: '130px' }}>{item.information6}
//                                 </p>
//                             </div>
//                             <div>
//                                 <div className="grid grid-cols-4" style={{ marginLeft: '-180px' }}>
//                                     <div> <h3 className="text-3x font-bold dark:text-white"> <p className="text-black-600">{item.heading4}<br /></p></h3><br />
//                                         <p style={{ margin: "1px" }}>{item.information7}
//                                         </p>

//                                     </div>
//                                     <div style={{ width: '390px', marginLeft: "10px" }}>  <p className="text-black-600 text-3xl font-bold dark:text-white">{item.heading5}</p><br />
//                                         <div className="grid grid-cols-2" style={{ fontSize: '13px' }}>
//                                             <div> <p>{item.info3}</p></div>
//                                             <div>  <p>{item.info4}</p></div>
//                                         </div>
//                                     </div>
//                                     <div style={{ marginLeft: '280px', width: '130px' }}><h3 className="text-3x font-bold dark:text-white"> <p className="text-black-600">{item.heading6} <br /></p></h3>
//                                         <p style={{ margin: "5px" }}>{item.information8}</p>

//                                     </div>
//                                 </div>
//                             </div>
//                             <div style={{ width: '380px', marginLeft: '230px' }}><h3 className="text-3xl font-bold dark:text-white" style={{ marginLeft: '-50px' }}> <p className="text-black-300">{item.heading7} <br />{item.heading8} <br />{item.heading9} <br /></p></h3><br />
//                                 <div className="grid grid-cols-3 gap-1" style={{ fontSize: '13px', marginLeft: '-60px' }}>
//                                     <div> <p> {item.info5}</p></div>
//                                     <div> <p>{item.info6}</p></div>

//                                 </div>
//                             </div>
//                             <div className="grid grid-cols-1 gap-2">

//                                 <div style={{ marginLeft: '160px', width: "400px" }}> <div><h3 className="text-3x font-bold dark:text-white"> <p className="text-black-300"> {item.heading10} <br />{item.heading11}<br /></p></h3><br />
//                                     <div className="grid grid-cols-3 gap-1" style={{ fontSize: '13px' }}>
//                                         <div> <p>{item.information9}</p></div>

//                                     </div>
//                                 </div>
//                                 </div>
//                             </div>
//                             <div className="grid grid-cols-3 ">
//                                 <div>  <div className="grid grid-cols-1 gap-2" style={{ fontSize: '13px', marginTop: "-90px", width: "200px" }}>

//                                     <div><h3 className="text-3x font-bold dark:text-white" style={{ width: "700px" }}> <p className="text-black-300">{item.heading12}<br />{item.heading13}<br /></p></h3><br />
//                                         <div className="grid grid-cols-3 gap-1" >
//                                             <div> <p style={{ width: "180px" }}>{item.information10}                                               </p></div>
//                                         </div>
//                                     </div>


//                                 </div>   </div>
//                                 <div> <div className="grid grid-cols-1 gap-5">
//                                     <div style={{ marginTop: "-100px", width: "510px", marginLeft: "90px" }}> <p className="text-black-600 text-3xl font-bold dark:text-white">{item.heading14}<br /></p><br />
//                                         <div className="grid grid-cols-3 gap-1" >
//                                             <div> <p>{item.info7} </p></div>
//                                             <div>
//                                                 <div className="box-content h-20 w-20 md:h-32 md:w-32 p-2 md:p-5 border-4" style={{ width: "80px", marginLeft: "33px", borderColor: "blue" }}>
//                                                     <img className="h-auto max-w-xs" style={{ marginLeft: "-10px", height: "60px", width: "80px", marginTop: "-10px" }} src={item.img3} alt="image description" />
//                                                 </div>
//                                                 <p style={{ marginLeft:"30px", width:"210px" }}>{item.info8}</p></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 </div>
//                                 <div style={{ marginTop: "-90px", marginLeft: "450px", width: "150px" }}><h3 className="text-x font-bold dark:text-white"> <p className="text-black-600" style={{marginLeft:"10px"}}>{item.heading15}<br /></p></h3>
//                                     <p style={{ margin: "10px" }}>{item.information11}</p>
//                                 </div>
//                                 <div> <div className="grid grid-cols-1 gap-5">
//                                     <div style={{ marginTop: "-420px", width: "410px", marginLeft: "900px"}}> <p className="text-black-600 text-3xl font-bold dark:text-white">{item.heading16}<br /></p><br />
//                                         <div className="grid grid-cols-3 gap-1" >
//                                             <div> <p>{item.info9} </p></div>

//                                             <div>
//                                                 <div className="box-content h-32 w-8 p-5 border-4" style={{ width: "200px", marginLeft: "30px", borderColor: 'blue' }}>

//                                                     <img className="h-auto max-w-xs" style={{ marginLeft: "-10PX", height: "157px", width: "230px", marginTop: "-15px" }} src={item.img4}  alt="image description" />
//                                                 </div>


//                                                 <p style={{ marginLeft: "30px", width: "250px" }}>{item.info10} </p></div>
//                                         </div>
//                                     </div>
//                                     <div className="grid grid-cols-1 gap-2">

//                                         <div style={{ marginLeft: '10px', width: "400px", marginTop: "-320px" }}> <div><h3 className="text-3x font-bold dark:text-white"> <p className="text-black-300">{item.heading17}<br />{item.heading18}<br /></p></h3><br />
//                                             <div className="grid grid-cols-3 gap-1" style={{ fontSize: '13px' }}>
//                                                 <div> <p>{item.information12}  </p></div>


//                                             </div>
//                                         </div>
//                                         </div>

//                                     </div>

//                                 </div>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>

//             ))}
//         </>
//     );
// }
