import React, { useCallback, useMemo } from 'react';
import useBombStats from '../../../hooks/useBombStats';
import useLpStats from '../../../hooks/useLpStats';
import useLpStatsBTC from '../../../hooks/useLpStatsBTC';
import useBondStats from '../../../hooks/useBondStats';
import usebShareStats from '../../../hooks/usebShareStats';
import useBombFinance from '../../../hooks/useBombFinance';
import { Grid, Box } from '@material-ui/core';
import { roundAndFormatNumber } from '../../../0x';
const FinanceSummary: React.FC = () => {
  const bombFtmLpStats = useLpStatsBTC('BOMB-BTCB-LP');
  const bShareFtmLpStats = useLpStats('BSHARE-BNB-LP');
  const bombStats = useBombStats();
  const bShareStats = usebShareStats();
  const tBondStats = useBondStats();
  const bombFinance = useBombFinance();
  const bombLPStats = useMemo(() => (bombFtmLpStats ? bombFtmLpStats : null), [bombFtmLpStats]);
  const bshareLPStats = useMemo(() => (bShareFtmLpStats ? bShareFtmLpStats : null), [bShareFtmLpStats]);
  const bombPriceInDollars = useMemo(
    () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
    [bombStats],
  );
  const bombPriceInBNB = useMemo(() => (bombStats ? Number(bombStats.tokenInFtm).toFixed(4) : null), [bombStats]);
  const bombCirculatingSupply = useMemo(() => (bombStats ? String(bombStats.circulatingSupply) : null), [bombStats]);
  const bombTotalSupply = useMemo(() => (bombStats ? String(bombStats.totalSupply) : null), [bombStats]);

  const bSharePriceInDollars = useMemo(
    () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
    [bShareStats],
  );
  const bSharePriceInBNB = useMemo(
    () => (bShareStats ? Number(bShareStats.tokenInFtm).toFixed(4) : null),
    [bShareStats],
  );
  const bShareCirculatingSupply = useMemo(
    () => (bShareStats ? String(bShareStats.circulatingSupply) : null),
    [bShareStats],
  );
  const bShareTotalSupply = useMemo(() => (bShareStats ? String(bShareStats.totalSupply) : null), [bShareStats]);

  const tBondPriceInDollars = useMemo(
    () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
    [tBondStats],
  );
  const tBondPriceInBNB = useMemo(() => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(4) : null), [tBondStats]);
  const tBondCirculatingSupply = useMemo(
    () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
    [tBondStats],
  );
  const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);

  return (
    <div style={{ color: 'white' }}>
      <h2>FINANCE SUMMARY</h2>
      <hr></hr>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Grid container xs={12}>
            <Grid item xs={3}></Grid>
            <Grid item xs={2}>
              Current Supply
            </Grid>
            <Grid item xs={2}>
              Total Supply
            </Grid>
            <Grid item xs={3}>
              Price
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid item xs={3}>
              COL-11
            </Grid>
            <Grid item xs={2}>
              {roundAndFormatNumber(parseInt(bombCirculatingSupply), 2)}
            </Grid>
            <Grid item xs={2}>
              {roundAndFormatNumber(parseInt(bombTotalSupply), 2)}
            </Grid>
            <Grid item xs={3}>
              <span style={{display: 'block', textAlign:'center'}}>${bombPriceInDollars ? roundAndFormatNumber(parseInt(bombPriceInDollars),5) : '-.--'}</span>
              <span>{bombPriceInBNB ? bombPriceInBNB : '-.----'} BTC</span>
            </Grid>
            <Grid item xs={2}>
              COL-15
            </Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid item xs={3}>
              COL-11
            </Grid>
            <Grid item xs={2}>
              COL-12
            </Grid>
            <Grid item xs={2}>
              COL-13
            </Grid>
            <Grid item xs={3}>
              COL-14
            </Grid>
            <Grid item xs={2}>
              COL-15
            </Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid item xs={3}>
              COL-11
            </Grid>
            <Grid item xs={2}>
              COL-12
            </Grid>
            <Grid item xs={2}>
              COL-13
            </Grid>
            <Grid item xs={3}>
              COL-14
            </Grid>
            <Grid item xs={2}>
              COL-15
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          COL-2
        </Grid>
        <Grid item xs={3}>
          COL-3
        </Grid>
      </Grid>
    </div>
  )
}

export default FinanceSummary;