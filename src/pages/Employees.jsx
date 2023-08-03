import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective,Page, Search,Inject, Toolbar} from '@syncfusion/ej2-react-grids'
import { employeesData,contextMenuItems,employeesGrid} from '../data/dummy'
import {Header} from "../components"
import { search } from '@syncfusion/ej2/filemanager'



const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Orders"/>
      <GridComponent dataSource={employeesData} allowPaging toolbar={["Search"]} width="auto" >
        <ColumnsDirective>
         {employeesGrid.map((item,index)=>{
             return <ColumnDirective {...item} key={index}/>
         })}
        </ColumnsDirective>
        <Inject services={[Page,Search, Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Employees