import  './Invoice.scss'
import { Table } from 'antd';
import logo from "../../assets/logo.png"
import ReactToPrint from "react-to-print";
import { useRef } from 'react'


const Invoice = () => {
    const componentRef = useRef(null);
    const data = [
        {
          key: '1',
          name: 'John Brown',
          phone: "01756953836",
          address: 'New York No. 1 Lake Park',
          date: '1 jun - 5 jun',
          place: 'Ifel Tower,French',
          price: 50,
          serviceCharge: 10
        },
        {
          key: '2',
          name: 'John Brown',
          phone: "01756953836",
          address: 'New York No. 1 Lake Park',
          date: '1 jun - 5 jun',
          place: 'Ifel Tower,French',
          price: 40,
          serviceCharge: 10
        },
        {
          key: '3',
          name: 'John Brown',
          phone: "01756953836",
          address: 'New York No. 1 Lake Park',
          date: '1 jun - 5 jun',
          place: 'Ifel Tower,French',
          price: 30,
          serviceCharge: 10
        },
        {
          key: '4',
          name: 'John Brown',
          phone: "01756953836",
          address: 'New York No. 1 Lake Park',
          date: '1 jun - 5 jun',
          place: 'Ifel Tower,French',
          price: 20,
          serviceCharge: 10
        },
    ];
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name'
        },
        {
          title: 'Phone',
          dataIndex: 'phone',
        },
        {
          title: 'Address',
          dataIndex: 'address',
        },
        {
            title: 'Date',
            dataIndex: 'date',
        },
        {
            title: 'Place',
            dataIndex: 'place',
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
        {
            title: 'Service Charge',
            dataIndex: 'serviceCharge',
        },
      ];
      
    return (
        <div className='bg-gray-50 h-full'>
                <div className='invoice-container'>
                    <div className='invoice-title'>
                        <h1>Thank you <span className="font-bold text-[#ff385c]">Nadir Hossain</span>, Your Booking have been received !</h1>
                    </div>
                    <div className='invoice-body' ref={componentRef} >
                        <div className=' bg-[#eef2ff] p-[30px]'>
                            <div className='flex flex-col md:flex-row gap-5 md:gap-0 md:items-center justify-between border-b-[1px] border-white pb-[15px]'>
                                <div>
                                    <h1 className='text-[20px] font-[700] m-0'>INVOICE</h1>
                                    <p className='m-0 text-[15px]'>Status : <span className='text-orange-500'>Pending</span></p>
                                </div>
                                <div className='brand-logo'>
                                    <img className='w-[100px] mb-[7px]' src={logo} alt="" />
                                    <p>San Francisco, California, United States</p>
                                </div>
                            </div>
                            <div className=' pt-[15px] flex flex-col md:flex-row gap-4 md:gap-0 justify-between'>
                                <div>
                                    <h1 className='m-0 font-[700]'>DATE</h1>
                                    <p className='m-0 text-[14px] font-[600]'>10-06-223</p>
                                </div>
                                <div>
                                    <h1 className='m-0 font-[700]'>INVOICE NO.</h1>
                                    <p className='m-0 text-[14px] font-[600]'>#12458</p>
                                </div>
                                <div>
                                    <h1 className='m-0 font-[700]'>INVOICE NO.</h1>
                                    <p className='m-0 text-[14px] font-[600]'>Nadir Hossain</p>
                                    <p className='m-0 text-[14px] font-[600]'>nadirhossain336@gmail.com</p>
                                    <p className='m-0 text-[14px] font-[600]'>01756953936</p>
                                    <p className='m-0 text-[14px] font-[600]'>khilgaon, Dhaka</p>
                                </div>
                            </div>
                        </div>
                        <div className=' bg-white p-[30px] ' style={{ overflowX: 'auto' }}>
                            <Table className='border' columns={columns} pagination={false} dataSource={data} />
                        </div>
                        <div className='flex flex-col md:flex-row md:items-center gap-4 md:gap-4 justify-between p-[30px] bg-[#ecfdf5]'>
                            <div>
                                <h1 className='m-0 font-[700]'>PAYMENT METHOD</h1>
                                <p className='font-[600] m-0 text-[14px]'>Card</p>
                            </div>
                            <div>
                                <h1 className='m-0 font-[700]'>SERVICE CHARGE</h1>
                                <p className='font-[600] m-0 text-[14px]'>$10</p>
                            </div>
                            <div>
                                <h1 className='m-0 font-[700]'>TAX CHARGE</h1>
                                <p className='font-[600] m-0 text-[14px]'>$5</p>
                            </div>
                            <div>
                                <h1 className='m-0 font-[700]'>TOTAL AMOUNT</h1>
                                <p className='text-red-500 text-[18px] font-[700] m-0'>$5</p>
                            </div>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button >Continue</button>
                        <ReactToPrint trigger={() => (<button >Print / Download</button>)}content={() => componentRef.current}/>
                    </div>
                </div>
        </div>
    )
}

export default Invoice