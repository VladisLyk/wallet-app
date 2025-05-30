"use client";

import {
  Box,
  CircularProgress,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import transactionsData from "@/transactions";
import { Transaction } from "@/types/Transaction";
import { useEffect, useRef, useState } from "react";
import LastTransaction from "./LastTransaction";

const BATCH_SIZE = 5;

const LastTransactions = () => {
    const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const transactions: Transaction[] = transactionsData as Transaction[];

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!loaderRef.current || loading) return;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && visibleCount < transactions.length) {
        setIsFetchingMore(true);
        setTimeout(() => {
          setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, transactions.length));
          setIsFetchingMore(false);
        }, 1000);
      }
    });

    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [loading, visibleCount, transactions.length]);

  return (
    <Box>
      <Typography variant="h5" fontWeight={500} mb={1}>
        Latest Transactions
      </Typography>

      <Stack spacing={0.3}>
        {loading
          ? Array.from({ length: BATCH_SIZE }).map((_, index) => (
              <LastTransaction key={index} loading />
            ))
          : transactions.slice(0, visibleCount).map((t: Transaction, index) => (
              <LastTransaction key={index} {...t} />
            ))}
      </Stack>

      {!loading && visibleCount < transactions.length && (
        <Box
          ref={loaderRef}
          height={60}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {isFetchingMore && <CircularProgress color={theme.palette.background.paper} size={24} />}
        </Box>
      )}
    </Box>
  );
};

export default LastTransactions;
