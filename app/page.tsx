import BaseContainer from "@/components/BaseContainer";
import LastTransactions from "@/components/LastTransactions";
import WalletSummary from "@/components/WalletSummary";
import { Stack } from "@mui/material";

export default function Index() {
    return (
      <BaseContainer>
        <Stack spacing={4}>
          <WalletSummary />
          <LastTransactions />
        </Stack>
      </BaseContainer>
    );
}
