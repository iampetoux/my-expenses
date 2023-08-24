export type Expense = {
  id: string
  amount: number
  category: string
  note?: string | null
  createdAt: Date
}