import React from 'react'
import { Container, Table, Button } from 'react-bootstrap'

const HomePage = () => {
  return (
    <>
        <h2 className='d-flex justify-content-center py-3 mx-5'>TOURS</h2>
        <Container>
            <Table>
                <tbody>
                <tr>
                <td>JUL16</td>
                <td>DETROIT, MI</td>
                <td>DTE ENERGY MUSIC THEATRE</td>
                <td><Button variant="primary">BUY TICKETS</Button></td>
                </tr>
                <tr>
                <td>JUL19</td>
                <td>TORONTO,ON</td>
                <td>BUDWEISER STAGE</td>
                <td><Button variant="primary">BUY TICKETS</Button></td>
                </tr>
                <tr>
                <td>JUL22</td>
                <td>BRISTOW, VA</td>
                <td>JIGGY LUBE LIVE</td>
                <td><Button variant="primary">BUY TICKETS</Button></td>
                </tr>
                <tr>
                <td>JUL29</td>
                <td>PHOENIX, AZ</td>
                <td>AK-CHIN PAVILION</td>
                <td><Button variant="primary">BUY TICKETS</Button></td>
                </tr>
                <tr>
                <td>AUG2</td>
                <td>LAS VEGAS, NV</td>
                <td>T-MOBILE ARENA</td>
                <td><Button variant="primary">BUY TICKETS</Button></td>
                </tr>
                <tr>
                <td>AUG7</td>
                <td>CONCORD, CA</td>
                <td>CONCORD PAVILION</td>
                <td><Button variant="primary">BUY TICKETS</Button></td>
                </tr>
            </tbody>
            </Table>
        </Container>
    </>
  )
}

export default HomePage
