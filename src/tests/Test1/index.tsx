/**
  The goal of this challenge is to build a reusable table component.
  Here are more specific requirements:

  0. You are free to use any react library for this challenge.
  1. The table should be able to render any number of columns (But at least 8 columns for the demo purposes)
  2. Fetch some data from open-sourced APIs (e.g. https://mockyard.herokuapp.com/users/50) or
     generate your own collection (e.g. you can use faker-js for that).
  3. The component should load more data every time when the scroll is about to ends. You
     can fetch or generate 50 rows each time.
  4. Make the component responsive to the browser size.
  5. Scroll to top button should be available when the scroll is not at the top. And when the button
     is clicked, the scroll should be animated to the top.

 Bonus points:
 - For any kind of tests you will write.
 - You don’t need to put a lot of effort into styling, but we’re giving bonus points for nice UI/UX.

*/

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { getData } from './requests'
import TableData from './table'

export default function TestOne() {
  const [data, setData] = useState([])
  const [hasMoreData, setHasMoreData] = useState(true)

  const getTableData = async () => {
    const res = await getData()
    setData(res)
  }

  useEffect(() => {
    getTableData()
  }, [])

  const fetchNewData = async () => {
    let tableData = data
    const res = await getData()
    let newData = res
    tableData = tableData?.concat(newData)
    setData(tableData)
    console.log('tableData', tableData)
  }

  return (
    <div>
      <TableData
        data={data}
        fetchNewData={fetchNewData}
        hasMoreData={hasMoreData}
      />
    </div>
  )
}
