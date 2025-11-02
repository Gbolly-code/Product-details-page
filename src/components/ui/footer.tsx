import Link from "next/link";

function IconFacebook() {
  return (
    <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.2V12h2.2V9.8c0-2.2 1.3-3.4 3.3-3.4.95 0 1.95.17 1.95.17v2.14h-1.1c-1.1 0-1.44.68-1.44 1.38V12h2.45l-.39 2.9h-2.06v7A10 10 0 0 0 22 12z"/>
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.25" />
    </svg>
  );
}
function IconTwitter() {
  return (
    <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.89-.53 1.57-1.38 1.89-2.39-.83.49-1.76.85-2.74 1.05A4.15 4.15 0 0 0 12 8.14c0 .32.04.63.1.93-3.45-.17-6.5-1.83-8.55-4.34a4.19 4.19 0 0 0-.56 2.09 4.15 4.15 0 0 0 1.85 3.45 4.1 4.1 0 0 1-1.88-.52v.05c0 2.02 1.42 3.7 3.3 4.08a4.2 4.2 0 0 1-1.86.07 4.16 4.16 0 0 0 3.88 2.9A8.33 8.33 0 0 1 2 19.54a11.74 11.74 0 0 0 6.29 1.84c7.55 0 11.68-6.32 11.68-11.8l-.01-.54A8.46 8.46 0 0 0 22.46 6z"/>
    </svg>
  );
}
function IconYoutube() {
  return (
    <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="2" y="5" width="20" height="14" rx="3" ry="3" />
      <polygon points="10 9 16 12 10 15 10 9" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Top area: left (brand/newsletter/social) and right (links) */}
        <div className="lg:flex lg:items-start lg:justify-between lg:gap-12">
          {/* Left column */}
          <div className="space-y-6 lg:max-w-md">
          <div>
            <div className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-none tracking-wide">JOHN LEWIS</div>
            <div className="mt-1 text-sm md:text-base lg:text-lg font-semibold ml-5 tracking-[0.3em] uppercase text-zinc-700">& Partners</div>
          </div>
          <div className="flex items-center justify-between gap-6 border-b border-zinc-300 pb-0">
            <span className="text-base md:text-lg lg:text-xl text-zinc-600">Get latest offers to your inbox</span>
            <button className="inline-flex h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-md bg-black text-white text-xl md:text-2xl lg:text-3xl">›</button>
          </div>
          <div className="flex items-center gap-3">
            <button className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full border border-zinc-300 bg-white text-black flex items-center justify-center"><IconFacebook/></button>
            <button className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full border border-zinc-300 bg-white text-black flex items-center justify-center"><IconInstagram/></button>
            <button className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full border border-zinc-300 bg-white text-black flex items-center justify-center"><IconTwitter/></button>
            <button className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full border border-zinc-300 bg-white text-black flex items-center justify-center"><IconYoutube/></button>
          </div>
          </div>

          {/* Right column: links */}
          <div className="mt-8 grid grid-cols-2 gap-12 lg:mt-0 lg:grid-cols-3 lg:items-start lg:text-left">
          <div>
            <div className="mb-3 text-lg md:text-xl lg:text-2xl font-semibold">Shop</div>
            <ul className="space-y-2 text-base md:text-base lg:text-lg text-zinc-600">
              {['My account','Login','Wishlist','Cart'].map((t)=> (
                <li key={t}><Link href="#" className="hover:underline">{t}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-3 text-lg md:text-xl lg:text-2xl font-semibold">Information</div>
            <ul className="space-y-2 text-base md:text-base lg:text-lg text-zinc-600">
              {['Shipping Policy','Returns & Refunds','Cookies Policy','Frequently asked'].map((t)=> (
                <li key={t}><Link href="#" className="hover:underline">{t}</Link></li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-3 text-lg md:text-xl lg:text-2xl font-semibold">Company</div>
            <ul className="space-y-2 text-base md:text-base lg:text-lg text-zinc-600">
              {['About us','Privacy Policy','Terms & Conditions','Contact Us'].map((t)=> (
                <li key={t}><Link href="#" className="hover:underline">{t}</Link></li>
              ))}
            </ul>
          </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-dashed border-zinc-300 pt-6 text-base md:text-lg lg:text-xl text-zinc-600">
          <div className="flex flex-col gap-3">
            <span>© John Lewis plc 2001 - 2024</span>
            <div className="ml-auto flex items-center gap-4">
              <button className="inline-flex items-center gap-2">
                <span aria-hidden>
                  {/* US flag SVG to avoid emoji rendering issues */}
                  <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" viewBox="0 0 19 10" xmlns="http://www.w3.org/2000/svg">
                    <rect width="19" height="10" fill="#B22234"/>
                    <g fill="#FFFFFF">
                      <rect y="1" width="19" height="1"/>
                      <rect y="3" width="19" height="1"/>
                      <rect y="5" width="19" height="1"/>
                      <rect y="7" width="19" height="1"/>
                      <rect y="9" width="19" height="1"/>
                    </g>
                    <rect width="8" height="6" fill="#3C3B6E"/>
                    <g fill="#FFFFFF">
                      <circle cx="1" cy="1" r=".3"/>
                      <circle cx="3" cy="1" r=".3"/>
                      <circle cx="5" cy="1" r=".3"/>
                      <circle cx="7" cy="1" r=".3"/>
                      <circle cx="2" cy="2" r=".3"/>
                      <circle cx="4" cy="2" r=".3"/>
                      <circle cx="6" cy="2" r=".3"/>
                      <circle cx="1" cy="3" r=".3"/>
                      <circle cx="3" cy="3" r=".3"/>
                      <circle cx="5" cy="3" r=".3"/>
                      <circle cx="7" cy="3" r=".3"/>
                      <circle cx="2" cy="4" r=".3"/>
                      <circle cx="4" cy="4" r=".3"/>
                      <circle cx="6" cy="4" r=".3"/>
                    </g>
                  </svg>
                </span>
                <span>English</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <button className="inline-flex items-center gap-2">
                <span>USD</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


