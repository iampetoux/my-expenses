'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import AddExpense from '@/features/AddExpense/AddExpense'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'
import { initialExpenses } from '@/data/expenses'
import ExpensesList from '@/features/ExpensesList/ExpensesList'
import Overview from '@/features/Overview/Overview';

const ExpensesLayout = () => {
  const [expenses, setExpenses] = useState(initialExpenses)

  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <div className="flex justify-between">
        <TabsList>
          <TabsTrigger value="overview">Bilan</TabsTrigger>
          <TabsTrigger value="list">Liste</TabsTrigger>
        </TabsList>
        <AddExpense setExpense={setExpenses} />
      </div>
      <TabsContent value="overview" className="space-y-4">
        <Overview expenses={expenses} />
      </TabsContent>
      <TabsContent value="list">
        <ExpensesList expenses={expenses} />
      </TabsContent>
    </Tabs>
  )
}

export default ExpensesLayout
