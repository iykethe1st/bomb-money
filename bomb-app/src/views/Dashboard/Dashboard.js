import Page from '../../components/Page';
import HomeImage from '../../assets/img/background.jpg';
import BombFinanceSummary from './components/BombFinanceSummary';
import { createGlobalStyle } from 'styled-components';
// import Button from '../../components/Button';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;
const Dashboard = () => {
  return (
    <Page>
      <BackgroundImage />
      <BombFinanceSummary />
      <Grid container>
        <Grid item>
          <div>
            <Button
              style={{
                backgroundColor: '#00ADE8',
                padding: '2px 15rem',
                border: '1px solid red',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                color: 'white',
              }}
              className=""
            >
              Invest Now
            </Button>
          </div>
          <Grid style={{ display: 'flex' }}>
            <Button
              style={{
                backgroundColor: '#00ADE8',
                padding: '2px 5rem',
                border: '1px solid red',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                color: 'white',
              }}
            >
              Chat on Discord
            </Button>
            <Button>Read Docs</Button>
          </Grid>
        </Grid>
        <Grid item>
          <div>A</div>
          <div>B</div>
        </Grid>
      </Grid>
    </Page>
  );
};

export default Dashboard;
