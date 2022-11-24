import React from 'react'

import InfiniteScroll from 'react-infinite-scroll-component'
import './test1.css'

export default function TableData({ data, fetchNewData, hasMoreData }) {
  return (
    <div>
      <div>
        <div className="maindivHeader">
          <p className="font-20">Name</p>
          <p className="font-20">Email</p>
          <p className="font-20">Age</p>
          <p className="font-20">Gender</p>
          <p className="font-20">Phone</p>
          <p className="font-20">Country</p>
        </div>

        <InfiniteScroll
          dataLength={data?.length}
          next={fetchNewData}
          hasMore={hasMoreData}
          loader={
            <div className="loader">Loading More 30 records..............</div>
          }
        >
          {data?.map((item) => (
            <div className="maindiv">
              <p className="font-16">{item.name}</p>
              <p className="font-16">{item.email}</p>

              <p className="font-16">{item.age}</p>
              <p className="font-16">{item.gender}</p>
              <p className="font-16">{item.phone}</p>
              <p className="font-16">{item.country}</p>
            </div>
          ))}
        </InfiniteScroll>
        <button
          className="topBtn"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }}
        >
          Top
        </button>
      </div>
    </div>
  )
}
