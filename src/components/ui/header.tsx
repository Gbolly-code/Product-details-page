"use client";
import Link from "next/link";

function IconSearch() {
  return (
    <svg className="w-7 h-7 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function IconUser() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function IconCart() {
  return (
    <svg className="w-7 h-7 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg className="w-7 h-7 md:w-[22px] md:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Brand */}
        <Link href="/" className="hidden md:block text-sm font-semibold tracking-widest">JOHN LEWIS & PARTNERS</Link>
        <Link href="/" className="md:hidden font-semibold tracking-[0.4em] flex flex-col gap-1">
          <span className="text-3xl leading-tight">JOHN LEWIS</span>
          <span className="text-base leading-tight pl-9">& PARTNERS</span>
        </Link>

        {/* Right side */}
        <nav className="flex items-center gap-6 text-sm text-black">
          {/* Mobile: menu + search + cart */}
          <div className="flex items-center gap-4 md:hidden">
        
            <button className="inline-flex items-center" aria-label="Search">
              <IconSearch />
            </button>
            <Link href="#" className="relative inline-flex items-center" aria-label="Cart">
              <IconCart />
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-black px-1 text-xs text-white">1</span>
            </Link>
            <button className="inline-flex items-center" aria-label="Menu">
              <IconMenu />
            </button>
          </div>

          {/* Desktop: full set */}
          <div className="hidden items-center gap-6 md:flex">
            <button className="inline-flex items-center gap-2" aria-label="Search">
              <IconSearch />
              <span>Search</span>
            </button>

            <button className="inline-flex items-center gap-1" aria-haspopup="menu" aria-expanded="false">
              <span>Categories</span>
              <IconChevronDown />
            </button>

            <Link href="#" className="inline-flex items-center gap-2">
              <IconUser />
              <span>Sign in</span>
            </Link>

            <button className="inline-flex items-center" aria-label="Wishlist">
              <IconHeart />
            </button>

            <Link href="#" className="relative inline-flex items-center" aria-label="Cart">
              <IconCart />
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-black px-1 text-xs text-white">1</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}


