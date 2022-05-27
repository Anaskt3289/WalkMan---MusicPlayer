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
        <div className='top10SongsTableOuter'>
          <Table className='top10SongsTable'>
            <thead>
              <tr>
                <th>Artwork</th>
                <th>Song</th>
                <th>Date of Release</th>
                <th>Artist</th>
                <th>Rating</th>
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

      <div className='top10Songs'>
        <h4 className='top10songsHeading'>Top 10 Artists</h4>
        <div className='top10SongsTableOuter'>
          <Table className='top10SongsTable'>
            <thead>
              <tr>
                <th>Artist</th>
                <th>Date of Birth</th>
                <th>Songs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lewis Capaldi</td>
                <td>July 29 2020</td>
                <td>
                  <div className='ArtistSongslistOuter'>
                    <p className='ArtistSong'>Some one you love</p>
                    <p className='ArtistSong'>Some one you love</p>
                    <p className='ArtistSong'>Some one you love</p>
                    <p className='ArtistSong'>Some one you love</p>
                  </div>
                </td>
              </tr>

              <tr>
                <td>Lewis Capaldi</td>
                <td>July 29 2020</td>
                <td>
                  <div className='ArtistSongslistOuter'>
                    <p className='ArtistSong'>Some one you love</p>
                    <p className='ArtistSong'>Some one you love</p>
                    <p className='ArtistSong'>Some one you love</p>
                    <p className='ArtistSong'>Some one you love</p>
                  </div>
                </td>
              </tr>

              <tr>
                <td>Lewis Capaldi</td>
                <td>July 29 2020</td>
                <td>
                  <div className='ArtistSongslistOuter'>
                    <p className='ArtistSong'>Some one you love</p>
                    <p className='ArtistSong'>Some one you love</p>
                    <p className='ArtistSong'>Some one you love</p>
                    <p className='ArtistSong'>Some one you love</p>
                  </div>
                </td>
              </tr>
            
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default Home
