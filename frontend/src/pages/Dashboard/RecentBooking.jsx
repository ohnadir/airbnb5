import { Table } from 'antd';

const RecentBooking = () => {
    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id'
        },
        {
          title: 'ORDER TIME',
          dataIndex: 'orderTime',
          key: 'order time',
        },
        {
          title: 'METHOD',
          dataIndex: 'method',
          key: 'method',
        },
        {
          title: 'STATUS',
          key: 'status',
          dataIndex: 'status'
        },
        {
          title: 'TOTAL',
          key: 'total',
          dataIndex: 'total'
        }
    ];
      const data = [
        {
          key: '1',
          id: '11223',
          orderTime: "May 24, 2023",
          method: 'Cash',
          status: 'Pending',
          total: '70.00'
        },
        {
          key: '2',
          id: '11224',
          orderTime: "May 24, 2023",
          method: 'Cash',
          status: 'Pending',
          total: '70.00'
        },
        {
          key: '3',
          id: '11224',
          orderTime: "May 24, 2023",
          method: 'Cash',
          status: 'Pending',
          total: '70.00'
        },
    ];
    return (
        <Table style={{borderRadius : "6px", backgroundColor: "white"}} className='border rounded-[6px]' pagination={false} columns={columns} dataSource={data}/>
    )
}

export default RecentBooking