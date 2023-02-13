import { format } from 'date-fns';
import React, { useState } from 'react'
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router-dom';
import "./ListSearch.scss"
function ListSearch() {
    const location = useLocation();
    const [destinetion, setDestinetion] = useState(location.state.destenition)
    const [date, setDate] = useState(location.state.date)
    const [openDate, setOpenDate] = useState(false)
    const [option, setOption] = useState(location.state.option)
    return (
        <section className='listSearch'>
            <div className='listSearch_width'>
                <div className='listSearch_Filter'>
                    <div className='listSearch_Filter_box'>
                        <h3>Search</h3>
                        <div className='listSearch_item'>
                            <label>Destenition</label>
                            <input placeholder={destinetion} type={"text"} />
                        </div>
                        <div className='listSearch_item'>
                            <label>Date</label>
                            <span onClick={()=>setOpenDate(!openDate)}>
                                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                            </span>
                           { openDate && (<DateRange onChange={(item) => setDate(item.selection)} 
                            minDate = {new Date()}
                            ranges={date}/>)}
                        </div>
                        <div className='listSearch_item'>
                            <label>Option</label>
                            <div className='listSearch_item_span'>
                                <span>Min price <small>per night</small></span>
                                <input type={"number"}/>
                            </div>
                            <div className='listSearch_item_span'>
                                <span>Max price <small>per night</small></span>
                                <input  type={"number"}/>
                            </div>
                            <div className='listSearch_item_span'>
                                <span>Adult price</span>
                                <input min={1} type={"number"} placeholder={option.adults}/>
                            </div>
                            <div className='listSearch_item_span'>
                                <span>Children</span>
                                <input min={0} type={"number"} placeholder={option.children}/>
                            </div>
                            <div className='listSearch_item_span'>
                                <span>Room</span>
                                <input min={1} type={"number"} placeholder={option.room}/>
                            </div>
                        </div>
                        <button>search</button>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default ListSearch