import React, {useCallback, useMemo} from 'react';
import Page from '../../components/Page';
import {createGlobalStyle} from 'styled-components';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {useWallet} from 'use-wallet';
import UnlockWallet from '../../components/UnlockWallet';
import { Grid, Box } from '@material-ui/core';
import FinanceSummary from './Components/FinanceSummary'
import Boardroom from './Components/Boardroom'
import HomeImage from '../../assets/img/background.jpg';
import styled from 'styled-components';
const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;

const Dashboard:React.FC = () => {
    const {account} = useWallet();
    return (
        <Switch>
            <Page>
                <BackgroundImage />
                {!!account ? (
                    <>
                        <Grid item xs={12} sm={12} justify="center" style={{border: "1px solid grey"}}>
                        <FinanceSummary/>
                        </Grid>
                        <StyledDashboard>
                            <StyledCardWrapper style={{ margin: '18px', display: 'flex', border: "1px solid grey"}}>
                              <Boardroom/>
                            </StyledCardWrapper>
                            <StyledCardWrapper style={{ margin: '18px', display: 'flex', border: "1px solid grey"}}>
                                <h1>Component 3</h1>
                            </StyledCardWrapper>
                        </StyledDashboard>
                        <Grid item xs={12} sm={12} justify="center" style={{ margin: '18px', display: 'flex', border: "1px solid grey"}}>
                            <h1>Component 4</h1>
                        </Grid>
                        <Grid item xs={12} sm={12} justify="center" style={{ margin: '18px', display: 'flex', border: "1px solid grey"}}>
                            <h1>Component 5</h1>
                        </Grid>
                    </>
                    ) : (
          <UnlockWallet />
        )}
            </Page>
        </Switch>
    )
}

const StyledDashboard = styled.div`
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export default Dashboard;