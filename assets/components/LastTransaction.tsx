"use client";

import { useRouter } from "next/navigation";
import { Transaction } from "@/types/Transaction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { KeyboardArrowRight } from "@mui/icons-material";
import {
  Box,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";

dayjs.extend(isToday);
dayjs.extend(isYesterday);

const formatDate = (dateStr: string) => {
  const date = dayjs(dateStr);
  if (date.isToday()) return "Today";
  if (date.isYesterday()) return "Yesterday";
  return date.format("MMM D, YYYY");
};

interface LastTransactionProps extends Partial<Transaction> {
  loading?: boolean;
}

const LastTransaction = ({
  id,
  name,
  amount,
  icon,
  location,
  status,
  date,
  loading = false,
}: LastTransactionProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (!loading && id) {
      router.push(`/transactions/${id}`);
    }
  };

  return (
    <Paper sx={{ padding: 1.5, cursor: loading ? "default" : "pointer" }} onClick={handleClick}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Box
          width={50}
          height={50}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            background: amount && amount < 0
              ? "rgba(0,0,0,0.7)"
              : "radial-gradient(circle at 30% 30%, #ffd76f, #fca7d4, #bdb5f7, #a3f0a8)",
            borderRadius: 1,
          }}
        >
          {loading ? (
            <Skeleton variant="circular" width={25} height={25} />
          ) : icon ? (
            <FontAwesomeIcon icon={icon} style={{ fontSize: 25, color: "white" }} />
          ) : null}
        </Box>

        <Stack flex={1} spacing={0.5}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            {loading ? (
              <>
                <Skeleton variant="text" width={80} />
                <Skeleton variant="text" width={60} />
              </>
            ) : (
              <>
                <Typography fontWeight={600}>{name}</Typography>
                <Stack direction="row" alignItems="center" spacing={0.5}>
                  <Typography fontWeight={500}>
                    {amount && (amount > 0 ? "+" : "-")}${Math.abs(amount || 0).toFixed(2)}
                  </Typography>
                  <KeyboardArrowRight sx={{ color: "text.secondary" }} />
                </Stack>
              </>
            )}
          </Stack>

          <Stack>
            {loading ? (
              <>
                <Skeleton variant="text" width="70%" />
                <Skeleton variant="text" width="30%" />
              </>
            ) : (
              <>
                <Typography
                  noWrap
                  textOverflow="ellipsis"
                  variant="body2"
                  color="text.secondary"
                  sx={{ maxWidth: "70%" }}
                >
                  {amount && amount > 0 && "From "}
                  {status === "Pending" && "Pending - "}
                  {location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {date && formatDate(date)}
                </Typography>
              </>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default LastTransaction;
