import React, {useMemo} from 'react';
import { Box, Container, Typography, Grid } from '@material-ui/core';
import useTotalValueLocked from '../../../hooks/useTotalValueLocked';
import useFetchBoardroomAPR from '../../../hooks/useFetchBoardroomAPR';
import { getDisplayBalance } from '../../../utils/formatBalance';
import useTotalStakedOnBoardroom from '../../../hooks/useTotalStakedOnBoardroom';
import useStakedBalanceOnBoardroom from '../../../hooks/useStakedBalanceOnBoardroom';
import useStakedTokenPriceInDollars from '../../../hooks/useStakedTokenPriceInDollars';
import useClaimRewardCheck from '../../../hooks/boardroom/useClaimRewardCheck';
import useEarningsOnBoardroom from '../../../hooks/useEarningsOnBoardroom';
import useBombFinance from '../../../hooks/useBombFinance';
import Button from '../../../components/Button';
import useHarvestFromBoardroom from '../../../hooks/useHarvestFromBoardroom';

const Boardroom: React.FC = () => {
    const bombFinance = useBombFinance();
    const TVL = useTotalValueLocked();
    const earnings = useEarningsOnBoardroom();
    const canClaimReward = useClaimRewardCheck();
    const boardroomAPR = useFetchBoardroomAPR();
    const totalStaked = useTotalStakedOnBoardroom();
    const stakedBalance = useStakedBalanceOnBoardroom();
    const {onReward} = useHarvestFromBoardroom();
    const stakedTokenPriceInDollars = useStakedTokenPriceInDollars('BSHARE', bombFinance.BSHARE);

    const tokenPriceInDollars = useMemo(
        () =>
          stakedTokenPriceInDollars
            ? (Number(stakedTokenPriceInDollars) * Number(getDisplayBalance(stakedBalance))).toFixed(2).toString()
            : null,
        [stakedTokenPriceInDollars, stakedBalance],
      );

    const earnedInDollars = (Number(tokenPriceInDollars) * Number(getDisplayBalance(earnings))).toFixed(2);

    const APRtoDaily = (val: number) => {
        return (Math.pow(((val/100) + 1), 1/365) - 1)*100
    }
        return (
            <div style={{ color: 'white' }}>
                <div>
                    <h2>Boardroom</h2>
                    <Grid container justify="space-between">  
                        <Typography style={{display: 'inline-block'}} align="left">Stake BShare and earn BOMB every EPOCH</Typography>
                        <Typography style={{display: 'inline-block'}} align="right">TVL: ${Math.trunc(Number(TVL)).toLocaleString("en-US")}</Typography>
                    </Grid>
            </div>
            <hr></hr>
                    <Grid container justify="flex-end" text-align="right">  
                    <Typography align="right" style={{ margin: '4px'}}>Total Staked : {Math.trunc(Number(getDisplayBalance(totalStaked)))}</Typography>
                    </Grid>
            <Grid container spacing={10}>
                <Grid item xs={2} style={{ margin: '10px'}}>
                <Typography align="center">Daily Returns:</Typography>
                <Typography align="center">{APRtoDaily(boardroomAPR).toFixed(2)}%</Typography>
                </Grid>
                <Grid item xs={2} style={{ margin: '10px'}}>
                <Typography align="center">Your stake</Typography>
                <Typography align="center">{getDisplayBalance(earnings)}</Typography>
                <Typography align="center">{`≈ $${earnedInDollars}`}</Typography>
                </Grid>
                <Grid item xs={2} style={{ margin: '10px'}}>
                <Typography align="center">Earned:</Typography>
                <Typography align="center">{getDisplayBalance(stakedBalance)}</Typography>
                <Typography align="center">{`≈ $${tokenPriceInDollars}`}</Typography>
                </Grid>
                <Grid container justify="center"  item xs={4}>
                        <Button size="sm" width="50" text="Deposit" variant="secondary"/>
                        <Button size="sm" width="50" text="Withdraw" variant="secondary"/>
                        <Button size="sm" width="50" text="Claim" variant="secondary" disabled={!canClaimReward} onClick={onReward}/>
                </Grid>
            </Grid>
            </div>
        );
};


export default Boardroom;
