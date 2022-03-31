import React, { useCallback, useMemo } from 'react';
import moment from 'moment';
import useBombStats from '../../../hooks/useBombStats';
import useBondStats from '../../../hooks/useBondStats';
import usebShareStats from '../../../hooks/usebShareStats';
import { Grid, Box, Typography } from '@material-ui/core';
import { roundAndFormatNumber } from '../../../0x';
import MetamaskFox from '../../../assets/img/metamask-fox.svg';
import TokenSymbol from '../../../components/TokenSymbol';
import { getDisplayBalance } from '../../../utils/formatBalance';
import useCurrentEpoch from '../../../hooks/useCurrentEpoch';
import useCashPriceInEstimatedTWAP from '../../../hooks/useCashPriceInEstimatedTWAP';
import useTreasuryAllocationTimes from '../../../hooks/useTreasuryAllocationTimes';
import ProgressCountdown from '../../Boardroom/components/ProgressCountdown';
import useTotalValueLocked from '../../../hooks/useTotalValueLocked';
import useStakedBalance from '../../../hooks/useStakedBalance';
import useBanks from '../../../hooks/useBanks';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);


const FinanceSummary: React.FC = () => {
  const bombStats = useBombStats();
  const bShareStats = usebShareStats();
  const tBondStats = useBondStats();
  const currentEpoch = useCurrentEpoch();
  const { to } = useTreasuryAllocationTimes();
  const [banks] = useBanks();
  let balanceObj = new Map<string, Number>();
  // const balance = useStakedBalance(banks[0].name, banks[0].poolId);
  // balanceObj.set(banks[0].name, Number(getDisplayBalance(balance)));
  const cashStat = useCashPriceInEstimatedTWAP();
  const scalingFactor = useMemo(() => (cashStat ? Number(cashStat.priceInDollars).toFixed(4) : null), [cashStat]);
  const TVL = Number(useTotalValueLocked()).valueOf();
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
  const chartData = {
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const chartOptions = {
    cutoutPercentage: 20,
    layout: { padding: 10 },
    legend: {
      display: false
    },
    responsive: true,
    tooltips: {
      borderWidth: 1
    }
  };
  return (
    <div style={{ color: 'white' }}>
      <h2>FINANCE SUMMARY</h2>
      <hr></hr>
      <Grid container justifyContent="center"
        alignItems="center" style={{ color: 'white', fontSize: '14px', textAlign: 'center' }}>
        <Grid item xs={4}>
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
              {roundAndFormatNumber(parseFloat(bombCirculatingSupply), 2)}
            </Grid>
            <Grid item xs={2}>
              {roundAndFormatNumber(parseFloat(bombTotalSupply), 2)}
            </Grid>
            <Grid item xs={3}>
              <span style={{ display: 'block', textAlign: 'center' }}>${bombPriceInDollars ? roundAndFormatNumber(parseFloat(bombPriceInDollars), 5) : '-.--'}</span>
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
              {roundAndFormatNumber(parseFloat(bShareCirculatingSupply), 2)}
            </Grid>
            <Grid item xs={2}>
              {roundAndFormatNumber(parseFloat(bShareTotalSupply), 2)}
            </Grid>
            <Grid item xs={3}>
              <span style={{ display: 'block', textAlign: 'center' }}>${bSharePriceInDollars ? roundAndFormatNumber(parseFloat(bSharePriceInDollars), 5) : '-.--'}</span>
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
              {roundAndFormatNumber(parseFloat(tBondCirculatingSupply), 2)}
            </Grid>
            <Grid item xs={2}>
              {roundAndFormatNumber(parseFloat(tBondTotalSupply), 2)}
            </Grid>
            <Grid item xs={3}>
              <span style={{ display: 'block', textAlign: 'center' }}>${tBondPriceInDollars ? roundAndFormatNumber(parseFloat(tBondPriceInDollars), 5) : '-.--'}</span>
              <span>{tBondPriceInBNB ? tBondPriceInBNB : '-.----'} BTC</span>
            </Grid>
            <Grid item xs={2}>
              <img alt="metamask fox" style={{ width: '20px' }} src={MetamaskFox} />
            </Grid>
            <hr style={{ width: '80%', borderTop: '0.01px' }} />
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <div>
          <Typography style={{ textTransform: 'uppercase', color: 'white' }}>Current Epoch</Typography>
            <Typography>{Number(currentEpoch)}</Typography>
            <hr />
          </div>
          <div>
            <Typography style={{ textTransform: 'uppercase', color: 'white' }}>Next Epoch</Typography>
            <ProgressCountdown base={moment().toDate()} hideBar={true} deadline={to} description="Next Epoch" />
            <hr />
          </div>
          <div>
            <p>Live TWAP {scalingFactor}</p>
            <p>TVL ${roundAndFormatNumber(TVL,2)}</p>
            <p>Last Epoch TWAP ??? </p>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div style={{ width : '50%', margin: '0 auto'}} >
            <Doughnut data={chartData} options={chartOptions}/>
          </div>
          <div>
            <TokenSymbol symbol="BSHARE" size={24} />
            BSHARE : 
            {/* {balanceObj.get(banks[0].name)} */}
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default FinanceSummary;