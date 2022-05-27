import React from 'react'
import { Button, Table } from 'react-bootstrap'
import './Styles/Home.css'

function Home() {
  return (
    <div>
      <div className='top10Songs'>
        <div className='top10SongsTop'>
          <h4 className='top10songsHeading'>Top 10 Songs</h4>
          <Button variant="dark" className='AddSongsBtn'>ADD SONGS</Button>
        </div>
        <Table className='top10SongsTable'>
          <thead>
            <tr>
              <th>Artwork</th>
              <th>Song</th>
              <th>Date of Release</th>
              <th>Artist</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> <img src="\Images\airpods pro-3.jpg" alt="" className='musicImage' /></td>
              <td>Someone You Loved</td>
              <td>July 29 2020</td>
              <td>Lewis Capaldi</td>
              <td>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </td>
            </tr>

          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Home
