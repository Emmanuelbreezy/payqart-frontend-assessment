import Image from 'next/image';
import Link from 'next/link';
import companyLogo from '../../public/assets/image/pay_qart2.png';


export default function Sidebar() {
    return (
             <div className="col-12 col-lg-3 pq-sideb--wrap">
                  <div className="pq-sideb--overall">
                 
                    <div className="container">
                        <div className="py-4 positon-relative">
                            <div className="pq--back-link ">
                                <Link href="/">
                                <a className="text">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left">
                                        <line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>
                                    </svg>
                                    <span>Back To Store</span>
                                </a>
                                </Link>
                            </div>
                            <div className="pq--image-wrapper">
                                <Image src={companyLogo} height="" />
                            </div>
                            <div className="pq--listing-ul">
                                <ul className="list-style-none">
                                <li>
                                    <span className="pq-round--shape"></span>
                                    <span className="pq--listing-span">Get pre-approved instanly.</span>
                                    </li>
                                <li>
                                    <span className="pq-round--shape"></span>
                                    <span className="pq--listing-span">Spread payment for up to six months.</span>
                                    </li>
                                <li>
                                    <span className="pq-round--shape"></span>
                                    <span className="pq--listing-span">Provide some basic information to get started.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
    )
}
