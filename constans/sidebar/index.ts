import {
  IconDashboard,
  IconChartBar,
  IconFolder,
  IconSitemap,
  IconCategory2,
  IconRulerMeasure,
  IconBuildingFactory2,
  IconUsersGroup,
  IconBuildingWarehouse,
  IconDatabaseDollar,
  IconRosetteDiscount,
  IconCreditCardPay,
  IconSettings,
  IconHelp,
  IconSearch,
  IconDatabase,
  IconReport,
  IconTools
} from '@tabler/icons-react'

export const SIDEBAR_DATA = {
  user: {
    name: 'Rama',
    email: 'superwahyoe@gmail.com',
    avatar: '/avatars/shadcn.jpg'
  },

  navMain: [
    // ======================
    // CORE (FREE)
    // ======================
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: IconDashboard
    },

    // ======================
    // ANALYTICS (PRO)
    // ======================
    {
      title: 'Analytics',
      url: '/analytics',
      icon: IconChartBar,
      pro: true // 🔒 PRO
    },

    // ======================
    // MASTER DATA (FREE)
    // ======================
    {
      title: 'Master Data',
      icon: IconFolder,
      items: [
        { title: 'Items', url: '/master/items', icon: IconSitemap },
        { title: 'Categories', url: '/master/categories', icon: IconCategory2 },
        { title: 'Units of Measure', url: '/master/uom', icon: IconRulerMeasure },
        { title: 'Suppliers', url: '/master/suppliers', icon: IconBuildingFactory2 },
        { title: 'Customers', url: '/master/customers', icon: IconUsersGroup },
        { title: 'Warehouses', url: '/master/warehouses', icon: IconBuildingWarehouse }
      ]
    },

    // ======================
    // TRANSACTIONS (FREE)
    // ======================
    {
      title: 'Transactions',
      icon: IconDatabaseDollar,

      items: [
        { title: 'Sales Order', url: '/transactions/sales', icon: IconRosetteDiscount },
        {
          title: 'Purchase Order',
          url: '/transactions/purchase',
          icon: IconCreditCardPay
        },
        { title: 'Inventory In', url: '/transactions/in', icon: IconBuildingWarehouse },
        {
          title: 'Inventory Out',
          url: '/transactions/out',
          icon: IconBuildingWarehouse
        }
      ]
    },

    // ======================
    // REPORTS (PRO)
    // ======================
    {
      title: 'Reports',
      icon: IconReport,
      pro: true, // 🔒 PRO
      items: [
        {
          title: 'Sales Report',
          url: '/reports/sales',
          icon: IconRosetteDiscount,
          pro: true
        },
        {
          title: 'Inventory Report',
          url: '/reports/inventory',
          icon: IconDatabase,
          pro: true
        },
        {
          title: 'Profitability',
          url: '/reports/profitability',
          icon: IconDatabaseDollar,
          pro: true
        },
        {
          title: 'Stock Aging',
          url: '/reports/stock-aging',
          icon: IconBuildingWarehouse,
          pro: true
        }
      ]
    },

    // ======================
    // TOOLS (MIX)
    // ======================
    {
      title: 'Tools',
      icon: IconTools,
      items: [
        {
          title: 'Import Data',
          url: '/tools/import',
          icon: IconDatabase // FREE
        },
        {
          title: 'Bulk Update',
          url: '/tools/bulk-update',
          icon: IconCreditCardPay,
          pro: true // 🔒 PRO
        },
        {
          title: 'Barcode Generator',
          url: '/tools/barcode-generator',
          icon: IconBuildingWarehouse // FREE
        }
      ]
    }
  ],

  // ======================
  // SECONDARY (FREE)
  // ======================
  navSecondary: [
    { title: 'Settings', url: '/settings', icon: IconSettings },
    { title: 'Get Help', url: '/help', icon: IconHelp },
    { title: 'Search', url: '/search', icon: IconSearch }
  ]
}
