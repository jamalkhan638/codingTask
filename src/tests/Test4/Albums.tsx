import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Albums.css'
import Loading from '../../components/Loading/Loading'
import { Col, Row } from 'react-bootstrap'

const Albums = () => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((res) => {
        setData(res?.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log('error', err)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Row>
          {data?.slice(0, 12).map((el, index) => {
            return (
              <Col lg={3} md={4} sm={12} key={index} className="displayid">
                <ul className="list">
                  <li>{el?.id}</li>
                  <li>{el?.title}</li>
                  <li>
                    <Link to={`singlealbum/${el?.id}`}>
                      <img src={el?.thumbnailUrl} />{' '}
                    </Link>
                  </li>
                </ul>
              </Col>
            )
          })}
        </Row>
      )}
    </div>
  )
}

export default Albums
