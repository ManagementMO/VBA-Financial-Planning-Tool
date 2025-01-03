import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Wallet, TrendingUp, PiggyBank, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const FinancialDashboard = () => {
  // Sample data
  const monthlyData = [
    { name: 'Jan', income: 5200, expenses: 4100 },
    { name: 'Feb', income: 5400, expenses: 4300 },
    { name: 'Mar', income: 5800, expenses: 4200 },
    { name: 'Apr', income: 5600, expenses: 4400 },
    { name: 'May', income: 6200, expenses: 4500 },
    { name: 'Jun', income: 6400, expenses: 4600 }
  ];

  const investmentData = [
    { name: 'Stocks', value: 45 },
    { name: 'Bonds', value: 25 },
    { name: 'Real Estate', value: 20 },
    { name: 'Cash', value: 10 }
  ];

  const expenseCategories = [
    { name: 'Housing', amount: 2000 },
    { name: 'Transport', amount: 800 },
    { name: 'Food', amount: 600 },
    { name: 'Utilities', amount: 400 },
    { name: 'Entertainment', amount: 300 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Financial Dashboard</h1>
        
        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Balance</p>
                  <p className="text-2xl font-bold text-gray-800">$24,500</p>
                  <p className="text-sm text-green-500 flex items-center">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    +8.2%
                  </p>
                </div>
                <Wallet className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Monthly Income</p>
                  <p className="text-2xl font-bold text-gray-800">$6,400</p>
                  <p className="text-sm text-green-500 flex items-center">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    +3.1%
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Monthly Expenses</p>
                  <p className="text-2xl font-bold text-gray-800">$4,600</p>
                  <p className="text-sm text-red-500 flex items-center">
                    <ArrowDownRight className="h-4 w-4 mr-1" />
                    +2.2%
                  </p>
                </div>
                <DollarSign className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Savings Goal</p>
                  <p className="text-2xl font-bold text-gray-800">$12,000</p>
                  <p className="text-sm text-green-500 flex items-center">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    68%
                  </p>
                </div>
                <PiggyBank className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Income vs Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="income" stroke="#0088FE" strokeWidth={2} />
                    <Line type="monotone" dataKey="expenses" stroke="#FF8042" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Investment Portfolio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={investmentData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label
                    >
                      {investmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Chart */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Monthly Expenses by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={expenseCategories}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="amount" fill="#8884d8">
                    {expenseCategories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FinancialDashboard;