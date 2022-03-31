import React from 'react'
import { Box, Container, Typography, Grid } from '@material-ui/core';
import BombBTCB from './BombBTCB'

const BombFarms: React.FC = () => {

  
    return (
        <div style={{ color: 'white' }}>
                <div>
                    <h2>Bomb Farms</h2>
                    <Grid container justify="space-between">  
                        <Typography style={{display: 'inline-block'}} align="left">Stake you LP token in our farms to start earing $BSHARE</Typography>
                        <Typography style={{display: 'inline-block'}} align="right">Claim All</Typography>
                    </Grid>
            </div>
            <BombBTCB />
            <hr></hr>
        </div>
    )
  }

export default BombFarms
