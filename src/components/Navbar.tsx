'use client';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/components/ui/resizable-navbar';
import { useState } from 'react';
import { InteractiveHoverButton } from './ui/interactive-hover-button';

export function NavbarDemo() {
  const navItems = [
    {
      name: 'Features',
      link: '#features',
    },
    {
      name: 'Integrations',
      link: '#integrations',
    },
    {
      name: 'Pricing',
      link: '#pricing',
    },
    {
      name: 'Contact',
      link: '#contact',
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className=" w-full mt-14 sticky top-0 z-50">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} className="!text-gray-700" />
          <div className="flex items-center gap-4 text-gray-700">
            <button>
              <InteractiveHoverButton>Book a call</InteractiveHoverButton>
            </button>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-gray-700 "
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 text-gray-700">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
