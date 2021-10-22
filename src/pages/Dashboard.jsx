import React, {useEffect} from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'

const chartOptions = {
    series: [{
        name: 'Empty Bin',
        data: [40 , 70 , 20 , 90 , 36 , 80 , 30 , 91 , 60]
    }, {
        name: 'Half Bin',
        data: [20, 50, 20, 60, 50, 46, 30, 38, 41, 50]
    }, {
        name: 'Full Bin',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const topBins = {
    head: [
        'ID',
        'Location',
        'Tracking ID'
    ],
    body: [
        {
            "id": "WM0016",
            "location": "1nd Floor, 2rd Cb, Sliit",
            "trackingid": "#OD1712"
        },
        {
            "id": "WM0016",
            "location": "1nd Floor, 2rd Cb, Sliit",
            "trackingid": "#OD1712"
        },
        {
            "id": "WM0016",
            "location": "1nd Floor, 2rd Cb, Sliit",
            "trackingid": "#OD1712"
        }
    ]
}

const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.location}</td>
        <td>{item.trackingid}</td>
    </tr>
)

const latestOrders = {
    header: [
        "Tracking ID",
        "Name",
        "Location",
        "percentage",
        "status"
    ],
    body: [
        {
            id: "#OD1713",
            user: "Shasha",
            location: "2nd floor, 3rd cb, sliit",
            percentage: "0%",
            status: "Empty"
        },
        {
            id: "#OD1712",
            user: "Vitty",
            location: "1nd floor, 2rd cb, sliit",
            percentage: "48%",
            status: "Half"
        },
        {
            id: "#OD1713",
            user: "Alexa",
            location: "1nd floor, 4rd cb, sliit",
            percentage: "89%",
            status: "Full"
        }
    ]
}

const orderStatus = {
    "shipping": "primary",
    "Half": "warning",
    "Empty": "success",
    "Full": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
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

const Dashboard = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-12">
                    <div className="card">
                        <div className="card__header">
                            <h3>Bin Details</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={topBins.head}
                                renderHead={(item, index) => renderCusomerHead(item, index)}
                                bodyData={topBins.body}
                                renderBody={(item, index) => renderCusomerBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="card">
                        <div className="card__header">
                            <h3>Recent Updates </h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
