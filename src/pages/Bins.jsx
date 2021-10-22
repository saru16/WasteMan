import React from 'react'

import Table from '../components/table/Table'

import customerList from '../assets/JsonData/customers-list.json'
import Badge from '../components/badge/Badge'

const binTableHead = [
    
    'Tracking ID',
    'Name',
    'Location',
    'Percentage',
    'Status'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const orderStatus = {
    "shipping": "primary",
    "Half": "warning",
    "Empty": "success",
    "Full": "danger"
}



const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.percentage}</td>
        <td>{item.location}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)


const Bins = () => {
    return (
        <div>
            <h2 className="page-header">
                bins
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={binTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={customerList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bins
