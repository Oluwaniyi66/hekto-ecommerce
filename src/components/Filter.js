import React from 'react'
import "./Filter.css";

function Filter() {
    return (
        <div className='out'>
                <div className=' container'>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='ecom'>Ecommerce Accessories and Fashion Item</p>
                            <p className='ecop'>About 9,620 results (0.62 seconds)</p>
                        </div>
                        <div className='col-6 '>
                            <div className='row'>
                                <div className='col-4'>
                                    <div className='row'>
                                        <div className='col-6'>

                                            <label htmlFor="exampleFormControlInput1" className="form-label child">Per page</label>
                                        </div>
                                        <div className='col-6 '>

                                            <input type="email" className="form-control inp" id="exampleFormControlInput1" />
                                        </div>

                                    </div>



                                </div>
                                <div className='col-8   '>
                                    <div className='row'>
                                        <div className='col-8'>
                                            <div className='row'>
                                                <div className='col-4'>
                                                    <p className='child'>sort by:</p>
                                                </div>

                                                <div className='col-8'>
                                                    <select className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                                                        {/* <option selected>Open this select menu</option> */}
                                                        <option value="1" className='match'>Best Match</option>
                                                        <option value="2" className='match'>Most relevant</option>
                                                        <option value="3" className='match'>Recommended</option>
                                                    </select>
                                                </div>

                                            </div>



                                        </div>
                                        <div className=' col-4'>
                                            <div className='row'>
                                                <div className='col-6'>
                                                    <p className='child'>view:</p>

                                                </div>
                                                <div className='col-6'>
                                                    <div className='row'>

                                                        <div className='rowA col-6'>

                                                            <i class="fas fa-th-large"></i>
                                                        </div>
                                                        <div className='rowA col-6'>

                                                            <i class="fas fa-grip-horizontal"></i>
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






                </div>

            </div>
    )
}

export default Filter
