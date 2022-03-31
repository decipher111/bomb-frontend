import React from 'react'
import { Box, Container, Typography, Grid } from '@material-ui/core';
import Button from '../../../components/Button';
import useBanks from '../../../hooks/useBanks';

const BombBTCB: React.FC = () => {
  const [banks] = useBanks();
  const activeBanks = banks.filter((bank) => !bank.finished);
  console.log(activeBanks)
    return (<div style={{marginTop: "20px"}}>
      <h2>BOMBBTC</h2>
                      <Grid container justify="space-between">  
                          <Typography style={{display: 'inline-block'}} align="left">Stake BShare and earn BOMB every EPOCH</Typography>
                          <Typography style={{display: 'inline-block'}} align="right">TVL:</Typography>
                      </Grid>
      <hr style={{ width: '95%', borderTop: '0.01px', color:"grey"}} />
      <Grid container spacing={10}>
      <Grid item xs={2} style={{ margin: '10px'}}>
      <Typography align="center">Daily Returns:</Typography>
      <Typography align="center">APR%</Typography>
      </Grid>
      <Grid item xs={2} style={{ margin: '10px'}}>
      <Typography align="center">Your stake</Typography>
      <Typography align="center">ABC</Typography>
      <Typography align="center">ACB</Typography>
      </Grid>
      <Grid item xs={2} style={{ margin: '10px'}}>
      <Typography align="center">Earned:</Typography>
      <Typography align="center">XXX</Typography>
      <Typography align="center">XXX</Typography>
      </Grid>
      <Grid container justify="center"  item xs={4}>
              <Button size="sm" width="30" text="Deposit" variant="secondary"/>
              <Button size="sm" width="30" text="Withdraw" variant="secondary"/>
              <Button size="sm" width="30" text="Claim" variant="secondary"/>
      </Grid>
  </Grid>
  </div>
    )
}

export default BombBTCB