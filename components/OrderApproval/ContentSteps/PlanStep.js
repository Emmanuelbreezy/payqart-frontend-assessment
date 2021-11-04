import { useState,useEffect } from "react";
import Button from '../../Button/Button';
import NumberFormat from 'react-number-format';

export default function PlansStep({ shoppingCredit,
                                    downPayment,
                                    changDownPay,
                                    setChangeDownPay,
                                    monthInstall,
                                    currentTenure,
                                    setCurrentTenure,
                                    handleLoanCalculation
}) {

   const [loading, setLoading] = useState(null);

   

  const updateDownPay =() =>{
     if(changDownPay < downPayment) return alert("Your new downpayment can't be less than old downpayment");
    return alert(`You've updated your downpayment to ${changDownPay}`)
  }


  const handleTenureFunc = (numberoftenure) =>{
      setCurrentTenure(numberoftenure);
      setLoading(true);
        const res = handleLoanCalculation(numberoftenure)
                        .then(status => {
                            console.log( status,'plans status');
                            if(status !== 'success') return alert('Could not process information')
                             setLoading(false);
                            
                        })
                        .catch(e => {
                            setLoading(true);
                            alert('Error Ocurred,While updating breakdown..Check connection')
                        });
        

  }
    return (
        <div id="" className="pq-multibar-plan-content">
        <div>
             <h4 className="display-4">Choose Your Plan</h4>
             <div className="pqcard-list mt-4">
                 <div className="row">
                  <div className="col-4 col-lg-2 pq--plans-card ">
                  <a className="card" onClick={() => handleTenureFunc(1)}>
                       <div className="card-body">
                           <div className="pq-card-bar pq--bar1"></div>
                               <div className="pq-card-content ">
                                   <div className={`${currentTenure === 1 ? "card--active-plans ":"default"}`}>
                                           <span className={`display--span  ${currentTenure === 1 ? "--plan-txtcolor":""}`}>Aggressive</span>
                                           <h4 className={`display-h4   ${currentTenure === 1 ? "--plan-txtcolor":""}`}>1</h4>
                                           <span className={`display--span  ${currentTenure === 1 ? "--plan-txtcolor":""}`}>Month</span>
                                       </div>
                                   </div>
                       </div>
                   </a>
                  </div>
                  <div className="col-4 col-lg-2 pq--plans-card">
                   <a className="card" onClick={() => handleTenureFunc(2)}>
                           <div className="card-body">
                               <div className="pq-card-bar pq--bar2"></div>
                               <div className="pq-card-content">
                                   <div className={`${currentTenure === 2 ? "card--active-plans ":"default"}`}>
                                           <span className={`display--span  ${currentTenure === 2 ? "--plan-txtcolor":""}`}>Stretching</span>
                                           <h4 className={`display-h4   ${currentTenure === 2 ? "--plan-txtcolor":""}`}>2</h4>
                                           <span className={`display--span  ${currentTenure === 2 ? "--plan-txtcolor":""}`}>Months</span>
                                       </div>
                               </div>
                           </div>
                       </a>
                  </div>
                  <div className="col-4 col-lg-2 pq--plans-card">
                   <a className="card" onClick={() => handleTenureFunc(3)}>
                           <div className="card-body">
                              <div className="pq-card-bar pq--bar3"></div>
                               <div className="pq-card-content">
                                   <div className={`${currentTenure === 3 ? "card--active-plans ":"default"}`}>
                                           <span className={`display--span  ${currentTenure === 3 ? "--plan-txtcolor":""}`}>Focused</span>
                                           <h4 className={`display-h4   ${currentTenure === 3 ? "--plan-txtcolor":""}`}>3</h4>
                                           <span className={`display--span  ${currentTenure === 3 ? "--plan-txtcolor":""}`}>Months</span>
                                       </div>
                               </div>
                           </div>
                       </a>
                  </div>
                  <div className="col-4 col-lg-2 pq--plans-card">
                       <a className="card" onClick={() => handleTenureFunc(4)}>
                               <div className="card-body">
                                   <div className="pq-card-bar pq--bar4"></div>
                                   <div className="pq-card-content">
                                      
                                       <div className={`${currentTenure === 4 ? "card--active-plans ":"default"}`}>
                                           <span className={`display--span  ${currentTenure === 4 ? "--plan-txtcolor":""}`}>Casual</span>
                                           <h4 className={`display-h4   ${currentTenure === 4 ? "--plan-txtcolor":""}`}>4</h4>
                                           <span className={`display--span  ${currentTenure === 4 ? "--plan-txtcolor":""}`}>Months</span>
                                       </div>
                                   </div>
                               </div>
                           </a>
                  </div>
                  <div className="col-4 col-lg-2 pq--plans-card">
                       <a className="card" onClick={() => handleTenureFunc(5)}>
                               <div className="card-body">
                                   <div className="pq-card-bar pq--bar5"></div>
                                   <div className="pq-card-content">
                                       <div className={`${currentTenure === 5 ? "card--active-plans ":"default"}`}>
                                           <span className={`display--span  ${currentTenure === 5 ? "--plan-txtcolor":""}`}>Mild</span>
                                           <h4 className={`display-h4   ${currentTenure === 5 ? "--plan-txtcolor":""}`}>5</h4>
                                           <span className={`display--span  ${currentTenure === 5 ? "--plan-txtcolor":""}`}>Months</span>
                                       </div>
                                   </div>
                               </div>
                           </a>
                  </div>
                  <div className="col-4 col-lg-2 pq--plans-card">
                       <a className="card"  onClick={() => handleTenureFunc(6)}>
                               <div className="card-body">
                                   <div className="pq-card-bar pq--bar6"></div>
                                   <div className="pq-card-content">
                                       <div className={`${currentTenure === 6 ? "card--active-plans ":"default"}`}>
                                           <span className={`display--span  ${currentTenure === 6 ? "--plan-txtcolor":""}`}>Gentle</span>
                                           <h4 className={`display-h4   ${currentTenure === 6 ? "--plan-txtcolor":""}`}>6</h4>
                                           <span className={`display--span  ${currentTenure === 6 ? "--plan-txtcolor":""}`}>Months</span>
                                       </div>
                                   </div>
                               </div>
                           </a>
                  </div>
               </div>
           </div>
           </div>

           {loading && (<div className="d-flex justify-content-center pt-5 m-5">
               <div className="spinner-border text-primary" role="status">
               </div>
           </div>)}
          
          {/* PAYMENT BREAKDOWN */}
          {loading === false ? (<div className="pq-payment--bd">
              <div className="mt-5">
                 <h4 className="display-4">Payment Breakdown</h4>
                 <div className="pq-bd--wrapper mt-3">
                     <div className="row">
                         <div className="col-12">
                             <div className="card">
                                 <div className="card-body">
                                     <div className="row mb-0 pb-0">
                                         <div className="col-12 col-lg-7 pq-bd--leftside">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="col-7 pq--bd-borderR pq--bd-ul1 ">
                                                    <ul>
                                                        <li><span>Shopping Credit</span></li>
                                                        <li><span>Down Payment</span></li>
                                                        <li><span>Month Installment</span></li>
                                                        <li><span>Tenure</span></li>
                                                    </ul>
                                                </div>
                                                <div className="col-5 pr-0 pq--bd-ul_2">
                                                    <ul>
                                                        <li className="d-flex align-items-center">
                                                        <svg style={{width:"15px",height:"18px",marginRight:"0.1rem"}} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
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
                                                                       <span>
                                                                           <NumberFormat
                                                                             value={shoppingCredit}
                                                                             displayType="text"
                                                                              thousandSeparator={true}
                                                                           />
                                                                       </span>
                                                       </li>
                                                       <li className="d-flex align-items-center">
                                                       <svg style={{width:"15px",height:"18px",marginRight:"0.1rem"}} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
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
                                                                       <span>
                                                                          <NumberFormat
                                                                             value={downPayment}
                                                                             displayType="text"
                                                                              thousandSeparator={true}
                                                                           />
                                                                       </span>
                                                       </li>
                                                       <li className="d-flex align-items-center">
                                                               <svg style={{width:"15px",height:"18px",marginRight:"0.1rem"}} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
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
                                                              <span>
                                                                  <NumberFormat
                                                                       value={monthInstall}
                                                                       displayType="text"
                                                                       thousandSeparator={true}
                                                                   />
                                                              </span>
                                                       </li>
                                                       <li className="d-flex align-items-center">
                                                            <span>{currentTenure}</span>
                                                            <span style={{marginLeft:"0.2rem"}}>month{currentTenure>1&& "s"}</span>
                                                       </li>
                                                    </ul>
                                                </div>
                                            </div>
                                         </div>
                                         <div className="col-12 col-lg-5 pl-0 pq-bd-rightside">
                                             <div className="card">
                                                 <div className="card-body">
                                                     <div className="pq-container text-center">
                                                         <div>
                                                             <h5>Customize</h5>
                                                               <h5>Down Payment</h5>
                                                         </div>
                                                         <div className="form-group mb-4">
                                                              <div className="input-group ">
                                                                   <span className="input-group-text">
                                                                       <svg style={{width:"20px",height:"28px"}} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
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
                                                                      value={changDownPay}
                                                                      thousandSeparator={true}
                                                                      className="form-control border-none shadow-sm"
                                                                      inputMode="numeric"
                                                                      onChange={(e) => setChangeDownPay(() => {
                                                                          const val = e.target.value;
                                                                          const clearComma = val.replace(/,/g,'');
                                                                          const res = clearComma.length == "" ? 0 : clearComma;
                                                                          return res;
                                                                      })}

                                                                   />
                                                               </div>
                                                         </div>
                                                          <div className="w-100">
                                                               <Button width={"auto"} action={updateDownPay} text={'Update Breakdown'} size={'sm'} color={'light'} type={'outline'}/>
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

              <div className="mt-4 pq-btn--container">
                         <Button action={() => alert('You have reach the end')} width={"50%"} text={'Continue'} size={'large'} color={'primary'} type={'outline'}/>
                       </div>
             </div>
           </div>
          ): null}
        </div>
    )
}
