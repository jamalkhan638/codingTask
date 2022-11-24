import { Route, Routes } from 'react-router-dom'
import Albums from './Albums'
import SingleAlbum from './SingleAlbum'

/**
 The goal of this challenge is to populate a list with data from a given API.
 Here are more specific requirements:

  0. Fetch data (JSON) from API on component mount, create links for the first 10 images.
  1. Each link should direct to a route with an ID URL parameter
  2. The new route should display the image with that matching ID, and provide a back button to go back to the list.

  Bonus points:
  Using any CSS framework, improve the layout and styling,
  and make it somewhat responsive to the browser size.
*/

export default function TestFour() {
  return (
    <Routes>
      <Route path="/" element={<Albums />} />
      <Route path="singlealbum/:id" element={<SingleAlbum />} />
    </Routes>
  )
}
