export type Expense = {
  id: string;
  amount: number;
  category: string;
  note?: string;
  createdAt: Date;
}

export type ExpenseInput = {
  amount: number;
  category: string;
  note?: string;
}