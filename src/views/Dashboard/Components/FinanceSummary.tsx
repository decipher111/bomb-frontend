import React, { useCallback, useMemo } from 'react';
import useBombStats from '../../../hooks/useBombStats';
import useLpStats from '../../../hooks/useLpStats';
import useLpStatsBTC from '../../../hooks/useLpStatsBTC';
import useBondStats from '../../../hooks/useBondStats';
import usebShareStats from '../../../hooks/usebShareStats';
import useBombFinance from '../../../hooks/useBombFinance';
import { Grid, Box } from '@material-ui/core';
import { roundAndFormatNumber } from '../../../0x';
import MetamaskFox from '../../../assets/img/metamask-fox.svg';
import TokenSymbol from '../../../components/TokenSymbol';
import { Divider } from '@material-ui/core';
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
      <Grid container spacing={3} justifyContent="center"
        alignItems="center" style={{ color: 'white', fontSize: '14px', textAlign:'center' }}>
        <Grid item xs={6}>
          <Grid container xs={12} justifyContent="center"
            alignItems="center">
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
            <hr style={{ width: '80%', borderTop: '0.01px' }} />
          </Grid>
          <Grid container xs={12} justifyContent="center"
            alignItems="center">
            <Grid item xs={3}>
              <Box component="span" sx={{
                width: 100,
                height: 100,
              }}>
                <TokenSymbol symbol="BOMB" size={24} />
              </Box> $BOMB
            </Grid>
            <Grid item xs={2} justifyContent="center"
              alignItems="center">
              {roundAndFormatNumber(parseInt(bombCirculatingSupply), 2)}
            </Grid>
            <Grid item xs={2}>
              {roundAndFormatNumber(parseInt(bombTotalSupply), 2)}
            </Grid>
            <Grid item xs={3}>
              <span style={{ display: 'block', textAlign: 'center' }}>${bombPriceInDollars ? roundAndFormatNumber(parseInt(bombPriceInDollars), 5) : '-.--'}</span>
              <span>{bombPriceInBNB ? bombPriceInBNB : '-.----'} BTC</span>
            </Grid>
            <Grid item xs={2}>
              <img alt="metamask fox" style={{ width: '20px' }} src={MetamaskFox} />
            </Grid>
            <hr style={{ width: '80%', borderTop: '0.01px' }} />
          </Grid>
          <Grid container xs={12} justifyContent="center"
            alignItems="center">
            <Grid item xs={3}>
              <Box component="span" sx={{
                width: 100,
                height: 100,
              }}>
                <TokenSymbol symbol="BSHARE" size={24} />
              </Box> $BSHARE
            </Grid>
            <Grid item xs={2} justifyContent="center"
              alignItems="center">
              {roundAndFormatNumber(parseInt(bShareCirculatingSupply), 2)}
            </Grid>
            <Grid item xs={2}>
              {roundAndFormatNumber(parseInt(bShareTotalSupply), 2)}
            </Grid>
            <Grid item xs={3}>
              <span style={{ display: 'block', textAlign: 'center' }}>${bSharePriceInDollars ? roundAndFormatNumber(parseInt(bSharePriceInDollars), 5) : '-.--'}</span>
              <span>{bSharePriceInBNB ? bSharePriceInBNB : '-.----'} BTC</span>
            </Grid>
            <Grid item xs={2}>
              <img alt="metamask fox" style={{ width: '20px' }} src={MetamaskFox} />
            </Grid>
            <hr style={{ width: '80%', borderTop: '0.01px' }} />

          </Grid>
          <Grid container xs={12} justifyContent="center"
            alignItems="center">
            <Grid item xs={3}>
              <Box component="span" sx={{
                width: 100,
                height: 100,
              }}>
                <TokenSymbol symbol="BBOND" size={24} />
              </Box> $BBOND
            </Grid>
            <Grid item xs={2} justifyContent="center"
              alignItems="center">
              {roundAndFormatNumber(parseInt(tBondCirculatingSupply), 2)}
            </Grid>
            <Grid item xs={2}>
              {roundAndFormatNumber(parseInt(tBondTotalSupply), 2)}
            </Grid>
            <Grid item xs={3}>
              <span style={{ display: 'block', textAlign: 'center' }}>${tBondPriceInDollars ? roundAndFormatNumber(parseInt(tBondPriceInDollars), 5) : '-.--'}</span>
              <span>{tBondPriceInBNB ? tBondPriceInBNB : '-.----'} BTC</span>
            </Grid>
            <Grid item xs={2}>
              <img alt="metamask fox" style={{ width: '20px' }} src={MetamaskFox} />
            </Grid>
            <hr style={{ width: '80%', borderTop: '0.01px' }} />
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