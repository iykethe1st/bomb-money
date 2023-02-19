import Page from '../../components/Page';
import HomeImage from '../../assets/img/background.jpg';
import Investment from './components/Investment';

import BombFinanceSummary from './components/BombFinanceSummary';
import Label from '../../components/Label';
import { createGlobalStyle } from 'styled-components';
// import Button from '../../components/Button';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { borderRadius, display, fontSize } from '@material-ui/system';
import BondFarms from './components/BondFarms';
import Bonds from './components/Bonds';

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
      <Investment />
      <BondFarms />
      <Bonds />
    </Page>
  );
};

export default Dashboard;
