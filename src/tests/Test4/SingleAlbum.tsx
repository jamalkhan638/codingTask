import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import './SingleAlbum.css'
import Loading from '../../components/Loading/Loading'

const SingleAlbum = () => {
  const { id } = useParams()
  const [detail, setDetail] = useState<any>({})
  const [isLoading, setLoading] = useState(true)
  const navigate = useNavigate()
  console.log('id ', id)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((res) => {
        setDetail(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log('err', err)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="displaydata">
          <button
            onClick={() => {
              navigate('/4')
            }}
            className="backbtn"
          >
            back
          </button>
          <ul>
            <li>{detail?.id}</li>
            <li>{detail?.title}</li>
            <li>
              <img src={detail?.thumbnailUrl} alt="userprofile" />
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default SingleAlbum
