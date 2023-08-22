import { Expense } from '@/types/Expense.types'
import DataTable from '@/features/ExpensesList/DataTable'
import { columns } from './columns'

const ExpensesList = ({ expenses }: { expenses: Expense[] }) => {
  return <DataTable columns={columns} data={expenses} />
}

export default ExpensesList
