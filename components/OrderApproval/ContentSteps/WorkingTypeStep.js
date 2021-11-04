import Image from 'next/image';
import NumberFormat from 'react-number-format';
import DatePicker from 'react-datepicker';
import Button from '../../Button/Button';
import paidEmployee from '../../../public/assets/image/employee.png';
import selfEmployee from '../../../public/assets/image/self_employee.png';
import corporation from '../../../public/assets/image/corporationpng.png';
import { forwardRef } from 'react';
import "react-datepicker/dist/react-datepicker.css";


export default function WorkingType({employmentType,setEmploymentType,salaryEarn,
                                     setSalaryEarn,
                                     salaryDate,
                                     setSalaryDate,
                                     existingLoan,
                                     setExistingLoan,
                                     handleNext,
                                     loading}) {

    const CustomDateInput = forwardRef(({value, onClick},ref) => (
        <div onClick={onClick}>
            <input className="form-control shadow-sm py-2 " ref={ref} 
                    value={value} type="button"  
            />
            <div className="position-absolute top-50  translate-middle-y " style={{left:"2%"}}><svg  style={{width:"20px", height:"18px",cursor:"pointer"}}  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></div>
            <div className="position-absolute top-50 start-50  translate-middle "><span style={{cursor:"pointer"}}>{salaryDate === 0 && "Select pay date"}</span></div>
            <div className="position-absolute top-50  translate-middle-y " style={{right:"2%"}}> <svg  style={{float:"right",cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
       </div>
    ));

    CustomDateInput.displayName = "CustomDateInput";

    return (
        <div className="pq-multibar--content">
          <div>
                          <h4 className="display-4">What Do You Do?</h4>
                          <div className="pqcard-list">
                              <div className="row">
                                  <div className="col-6 col-lg-4 pq--card-approval">
                                      <a onClick={() => setEmploymentType(1)} className="card shadow-none">
                                          <div className="card-body">
                                             <div className="pq-card--topcard">
                                                 <Image src={paidEmployee} height="" />
                                             </div>
                                             <div className="text-center">
                                                 <span className={`display--span ${+ employmentType === 1 ? "display-active" : ""}`}>Paid Employment</span>
                                             </div>
                                          </div>
                                      </a>
                                  </div>
                                  <div className="col-6 col-lg-4  pq--card-approval">
                                  <a onClick={() => setEmploymentType(2)} className="card shadow-none">
                                          <div className="card-body">
                                               <div className="pq-card--topcard">
                                                  <Image src={selfEmployee} height="" />
                                                 </div>
                                              <div className="text-center">
                                                 <span  className={`display--span ${+ employmentType === 2 ? "display-active" : ""}`}>
                                                 Self Employment / Freelance
                                                 </span>
                                             </div>
                                          </div>
                                      </a>
                                  </div>
                                  <div className="col-6 col-lg-4  pq--card-approval">
                                  <a  onClick={() => setEmploymentType(3)} className="card shadow-none">
                                          <div className="card-body">
                                              <div className="pq-card--topcard">
                                                  <Image src={corporation} height="" />
                                                 </div>
                                              <div className="text-center">
                                                 <span  className={`display--span ${+ employmentType === 3 ? "display-active" : ""}`}>
                                                 Corporate Organisation
                                                 </span>
                                             </div>
                                          </div>
                                      </a>
                                  </div>
                              </div>
                          </div>
                        </div>
                        
                        {/* ONLY PAID EMPLOYEE */}
                        {employmentType === 1 && (
                            <div className="mt-2 pq-paid--employment">
                                <div className="container px-3">
                                    <div className="form-group mb-4">
                                        <label className="display--label">
                                            How much do you get paid monthly?</label>
                                        <div className="input-group mt-2">
                                            <span className="input-group-text">
                                                <svg style={{width:"18px",height:"25px", fill:"white"}} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                                                    viewBox="0 0 496.262 496.262" >
                                                <g>
                                                    <path d="M477.832,274.28h-67.743v-65.106h67.743c10.179,0,18.43-8.243,18.43-18.424c0-10.182-8.251-18.43-18.43-18.43h-67.743
                                                        V81.982c0-13.187-2.606-22.866-7.743-28.762c-4.882-5.609-11.301-8.219-20.19-8.219c-8.482,0-14.659,2.592-19.447,8.166
                                                        c-5.077,5.902-7.654,15.599-7.654,28.821v90.343H227.627l-54.181-81.988c-4.637-7.317-8.997-14.171-13.231-20.75
                                                        c-3.812-5.925-7.53-10.749-11.042-14.351c-3.109-3.189-6.652-5.657-10.796-7.554c-3.91-1.785-8.881-2.681-14.762-2.681
                                                        c-7.501,0-14.31,2.055-20.83,6.277c-6.452,4.176-10.912,9.339-13.636,15.785c-2.391,6.126-3.656,15.513-3.656,27.63v77.626h-67.07
                                                        C8.246,172.326,0,180.574,0,190.755c0,10.181,8.246,18.424,18.424,18.424h67.07v65.113h-67.07C8.246,274.292,0,282.538,0,292.722
                                                        C0,302.9,8.246,311.14,18.424,311.14h67.07v103.143c0,12.797,2.689,22.378,8.015,28.466c5.065,5.805,11.487,8.5,20.208,8.5
                                                        c8.414,0,14.786-2.707,20.07-8.523c5.411-5.958,8.148-15.533,8.148-28.442V311.14h115.308l62.399,95.683
                                                        c4.339,6.325,8.819,12.709,13.287,18.969c4.031,5.621,8.429,10.574,13.069,14.711c4.179,3.742,8.659,6.484,13.316,8.157
                                                        c4.794,1.726,10.397,2.601,16.615,2.601c16.875,0,34.158-5.166,34.158-43.479V311.14h67.743c10.179,0,18.43-8.252,18.43-18.43
                                                        C496.262,282.532,488.011,274.28,477.832,274.28z M355.054,209.173v65.106h-60.041l-43.021-65.106H355.054z M141.936,134.364
                                                        l24.76,37.956h-24.76V134.364z M141.936,274.28v-65.106h48.802l42.466,65.106H141.936z M355.054,365.153l-35.683-54.013h35.683
                                                        V365.153z"/>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                                </svg>
                                            </span>
                                            <NumberFormat
                                                disabled={loading}
                                                value={salaryEarn}
                                                thousandSeparator={true}
                                                className={`form-control border-none shadow-sm ${salaryEarn < 4000 && 'is-invalid'}`}
                                                inputMode="numeric"
                                                onChange={(e) => setSalaryEarn(() => {
                                                    const val = e.target.value;
                                                    const clearComma = val.replace(/,/g,'');
                                                    const res = clearComma.length == "" ? 0 : clearComma;
                                                    return res;
                                                })}

                                            />
                                        </div>
                                        <div className="invalid-feedback">
                                         
                                        </div>
                                    </div>
                                    <div className="form-group mb-3 ">
                                        <label className="display--label">When is your next salary date?</label>
                                        <div className="position-relative mt-2 pq-form--select">
                                            <DatePicker
                                                 disabled={loading}
                                                 dateFormat="dd/MM/yyyy"
                                                 selected={salaryDate}
                                                 onChange={(date) => {
                                                     setSalaryDate(date);
                                                 }}
                                                 customInput={<CustomDateInput />}
                                            />
                                           
                                        </div>
                                    </div>
                                    <div className="form-group mb-2">
                                        <label className="display--label">Do you have any existing loan(s)?</label>
                                        <div className="d-flex align-items-center shadow-sm mt-2 py-2 pq--check-sel">
                                            
                                            <div className="col-6 pq-col-center border-right">
                                               <div className="form-check ">
                                                   <input type="radio" name="existloan" disabled={loading} value={existingLoan} 
                                                   id="existingloan" className="form-check-input" 
                                                    checked={existingLoan=== 1 && true}
                                                    onChange={() => setExistingLoan(1)}
                                                   />
                                                   <label htmlFor="existingloan">Yes</label>
                                                   
                                               </div>
                                            </div>
                                            <div  className="col-6 pq-col-center">
                                                <div className="form-check">
                                                    <input type="radio"  name="existloan" value={existingLoan} 
                                                    id="noexistingloan" className="form-check-input"  disabled={loading}
                                                    checked={existingLoan === 0 && true}
                                                    onChange={() => setExistingLoan(0)}
                                                    />
                                                    <label htmlFor="noexistingloan">No</label>
                                                
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div className="mt-4 pq-btn--container">
                                      <Button action={handleNext} loading={loading}  width={"50%"} text={'Continue'} size={'large'} color={'primary'} type={'outline'}/>
                                    </div>
                                </div>
                            </div>


                        )}
                         {/* ONLY SELF EMPLOYEE */}
                         {employmentType === 2 && (
                             <div className="d-flex justify-content-center pt-5 m-5">
                                 <div>Self Employment Section</div>
                              </div>
                         )}  

                          {/* ONLY CORPORATE ORGANIZATION */}
                          {employmentType === 3 && (
                               <div className="d-flex justify-content-center pt-5 m-5">
                                 <div>Corporate Organisation</div>
                              </div>
                         )}    
        </div>
    )
}
