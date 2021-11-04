import { useState,useEffect } from "react";
import Stepper from 'react-stepper-horizontal';
import PlansStep from "./ContentSteps/PlanStep";
import WorkingType from "./ContentSteps/WorkingTypeStep";

export default function OrderApproval({employmentType,
                                        setEmploymentType,
                                        salaryEarn,setSalaryEarn,
                                        salaryDate,setSalaryDate,
                                        existingLoan,setExistingLoan,
                                        shoppingCredit,
                                        downPayment,
                                        monthInstall,
                                        currentTenure,
                                         setCurrentTenure,
                                         handleLoanCalculation
                                        }) {
    const [loading,setLoading] = useState(false);
    const [changDownPay, setChangeDownPay] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);
    const [steps, setSteps] = useState([
        {
            title:'',
            href:"#step1",
            onClick:(e) =>{
                e.preventDefault();
                setCurrentStep(0);
            }
        },
        {
            title:'',
            href:"#step2",
            onClick:(e) =>{
                e.preventDefault();
                setCurrentStep(1);
            }
        },
        {
            title:'',
            href:"#step3",
            onClick:(e) =>{
                e.preventDefault();
                setCurrentStep(2);
            }
        },
        {
            title:'',
            href:"#step4",
            onClick:(e) =>{
                e.preventDefault();
                setCurrentStep(3);
            }
        }]);


        useEffect(() => {
            setChangeDownPay(downPayment)
        }, [downPayment])



        //STEPPER NEXT HANDLER
        const handleNext = () => {
            if(salaryEarn < 4000 || salaryEarn === 0) return alert('Must be 5000 above salary earn')
            if(salaryDate === 0) return alert('Must select salary date ')
            if(existingLoan === '') return alert('Select whether you have any existing loan(s)?');
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setCurrentStep((prevState) => prevState + 1);
            }, 1000);

          
        }

        //STEPPER BACK HANDLER
        const handleBack = () => {
            setCurrentStep((prevState) => prevState > 0 && prevState - 1);
        }

       
    return (
        <div className="col-12 col-lg-6 pq-order--approval">
           <div className="pq--overflow-scroll">
            <div className="container ">
                        <div className="pq-mul--top position-relative">
                            <Stepper steps={steps} activeStep={ currentStep } 
                                     defaultBorderWidth={10}
                                     activeColor={'#ff005e'} 
                                     completeColor={'#ff005e'}
                                     completeBarColor={'#ff005e'}
                            />
                            {currentStep > 0 && (<div className="pq--steps--back">
                                <a className="text cursor-pointer" onClick={handleBack}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left">
                                                <line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>
                                            </svg>
                                            <span>Back</span>
                                        </a></div>
                            )}
                        </div>

                    <div  className="pq-multibar--wrap">
                        {/* FIRST STEP ON ACTIVE */}
                        {currentStep === 0 && (<WorkingType 
                                                   employmentType={employmentType} 
                                                   setEmploymentType={setEmploymentType}
                                                   salaryEarn={salaryEarn}
                                                   setSalaryEarn={setSalaryEarn}
                                                   salaryDate={salaryDate}
                                                   setSalaryDate={setSalaryDate}
                                                   existingLoan={existingLoan}
                                                   setExistingLoan={setExistingLoan}
                                                   handleNext={handleNext}
                                                   loading={loading}
                                                />
                                                )}

                {/* SENCOND STEP ON ACTIVE */}
                     {currentStep === 1 && (<PlansStep  
                                               shoppingCredit={shoppingCredit}
                                               setCurrentTenure={setCurrentTenure}
                                               downPayment={downPayment}
                                               changDownPay={changDownPay}
                                               setChangeDownPay={setChangeDownPay}
                                               monthInstall={monthInstall}
                                               currentTenure={currentTenure}
                                               setCurrentTenure={setCurrentTenure}
                                               handleNext={handleNext}

                                               handleLoanCalculation={handleLoanCalculation}
                                            />
                     )}
                 </div>
           </div>
        </div>
    </div>
    )
}
