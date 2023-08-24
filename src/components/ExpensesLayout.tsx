'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import AddExpense from '@/features/AddExpense/AddExpense'
import ExpensesList from '@/features/ExpensesList/ExpensesList'
import Overview from '@/features/Overview/Overview'

const ExpensesLayout = () => {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Tableau de bord</h2>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <div className="flex justify-between">
            <TabsList>
              <TabsTrigger value="overview">Bilan</TabsTrigger>
              <TabsTrigger value="list">Liste</TabsTrigger>
            </TabsList>
            <AddExpense />
          </div>
          <TabsContent value="overview" className="space-y-4">
            <Overview />
          </TabsContent>
          <TabsContent value="list">
            <ExpensesList />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default ExpensesLayout
