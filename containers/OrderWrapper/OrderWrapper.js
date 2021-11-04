import { useState} from "react";
import Layout from "../../hoc/Layout/Layout";
import OrderApproval from "../../components/OrderApproval/OrderApproval";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import removeWhiteSpace from '../../helper/util';


export default function OrderWrapper() {

    const [totalCartVal, setTotalCartal] = useState(150000);
    const [employmentType, setEmploymentType] = useState(1);
    const [salaryEarn, setSalaryEarn] = useState(0);
    const [salaryDate, setSalaryDate] = useState(0);
    const [existingLoan, setExistingLoan] = useState('');
    
    const [shoppingCredit, setShoppingCredit] = useState(0)
    const [downPayment, setDownPayment] = useState(0)
    const [monthInstall, setMonthInstall] = useState(0)
    const [currentTenure, setCurrentTenure] = useState(0);




    const handleLoanCalculation = (numberoftenure=0) =>{
        if(salaryDate === 0 || employmentType === 0 || salaryEarn === 0 || 
            existingLoan === '') return alert('All fields are required');
        if(numberoftenure !== 0) {

            const salaryDay = salaryDate.getDate()
            const url = 'https://payqart.compound.ng/api/application/calculate';
            const dataBody = {
                "requestedAmount": parseInt(totalCartVal),
                "tenor":numberoftenure,
                "employmentType": employmentType,
                "userMonthlyPay": parseInt(salaryEarn),
                "averageMonthlyRevenue":null,
                "averageMonthlyExpense": null,
                "currentMonthlyLoan": existingLoan,
                "userSalaryDate": salaryDay
            }

            console.log(dataBody,'BODY RAW');
            console.log('--------');

            const result = fetch(url,{
                            method:'POST',
                            headers:{
                                'Content-Type':'application/json'
                            },
                            body: JSON.stringify(dataBody),
                        }).then(response => {
                            return response.json()
                        }).then(data => {
                            var res = removeWhiteSpace(data);
                            console.log(res,'RESPONSE DATA');
                            if(res){
                                setShoppingCredit(res.Approved_Shopping_Credit);
                                setDownPayment(res.Down_Payment);
                                setMonthInstall(res.Monthly_Repayment);
                            }
                            return data.status;
                        });
            return result;

        }

    }
    
    return (
        <Layout>
            <OrderSummary 
               totalCartVal={totalCartVal}
            />
            <OrderApproval 
                employmentType={employmentType}
                setEmploymentType={setEmploymentType}
                salaryEarn={salaryEarn}
                setSalaryEarn={setSalaryEarn}
                salaryDate={salaryDate}
                setSalaryDate={setSalaryDate}
                existingLoan={existingLoan}
                setExistingLoan={setExistingLoan}
                shoppingCredit={shoppingCredit}
                downPayment={downPayment}
                monthInstall={monthInstall}
                currentTenure={currentTenure}
                setCurrentTenure={setCurrentTenure}

                handleLoanCalculation={handleLoanCalculation}


            />
       </Layout>
       
    )
}
