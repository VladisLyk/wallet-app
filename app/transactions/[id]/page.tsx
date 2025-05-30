"use client";

import { Box, Paper, Stack, Typography, Divider, IconButton } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import transactions from "@/transactions";
import { Transaction } from "@/types/Transaction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";

const TransactionDetailPage = () => {
    const { id } = useParams();
    const router = useRouter();
    const transaction: Transaction | undefined = transactions.find(t => t.id === Number(id));

    if (!transaction) {
        return <Typography>Transaction not found</Typography>;
    }

    return (
        <Box width={"100%"}>
            <IconButton onClick={() => router.back()} sx={{ mb: 2 }}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </IconButton>

            <Typography variant="h3" fontWeight={600} textAlign="center">
                {transaction.amount < 0 ?`$${Math.abs(transaction.amount).toFixed(2)}` : `+ $${transaction.amount.toFixed(2)}`}
            </Typography>

            <Typography textAlign="center" color="text.secondary" mt={1}>
                {transaction.name}
            </Typography>

            <Typography textAlign="center" color="text.secondary">
                {dayjs(transaction.date).format("M/D/YY, HH:mm")}
            </Typography>

            <Paper sx={{ mt: 4, borderRadius: 3, p: 2 }}>
                <Stack spacing={1}>
                    <Box>
                        <Typography fontWeight={600}>Status: {transaction.status}</Typography>
                        <Typography color="text.secondary" fontSize={14}>
                            {transaction.location}
                        </Typography>
                    </Box>

                    <Divider />

                    <Stack direction="row" justifyContent="space-between">
                        <Typography fontWeight={600}>Total</Typography>
                        <Typography fontWeight={600}>${transaction.amount.toFixed(2)}</Typography>
                    </Stack>
                </Stack>
            </Paper>
        </Box>
    );
};

export default TransactionDetailPage;
