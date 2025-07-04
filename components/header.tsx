/* eslint-disable react/jsx-no-undef */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Server,
  ChevronDown,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LanguageToggle, useLanguage } from "@/components/language-toggle";
import { CartDropdown } from "@/components/cart-dropdown";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");
  const { t } = useLanguage();

  const navigation = [
    { name: t("home"), href: "/" },
    {
      name: t("hosting"),
      href: "/shared",
      submenu: [
        {
          name: t("sharedHosting"),
          href: "/shared",
          description: "Perfect for personal websites and blogs",
        },
        {
          name: "Reseller Hosting",
          href: "/reseller",
          description: "Start your own hosting business",
        },
        {
          name: t("vpsHosting"),
          href: "/vps",
          description: "Scalable virtual private servers",
        },
        {
          name: t("dedicatedServers"),
          href: "/dedicated",
          description: "Maximum performance and control",
        },
        {
          name: t("cloudHosting"),
          href: "/cloud",
          description: "Elastic cloud infrastructure",
        },
      ],
    },
    {
      name: t("services"),
      href: "/services",
      submenu: [
        {
          name: "All Services",
          href: "/services",
          description: "Complete hosting solutions",
        },
        {
          name: t("cloudHosting"),
          href: "/cloud",
          description: "Scalable cloud infrastructure",
        },
        {
          name: "Domain Registration",
          href: "/domain",
          description: "Register your perfect domain",
        },
        {
          name: "SSL Certificates",
          href: "/ssl",
          description: "Secure your website",
        },
      ],
    },
    { name: t("domains"), href: "/domain" },
    { name: t("about"), href: "/about" },
    { name: t("pricing"), href: "/pricing" },
    { name: t("shop"), href: "/shop" },
    { name: t("support"), href: "/support" },
    { name: t("contact"), href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Don't show main header in dashboard
  if (isDashboard) {
    return null;
  }

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 gap-4 lg:gap-6 min-w-0">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-[45px] h-[45px] inline-block"
                >
                  <Image
                    src="/logo.png"
                    alt="alt"
                    width={45}
                    height={45}
                    layout="intrinsic"
                  />
                </motion.div>

                <div className="absolute -inset-1  rounded-full blur-sm group-hover:bg-blue-600/30 transition-all"></div>
              </div>
              <span className="text-3xl font-bold gradient-text">WAFRA</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <NavigationMenuItem>
                    {item.submenu ? (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            "text-gray-700 hover:text-blue-600 transition-colors bg-transparent hover:bg-blue-50/50",
                            isScrolled
                              ? "text-gray-700"
                              : "text-white hover:text-blue-200"
                          )}
                        >
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <motion.ul
                            className="grid w-80 gap-3 p-6 glass-morphism border border-gray-200/50 shadow-2xl"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {item.submenu.map((subItem) => (
                              <motion.li
                                key={subItem.name}
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                              >
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href}
                                    className="block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-md focus:bg-blue-50 focus:text-blue-600 group"
                                  >
                                    <div className="text-sm font-semibold leading-none text-gray-900 group-hover:text-blue-600 transition-colors">
                                      {subItem.name}
                                    </div>
                                    <p className="line-clamp-2 text-sm leading-snug text-gray-600 group-hover:text-gray-700">
                                      {subItem.description}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </motion.li>
                            ))}
                          </motion.ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "group inline-flex h-10 w-max items-center justify-center bg-transparent px-4 py-2 text-sm font-medium rounded-lg transition-all hover:text-blue-50/50 disabled:pointer-events-none disabled:opacity-50",
                            pathname === item.href &&
                              "text-blue-600 font-bold underline",
                            isScrolled
                              ? "text-gray-700 hover:text-blue-600"
                              : "text-white hover:text-blue-200 hover:bg-white/10"
                          )}
                        >
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                </motion.div>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageToggle />
            <CartDropdown />

            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      className="relative h-10 w-10 rounded-full"
                    >
                      <Avatar className="h-10 w-10 ring-2 ring-blue-500/20 hover:ring-blue-500/40 transition-all">
                        <AvatarImage
                          src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150"
                          alt="User"
                        />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </Button>
                  </motion.div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 glass-morphism border border-gray-200/50 shadow-2xl"
                  align="end"
                  forceMount
                >
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      <span>{t("dashboard")}</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/dashboard/settings"
                      className="flex items-center"
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300"
                    asChild
                  >
                    <Link href="/login">{t("login")}</Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* <Button
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300"
                    asChild
                  >
                    <Link href="/register">{t("getStarted")}</Link>
                  </Button> */}
                </motion.div>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "lg:hidden transition-all",
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden border-t glass-morphism border-gray-200/50 shadow-2xl overflow-y-auto max-h-[80vh]"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-3 py-3 text-base font-medium rounded-lg transition-all hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600",
                        pathname === item.href
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="pl-4 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                <div className="pt-4 border-t space-y-2">
                  <LanguageToggle />
                  <CartDropdown />
                  {isLoggedIn ? (
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      asChild
                    >
                      <Link href="/dashboard">{t("dashboard")}</Link>
                    </Button>
                  ) : (
                    <>
                      <Button
                        variant="ghost"
                        className="w-full justify-start"
                        asChild
                      >
                        <Link href="/login">{t("login")}</Link>
                      </Button>
                      <Button
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
                        asChild
                      >
                        <Link href="/register">{t("getStarted")}</Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
