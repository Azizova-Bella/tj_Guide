'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path || 
           (path === '/' && pathname === '/') ||
           (path !== '/' && pathname?.startsWith(path));
  };

  const navLinks = [
    { href: "/", label: "Асосӣ" },
    { href: "/travel", label: "Саёҳат" },
  ];

  return (
    <div className="hidden md:flex space-x-8">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`pb-1 transition-colors duration-300 ${
            isActive(link.href)
              ? 'text-pink-600 border-b-2 border-pink-600 font-medium'
              : 'text-blue-900 hover:text-blue-700'
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}