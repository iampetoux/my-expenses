import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import AddExpense from '@/features/AddExpense/AddExpense';
import ExpensesLayout from '@/components/ExpensesLayout';

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Tableau de bord</h2>
          </div>
          <ExpensesLayout />
        </div>
      </div>
    </>
  )
}
