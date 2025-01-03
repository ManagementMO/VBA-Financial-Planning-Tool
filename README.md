# MO's Comprehensive Financial Planning Tool

![MO-Planner](premium-banner.svg)

## 📊 Overview
A comprehensive Excel-based financial planning tool powered by VBA that helps users manage their personal finances, create budgets, track investments, and plan for retirement.

### Key Features
* 💰**Budgeting Made Easy:** Track income and expenses across various categories with a simple and intuitive interface.
* 📈 **Smart Forecasting:** Project your financial future with customizable scenarios and visualize potential outcomes.
* 🎯**Goal Tracking:** Set financial goals (e.g., saving for a down payment, retirement) and monitor your progress.
* 📅**Insightful Reporting:** Generate reports on your spending habits, net worth, and progress towards goals.
* 📊**User-Friendly Design:**  No prior VBA knowledge required!  Designed for ease of use for everyone.
* 📝**Customizable Categories:** Adapt the planner to your specific income and expense categories.

# 🖥️ Demo
![Demo GIF](demo-placeholder.gif)
## Dashboard Preview
![Dashboard Screenshot](dashboard-preview.png)


## 🚀 Getting Started

### Prerequisites
- Microsoft Excel 2016 or later
- VBA enabled in Excel
- Windows OS (recommended for full functionality)

### Installation
1. Download the latest release
2. Open the Excel file (.xlsm)
3. Enable macros when prompted
4. Navigate to the "Setup" worksheet
5. Follow the initialization wizard

## 📝 Usage Guide

### Initial Setup
## Installation

1. **Download the Excel File:** Click the "Code" button and then "Download ZIP".
2. **Extract the Files:** Unzip the downloaded file to your desired location.
3. **Open the Excel File:** Open the `FinancialPlanner.xlsm` file (the `.xlsm` extension indicates it contains macros).
4. **Enable Macros:** **Crucially, you need to enable macros for the planner to function.** You'll likely see a security warning bar at the top. Click "Enable Content" or follow these steps:
   * Go to "File" > "Options".
   * Click "Trust Center" and then "Trust Center Settings...".
   * Click "Macro Settings".
   * Select "Enable all macros (not recommended; potentially dangerous code can run)". **Alternatively, for better security, choose "Disable all macros with notification" and then enable macros specifically for this file when prompted.**
   * Click "OK" on both windows.
5. **Start Planning:** The financial planner is now ready to use! Refer to the "Usage" section below for instructions.

## Usage

Here's a quick guide on how to use the Financial Planner:

1. **Navigate the Sheets:** Use the tabs at the bottom of the Excel window to access different sections (e.g., "Budget," "Forecast," "Goals").
2. **Enter Your Data:**  Fill in the required information in the designated cells. Tooltips and clear labels are provided to guide you.
3. **Explore the Visualizations:** Charts and graphs automatically update to provide insights into your finances.
4. **Customize Settings:**  Adjust categories and settings to personalize the planner to your needs.

**(Optional: You can provide screenshots of specific sheets with annotations here to guide the user further)**

## 🛠️ Technical Details

### Architecture
The tool is built using a modular approach with these key components:
- Data Management Module
- Calculation Engines
- User Interface Forms
- Reporting System
- Dashboard Generator

### Code Structure
```
📁 VBA Complete/
├── 📄 FinancialPlanningTool.xlsm
```

## 📊 Features in Detail

### Budget Management
- Automatic expense categorization
- Monthly budget tracking
- Variance analysis
- Custom category creation

### Investment Tracking
- Portfolio performance monitoring
- Asset allocation visualization

## 🎨 Customization

### Adding Custom Categories
```vba
' Add new expense category
Sub AddCustomCategory(categoryName As String, budgetLimit As Double)
    ' Validate inputs
    If Len(categoryName) = 0 Then Exit Sub
    If budgetLimit < 0 Then Exit Sub
    
    ' Add to categories list
    With ThisWorkbook.Sheets("Categories")
        .Cells(.Rows.Count, 1).End(xlUp).Offset(1, 0).Value = categoryName
        .Cells(.Rows.Count, 2).End(xlUp).Offset(1, 0).Value = budgetLimit
    End With
End Sub
```

## 📈 Performance Optimizations

### Best Practices
- Optimized worksheet formulas
- Efficient VBA coding patterns
- Memory management techniques

## 🤝 Contributing
Contributions are welcome!

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments
- Financial formulas adapted from MSE100

---
Made with ❤️ by Xem0
