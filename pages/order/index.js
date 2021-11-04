import Head from 'next/head';
import {useState,useEffect} from 'react';
import OrderWrapper from '../../containers/OrderWrapper/OrderWrapper';
import Loader from '../../components/Loader/Loader';


export default function Orders() {
    const [loading,setLoading] = useState(true);

  useEffect(() => {
    if(loading){
      setTimeout(function(){
        setLoading(false);
      },1500)
    }
   
  },[loading,setLoading]);
    return (
        <>
            <Head>
                <title>Orders - PayQart</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            {loading ? <Loader /> : <OrderWrapper />}
       </>
    )
}
