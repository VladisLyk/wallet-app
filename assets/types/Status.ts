export type TransactionStatus = 'Pending' | 'Completed' | 'Recurring';

export const statusColorMap: Record<TransactionStatus, string> = {
    Pending: 'yellow',
    Completed: 'green',
    Recurring: 'blue',
};
