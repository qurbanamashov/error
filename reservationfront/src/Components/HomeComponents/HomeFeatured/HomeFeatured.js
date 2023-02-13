import React from 'react'
import useFetch from '../../../Usefetch/UseFetch'
import "./HomeFeatured.scss"
function HomeFeatured() {
  const {data, loading, error} = useFetch("/hotels/countByCity?cities=berlin,madrid,london")
  console.log(data);
  return (
    <section className='HomeFeatured'>
        <div className='HomeFeatured_width'>
            <div className='HomeFeatured_imgbox'>
                <img src="https://www.arabianbusiness.com/cloud/2023/01/04/dubai-real-estate.jpg" alt="dubai"/>
                <div className='HomeFeatured_imgbox_text'>
                  <h2>Dubai</h2>
                  <h3>2000 Properties</h3>
                </div>
            </div>
            <div className='HomeFeatured_imgbox'>
                <img src="https://cdn.britannica.com/21/195821-050-7860049D/Baku-blend-Azerbaijan-skyscrapers-buildings.jpg" alt="Azerbaijan"/>
                <div className='HomeFeatured_imgbox_text'>
                  <h2>Azerbaijan-Baku</h2>
                  <h3>500 Properties</h3>
                </div>
            </div>
            <div className='HomeFeatured_imgbox'>
                <img src="https://lp-cms-production.imgix.net/2021-06/GettyRF_543346423.jpg?fit=crop&q=60&auto=format&w=1446&h=667&dpr=1.25" alt="dubai"/>
                <div className='HomeFeatured_imgbox_text'>
                  <h2>Italy Venice</h2>
                  <h3>1000 Properties</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeFeatured