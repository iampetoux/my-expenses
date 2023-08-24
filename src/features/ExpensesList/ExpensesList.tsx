import DataTable from '@/features/ExpensesList/DataTable'
import { columns } from './columns'
import useExpenseStore from '@/hooks/useExpenseStore'

const ExpensesList = () => {
  const { expenses } = useExpenseStore()
  return <DataTable columns={columns} data={expenses} />
}

export default ExpensesList
