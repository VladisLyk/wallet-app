"use client";
import { useEffect, useState } from 'react';
import {
  Box,
  Card,
  Grid,
  Skeleton,
  Stack,
  Typography,
  useTheme
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function getPointsForSeasonDay(day: number): string {
  if (day < 1) throw new Error("Day must be >= 1");

  const points: number[] = [];

  for (let i = 0; i < day; i++) {
    if (i === 0) {
      points.push(2);
    } else if (i === 1) {
      points.push(3);
    } else {
      const prev = points[i - 1];
      const prevPrev = points[i - 2];
      points.push(prevPrev + 0.6 * prev);
    }
  }

  const total = Math.round(points[day - 1]);

  return total >= 1000 ? `${Math.round(total / 1000)}K` : total.toString();
}

const WalletSummary = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const balance = Math.random() * 1000;
  const remaining = 1000 - balance;

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Grid container width="100%" spacing={0.8}>
      <Grid size={{xs: 6}}>
        <Stack spacing={0.8}>
          <Card component={Stack} justifyContent="space-between" sx={{ minHeight: 100, p: 2 }}>
            {loading ? (
              <>
                <Skeleton width="50%" height={20} />
                <Skeleton width="60%" height={30} />
                <Skeleton width="40%" height={20} />
              </>
            ) : (
              <>
                <Typography fontWeight={300}>Card balance</Typography>
                <Typography fontWeight={600} variant="h5">${balance.toFixed(2)}</Typography>
                <Typography color={theme.palette.text.secondary}>${remaining.toFixed(2)} available</Typography>
              </>
            )}
          </Card>
          <Card component={Stack} justifyContent="center" sx={{ height: 100, p: 2 }}>
            {loading ? (
              <>
                <Skeleton width="40%" height={20} />
                <Skeleton width="30%" height={25} />
              </>
            ) : (
              <>
                <Typography>Daily Points</Typography>
                <Typography color={theme.palette.text.secondary}>
                  {getPointsForSeasonDay(new Date().getDate())}
                </Typography>
              </>
            )}
          </Card>
        </Stack>
      </Grid>

      <Grid size={{xs: 6}}>
        <Card sx={{ height: "100%", p: 2 }} component={Stack}>
          {loading ? (
            <>
              <Skeleton width="60%" height={20} />
              <Skeleton width="90%" height={20} />
              <Box flex={1} />
              <Skeleton variant="circular" width={60} height={60} sx={{ alignSelf: 'flex-end' }} />
            </>
          ) : (
            <>
              <Typography>No Payments Due.</Typography>
              <Typography variant="body1" color={theme.palette.text.secondary} lineHeight={1.1}>
                You've paid your September balance.
              </Typography>
              <Stack flex={1} alignItems="end" justifyContent="end" position="relative">
                <Box
                  position="absolute"
                  width="50px"
                  height="60px"
                  bgcolor="black"
                  right={15}
                  bottom={9}
                  borderRadius={1}
                />
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  fontSize="80px"
                  color="var(--color-background)"
                  style={{ zIndex: 2 }}
                />
              </Stack>
            </>
          )}
        </Card>
      </Grid>
    </Grid>
  );
};

export default WalletSummary;
