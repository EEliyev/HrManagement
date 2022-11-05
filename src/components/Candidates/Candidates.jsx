import React from 'react'
import './Candidates.css'
import { ReactComponent as FilterSvg } from '../../svg/message/filter.svg'
import { DataGrid } from '@mui/x-data-grid'
import UserPng from "../../img/user2.png";
import { Box } from '@mui/system'
import { Rating } from '@mui/material'

function Candidates() {
    

    const rows = [{ id: 1, name: "Cameron William", rate: 2, status: "New Applied", date: new Date(), owner: "Me" },
    { id: 2, name: "Cameron William", rate: 4, status: "New Applied", date: new Date(), owner: "Me" },
    { id: 3, name: "Cameron William", rate: 5, status: "Test", date: new Date(), owner: "Me" },
    { id: 4, name: "Cameron William", rate: 3, status: "Shortlis", date: new Date(), owner: "Me" },
    { id: 5, name: "Cameron William", rate: 4.5, status: "Interview", date: new Date(), owner: "Me" },
    { id: 6, name: "Cameron William", rate: 2, status: "Shortlist", date: new Date(), owner: "Me" },
    { id: 7, name: "Cameron William", rate: 4, status: "New Applied", date: new Date(), owner: "Me" },
    { id: 8, name: "Cameron William", rate: 0, status: "Test", date: new Date(), owner: "Me" },
    { id: 9, name: "Cameron William", rate: 2, status: "New Applied", date: new Date(), owner: "Me" },
    { id: 10, name: "Cameron William", rate: 4, status: "Hired", date: new Date(), owner: "Me" },
    { id: 11, name: "Cameron William", rate: 2, status: "Interview", date: new Date(), owner: "Me" },]
    const columns = [{ field: "id", hide: true },
    { field: "name", headerName: "Candidates Name", flex: 1 },
    { field: "rate", headerName: "Rating", flex: 1 },
    { field: "status", headerName: "Stages", flex: 1 },
    { field: "date", headerName: "Applied Date", flex: 1 },
    { field: "owner", headerName: "Owner", flex: 1 }]


    function FixStatusColor(a){
        switch (a) {
            case "New Applied":
                return "#FFA600"
               
            case "Shortlist":
                return "#56CCF2"
            case "Interview":
                return "#FF5531"
            case "Test":
                return "#377DFF"
            case "Hired":
                return "#39CB8A"
            default:
                return "#FFA600"
               
        }
    }
    return (
        <div className='candidates'>
            <div className="container-title">Candidates
                <div className="candidates-filter"><FilterSvg />Filter</div>
            </div>
            <div className="candidates-body">
                <div className="candidates-body-head">Total Candidates
                    <div className="candidates-body-head-count">10</div>
                </div>
                <div className="candidates-table">
                    <Box
                        sx={{
                            height: 500,
                            width: "100%"
                        }}
                    >
                        <DataGrid
                            rows={rows}
                            columns={[{ field: "id", hide: true },
                            { field: "name", headerName: "Candidates Name", flex: 1 ,
                        renderCell:(x)=>{
                            return <div className='candidates-table-logo-head'>
                                    <div className='candidates-table-logo'>
                                    <img src={UserPng} alt="" />
                                    </div>
                                {x.formattedValue}</div>
                        }},
                            {
                                field: "rate", headerName: "Rating", flex: 1,
                                renderCell: (x) => {
                                    return <div className='candidates-table-rate'>
                                        <Rating style={{ fontSize: "1rem" }} name="simple-controlled" defaultValue={1} value={x.formattedValue} max={1} />
                                        {x.formattedValue.toFixed(1)}
                                    </div>
                                }
                            },
                            {
                                field: "status", headerName: "Stages", flex: 1,
                                renderCell: (x) => {
                                    return <div style={{ width: "80px" }}>{x.formattedValue}
                                        <div id='5' style={{height:0,
                                            borderBottom: `5px dashed ${FixStatusColor(x.formattedValue)}`
                                        }}></div>
                                    </div>
                                }
                            },
                            { field: "date", headerName: "Applied Date", flex: 1 },
                            { field: "owner", headerName: "Owner", flex: 1 }]}
                            getRowId={(x) => x.id}
                            // pagination={true}
                            // rowsPerPageOptions={[5]}
                            hideFooter={true}
                            checkboxSelection
                        />

                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Candidates