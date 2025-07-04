'use client';

import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

const dashboardTranslations = {
  en: {
    // Navigation
    overview: 'Overview',
    websites: 'Websites',
    services: 'Services',
    billing: 'Billing',
    marketplace: 'Marketplace',
    settings: 'Settings',
    
    // Descriptions
    dashboardHome: 'Dashboard home and statistics',
    manageWebsites: 'Manage your hosted websites',
    hostingServices: 'View and manage hosting services',
    billingManagement: 'Invoices and payment management',
    addonsServices: 'Browse add-ons and services',
    accountSettings: 'Account and preferences',
    
    // Submenu items
    allWebsites: 'All Websites',
    addWebsite: 'Add Website',
    fileManager: 'File Manager',
    ftpAccounts: 'FTP Accounts',
    dnsManager: 'DNS Manager',
    phpMyAdmin: 'phpMyAdmin',
    allServices: 'All Services',
    resourceMonitor: 'Resource Monitor',
    backups: 'Backups',
    sslCertificates: 'SSL Certificates',
    performance: 'Performance',
    billingOverview: 'Overview',
    invoices: 'Invoices',
    paymentMethods: 'Payment Methods',
    usageReports: 'Usage Reports',
    
    // Dashboard
    dashboard: 'Dashboard',
    backToWebsite: 'Back to Website',
    searchDashboard: 'Search dashboard...',
    quickOverview: 'Quick Overview',
    activeSites: 'Active Sites',
    uptime: 'Uptime',
    storageUsed: 'Storage Used',
    needHelp: 'Need Help?',
    supportAvailable: '24/7 support available',
    contactSupport: 'Contact Support',
    
    // User menu
    profileSettings: 'Profile Settings',
    support: 'Support',
    
    // Dashboard Overview
    dashboardOverview: 'Dashboard Overview',
    welcomeBack: 'Welcome back! Here\'s what\'s happening with your hosting services.',
    activeWebsites: 'Active Websites',
    serverResources: 'Server Resources',
    monthlySpend: 'Monthly Spend',
    totalVisitors: 'Total Visitors',
    quickActions: 'Quick Actions',
    recentActivity: 'Recent Activity',
    resourceUsage: 'Resource Usage',
    allSystemsOperational: 'All Systems Operational',
    
    // Website Management
    websitesManagement: 'Websites',
    manageYourWebsites: 'Manage your hosted websites and applications',
    addNewWebsite: 'Add Website',
    siteTools: 'Site Tools',
    wordpressAdmin: 'WordPress Admin',
    
    // Services Management
    servicesManagement: 'Services',
    manageHostingServices: 'Manage your hosting services and resources',
    addService: 'Add Service',
    
    // Billing Management
    billingInvoices: 'Billing & Invoices',
    manageBillingInfo: 'Manage your billing information and view payment history',
    currentMonth: 'Current Month',
    nextPayment: 'Next Payment',
    totalSpent: 'Total Spent',
    paymentMethod: 'Payment Method',
    upcomingBills: 'Upcoming Bills',
    invoiceHistory: 'Invoice History',
    
    // Marketplace
    marketplace: 'Marketplace',
    discoverAddons: 'Discover and purchase add-ons to enhance your hosting experience',
    browseCategories: 'Browse Categories',
    featuredProducts: 'Featured Products',
    
    // Settings
    accountSettings: 'Settings',
    manageAccountSettings: 'Manage your account settings and preferences',
    profileInformation: 'Profile Information',
    password: 'Password',
    twoFactorAuth: 'Two-Factor Authentication',
    notificationPreferences: 'Notification Preferences',
    billingInformation: 'Billing Information',
    
    // Common actions
    save: 'Save',
    cancel: 'Cancel',
    edit: 'Edit',
    delete: 'Delete',
    add: 'Add',
    update: 'Update',
    create: 'Create',
    manage: 'Manage',
    view: 'View',
    download: 'Download',
    upload: 'Upload',
    
    // Status
    active: 'Active',
    inactive: 'Inactive',
    pending: 'Pending',
    completed: 'Completed',
    failed: 'Failed',
    
    // Time
    today: 'Today',
    yesterday: 'Yesterday',
    thisWeek: 'This Week',
    thisMonth: 'This Month',
    thisYear: 'This Year',
  },
  ar: {
    // Navigation
    overview: 'نظرة عامة',
    websites: 'المواقع',
    services: 'الخدمات',
    billing: 'الفواتير',
    marketplace: 'المتجر',
    settings: 'الإعدادات',
    
    // Descriptions
    dashboardHome: 'الصفحة الرئيسية للوحة التحكم والإحصائيات',
    manageWebsites: 'إدارة مواقعك المستضافة',
    hostingServices: 'عرض وإدارة خدمات الاستضافة',
    billingManagement: 'إدارة الفواتير والمدفوعات',
    addonsServices: 'تصفح الإضافات والخدمات',
    accountSettings: 'إعدادات الحساب والتفضيلات',
    
    // Submenu items
    allWebsites: 'جميع المواقع',
    addWebsite: 'إضافة موقع',
    fileManager: 'مدير الملفات',
    ftpAccounts: 'حسابات FTP',
    dnsManager: 'مدير DNS',
    phpMyAdmin: 'phpMyAdmin',
    allServices: 'جميع الخدمات',
    resourceMonitor: 'مراقب الموارد',
    backups: 'النسخ الاحتياطية',
    sslCertificates: 'شهادات SSL',
    performance: 'الأداء',
    billingOverview: 'نظرة عامة',
    invoices: 'الفواتير',
    paymentMethods: 'طرق الدفع',
    usageReports: 'تقارير الاستخدام',
    
    // Dashboard
    dashboard: 'لوحة التحكم',
    backToWebsite: 'العودة للموقع',
    searchDashboard: 'البحث في لوحة التحكم...',
    quickOverview: 'نظرة سريعة',
    activeSites: 'المواقع النشطة',
    uptime: 'وقت التشغيل',
    storageUsed: 'التخزين المستخدم',
    needHelp: 'تحتاج مساعدة؟',
    supportAvailable: 'الدعم متاح على مدار الساعة',
    contactSupport: 'اتصل بالدعم',
    
    // User menu
    profileSettings: 'إعدادات الملف الشخصي',
    support: 'الدعم',
    
    // Dashboard Overview
    dashboardOverview: 'نظرة عامة على لوحة التحكم',
    welcomeBack: 'مرحباً بعودتك! إليك ما يحدث مع خدمات الاستضافة الخاصة بك.',
    activeWebsites: 'المواقع النشطة',
    serverResources: 'موارد الخادم',
    monthlySpend: 'الإنفاق الشهري',
    totalVisitors: 'إجمالي الزوار',
    quickActions: 'إجراءات سريعة',
    recentActivity: 'النشاط الأخير',
    resourceUsage: 'استخدام الموارد',
    allSystemsOperational: 'جميع الأنظمة تعمل بشكل طبيعي',
    
    // Website Management
    websitesManagement: 'المواقع',
    manageYourWebsites: 'إدارة مواقعك المستضافة والتطبيقات',
    addNewWebsite: 'إضافة موقع',
    siteTools: 'أدوات الموقع',
    wordpressAdmin: 'إدارة ووردبريس',
    
    // Services Management
    servicesManagement: 'الخدمات',
    manageHostingServices: 'إدارة خدمات الاستضافة والموارد',
    addService: 'إضافة خدمة',
    
    // Billing Management
    billingInvoices: 'الفواتير والمدفوعات',
    manageBillingInfo: 'إدارة معلومات الفواتير وعرض تاريخ المدفوعات',
    currentMonth: 'الشهر الحالي',
    nextPayment: 'الدفعة التالية',
    totalSpent: 'إجمالي المصروف',
    paymentMethod: 'طريقة الدفع',
    upcomingBills: 'الفواتير القادمة',
    invoiceHistory: 'تاريخ الفواتير',
    
    // Marketplace
    marketplace: 'المتجر',
    discoverAddons: 'اكتشف واشتري الإضافات لتحسين تجربة الاستضافة',
    browseCategories: 'تصفح الفئات',
    featuredProducts: 'المنتجات المميزة',
    
    // Settings
    accountSettings: 'الإعدادات',
    manageAccountSettings: 'إدارة إعدادات حسابك وتفضيلاتك',
    profileInformation: 'معلومات الملف الشخصي',
    password: 'كلمة المرور',
    twoFactorAuth: 'المصادقة الثنائية',
    notificationPreferences: 'تفضيلات الإشعارات',
    billingInformation: 'معلومات الفواتير',
    
    // Common actions
    save: 'حفظ',
    cancel: 'إلغاء',
    edit: 'تعديل',
    delete: 'حذف',
    add: 'إضافة',
    update: 'تحديث',
    create: 'إنشاء',
    manage: 'إدارة',
    view: 'عرض',
    download: 'تحميل',
    upload: 'رفع',
    
    // Status
    active: 'نشط',
    inactive: 'غير نشط',
    pending: 'في الانتظار',
    completed: 'مكتمل',
    failed: 'فشل',
    
    // Time
    today: 'اليوم',
    yesterday: 'أمس',
    thisWeek: 'هذا الأسبوع',
    thisMonth: 'هذا الشهر',
    thisYear: 'هذا العام',
  }
};

type DashboardLanguage = keyof typeof dashboardTranslations;
type DashboardTranslationKey = keyof typeof dashboardTranslations.en;

interface DashboardLanguageContextType {
  language: DashboardLanguage;
  setLanguage: (lang: DashboardLanguage) => void;
  t: (key: DashboardTranslationKey) => string;
}

const DashboardLanguageContext = createContext<DashboardLanguageContextType | undefined>(undefined);

interface DashboardLanguageProviderProps {
  children: ReactNode;
}

export function DashboardLanguageProvider({ children }: DashboardLanguageProviderProps) {
  const [language, setLanguage] = useState<DashboardLanguage>('en');

  const t = (key: DashboardTranslationKey): string => {
    return dashboardTranslations[language][key] || dashboardTranslations.en[key] || key;
  };

  return (
    <DashboardLanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </DashboardLanguageContext.Provider>
  );
}

export function useDashboardLanguage() {
  const context = useContext(DashboardLanguageContext);
  if (context === undefined) {
    throw new Error('useDashboardLanguage must be used within a DashboardLanguageProvider');
  }
  return context;
}