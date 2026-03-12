 ## What This Project Is

     JFIT is a personal training management platform for **James Ismail**, a personal
     trainer based at Goodlife Health Clubs, Richlands, Brisbane QLD, Australia.

     It has two portals:
     - **Trainer Dashboard** (`/dashboard`) — James manages clients, programmes, invoices,
     sessions, messages
     - **Client Portal** (`/portal`) — Clients view their workouts, progress, nutrition,
     habits, billing, messages

     It also has a **marketing website** (`/`, `/about`, `/services`, `/pricing`,
     `/contact`, `/book`) to attract new clients.

     ---

     ## Tech Stack

     - **Framework:** Next.js 16 (App Router, TypeScript)
     - **Styling:** Tailwind CSS v4 — no `tailwind.config.ts`, config is via CSS `@theme`
     in `globals.css`. `@import "tailwindcss"` must be line 1.
     - **Fonts:** Google Fonts loaded via `next/font/google` in `layout.tsx` (NOT via CSS
     @import — causes v4 conflict)
       - `Anton` → `--font-anton` (headings, numbers)
       - `Barlow Condensed` → `--font-barlow-condensed` (labels, nav, badges, buttons)
       - `Barlow` → `--font-barlow` (body text, inputs, descriptions)
     - **Icons:** `lucide-react`
     - **Auth:** Mock cookie auth currently. Cookie `jfit-auth=trainer` → dashboard,
     `jfit-auth=client` → portal. Ready for Clerk.
     - **Database:** Supabase (client set up, not yet connected — all data is mock)
     - **Payments:** Stripe (client + webhook handler built, not yet live)
     - **Email:** Resend (placeholder only)
     - **Booking:** Calendly (URL placeholder in `/book` page)

     ---

     ## Design System

     ### Colors

     ```
     Background (page):    #080808
     Background (card):    #111111
     Background (sidebar): #0D0D0D
     Text primary:         #ffffff
     Text muted:           rgba(255,255,255,0.65)
     Text faint:           rgba(255,255,255,0.45)
     Accent red:           #D62828   ← primary CTA, active nav, icons, buttons
     Green:                #22c55e   ← paid, confirmed, success
     Amber:                #f59e0b   ← pending, warning
     Gold:                 #c9a84c   ← Gold package badge ONLY
     Bronze:               #bf7b3e   ← Bronze package badge ONLY
     Platinum:             #c8c8c8   ← Platinum package badge ONLY
     Border:               rgba(255,255,255,0.08)
     ```

     ### Typography Rules

     - **H1 headings:** `font-family: var(--font-anton)`, `font-size: clamp(2rem, 5vw,
     3rem)`, `text-transform: uppercase`
     - **Section labels:** `font-family: var(--font-barlow-condensed)`, `font-size:
     0.875rem`, uppercase, `letter-spacing: 0.2em`, color red
     - **Body text:** `font-family: var(--font-barlow)`, `font-size: 1rem` (16px),
     `line-height: relaxed`
     - **Buttons:** Barlow Condensed, uppercase, `letter-spacing: widest`, `font-weight:
     700`
     - **Badges:** Barlow Condensed, uppercase, `font-size: 0.75rem`, `border-radius: 0`
     (sharp corners — on-brand)
     - **Stat values:** Anton font, `clamp(2rem, 3vw, 2.75rem)`

     ### Component Patterns

     Every page file defines a local color constant at the top:
     ```ts
     const C = {
       bgCard: "#111111",
       text: "#ffffff",
       textMuted: "rgba(255,255,255,0.65)",
       red: "#D62828",
       border: "rgba(255,255,255,0.08)",
       green: "#22c55e",
       amber: "#f59e0b",
     };
     ```

     **Cards:**
     ```tsx
     <div style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
       <div className="flex items-center gap-2.5 px-5 py-4" style={{ borderBottom: `1px
     solid ${C.border}` }}>
         {/* card header */}
       </div>
       <div className="p-5">{/* card body */}</div>
     </div>
     ```

     **Primary button:**
     ```tsx
     <button className="px-5 py-3 text-sm uppercase tracking-widest transition-opacity
     hover:opacity-80 cursor-pointer"
       style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 700,
     backgroundColor: C.red, color: C.text }}>
       Button Text
     </button>
     ```

     **Secondary button:**
     ```tsx
     <button className="px-4 py-3 text-sm uppercase tracking-widest transition-opacity
     hover:opacity-70 cursor-pointer"
       style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textMuted, border:
     `1px solid ${C.border}` }}>
       Button Text
     </button>
     ```

     **Input:**
     ```tsx
     <input className="w-full px-3 py-3 text-base outline-none"
       style={{ backgroundColor: "rgba(255,255,255,0.04)", border: `1px solid ${C.border}`,
      color: C.text, fontFamily: "var(--font-barlow)" }} />
     ```

     **Page layout wrapper:**
     ```tsx
     <div className="p-6 md:p-8 space-y-6">
     ```

     **Page header block (every page):**
     ```tsx
     <div>
       <p className="text-sm uppercase tracking-[0.2em] mb-1" style={{ fontFamily:
     "var(--font-barlow-condensed)", color: C.red }}>Section Label</p>
       <h1 className="uppercase leading-none" style={{ fontFamily: "var(--font-anton)",
     fontSize: "clamp(2rem, 5vw, 3rem)" }}>Page Title</h1>
       <p className="mt-2 text-base" style={{ fontFamily: "var(--font-barlow)", color:
     C.textMuted }}>Subtitle / description</p>
     </div>
     ```

     **Nav active state (sidebar links):**
     ```
     borderLeft: active ? "3px solid #D62828" : "3px solid transparent"
     backgroundColor: active ? "rgba(214,40,40,0.12)" : "transparent"
     color: active ? "#ffffff" : "rgba(255,255,255,0.6)"
     fontWeight: active ? 700 : 500
     ```

     **Status badge colors (inline, not using Badge component):**
     ```ts
     color: status === "paid" ? "#22c55e" : status === "overdue" ? "#D62828" : "#f59e0b"
     backgroundColor: status === "paid" ? "rgba(34,197,94,0.1)" : status === "overdue" ?
     "rgba(214,40,40,0.1)" : "rgba(245,158,11,0.1)"
     border: `1px solid ${status === "paid" ? "rgba(34,197,94,0.25)" : status === "overdue"
      ? "rgba(214,40,40,0.25)" : "rgba(245,158,11,0.25)"}`
     ```

     ---

     ## Reusable UI Components

     ### `Avatar` (`src/components/ui/Avatar.tsx`)
     ```tsx
     <Avatar name="Sarah Mitchell" size="md" />
     // sizes: sm (h-8 w-8), md (h-10 w-10), lg (h-14 w-14)
     // Shows initials in red on dark red square background (no border-radius)
     ```

     ### `Badge` (`src/components/ui/Badge.tsx`)
     ```tsx
     <Badge package="Gold">Gold</Badge>
     <Badge status="paid">Paid</Badge>
     <Badge variant="red">Custom</Badge>
     // variants: red | gold | bronze | platinum | green | muted | outline
     ```

     ### `StatCard` (`src/components/ui/StatCard.tsx`)
     ```tsx
     <StatCard label="Active Clients" value="6" sub="total roster" accent />
     // accent=true makes value red instead of white
     ```

     ---

     ## File Structure

     ```
     src/
     ├── app/
     │   ├── layout.tsx                          # Root layout — fonts loaded here
     │   ├── page.tsx                            # Homepage (use client, standalone
     nav/footer)
     │   ├── globals.css                         # Tailwind v4 import + @theme tokens
     │   ├── (marketing)/
     │   │   ├── layout.tsx                      # Shared Navbar + Footer
     │   │   ├── about/page.tsx
     │   │   ├── services/page.tsx
     │   │   ├── pricing/page.tsx
     │   │   ├── contact/page.tsx
     │   │   ├── book/page.tsx
     │   │   ├── privacy/page.tsx
     │   │   ├── terms/page.tsx
     │   │   └── disclaimer/page.tsx
     │   ├── (auth)/
     │   │   ├── layout.tsx                      # Centered single-column auth layout
     │   │   ├── sign-in/[[...sign-in]]/page.tsx
     │   │   └── sign-up/[[...sign-up]]/page.tsx
     │   ├── portal/                             # Client-facing
     │   │   ├── layout.tsx                      # PortalSidebar + mobile overlay
     │   │   ├── page.tsx
     │   │   ├── workouts/page.tsx
     │   │   ├── workouts/[workoutId]/page.tsx
     │   │   ├── progress/page.tsx
     │   │   ├── nutrition/page.tsx
     │   │   ├── habits/page.tsx
     │   │   ├── messages/page.tsx
     │   │   ├── sessions/page.tsx
     │   │   ├── billing/page.tsx
     │   │   └── settings/page.tsx
     │   ├── dashboard/                          # Trainer-facing
     │   │   ├── layout.tsx                      # DashboardSidebar + mobile overlay
     │   │   ├── page.tsx
     │   │   ├── clients/page.tsx
     │   │   ├── clients/[clientId]/page.tsx
     │   │   ├── programs/page.tsx
     │   │   ├── programs/new/page.tsx
     │   │   ├── exercises/page.tsx
     │   │   ├── messages/page.tsx
     │   │   ├── invoices/page.tsx
     │   │   ├── sessions/page.tsx
     │   │   ├── announcements/page.tsx
     │   │   └── settings/page.tsx
     │   └── api/
     │       ├── clients/route.ts                # GET (list/filter), POST (create)
     │       ├── messages/route.ts               # GET (by clientId), POST (send)
     │       ├── invoices/route.ts               # GET (list/filter + summary), POST
     (create)
     │       ├── sessions/route.ts               # GET, POST (request), PATCH
     (confirm/cancel)
     │       ├── measurements/route.ts           # GET (by clientId), POST (log)
     │       ├── workouts/log/route.ts           # POST (log set)
     │       ├── programs/route.ts               # GET (list), POST (create)
     │       └── webhooks/stripe/route.ts        # POST (invoice.paid, payment_failed,
     subscription events)
     ├── components/
     │   ├── layout/
     │   │   ├── Navbar.tsx                      # Fixed, transparent→solid on scroll,
     mobile menu
     │   │   ├── Footer.tsx                      # Logo, copyright year (dynamic), nav
     links
     │   │   ├── PortalSidebar.tsx               # Client nav, 9 links, active state,
     client footer
     │   │   └── DashboardSidebar.tsx            # Trainer nav, 9 links, badges, trainer
     footer
     │   ├── ui/
     │   │   ├── Avatar.tsx
     │   │   ├── Badge.tsx
     │   │   └── StatCard.tsx
     │   └── marketing/
     │       └── ContactForm.tsx
     ├── lib/
     │   ├── mock/data.ts                        # ALL mock data (replace with Supabase)
     │   ├── utils/formatters.ts                 # formatCurrency (AUD), formatDate,
     formatRelativeTime
     │   ├── utils/cn.ts                         # clsx + twMerge utility
     │   ├── supabase/client.ts                  # Supabase browser client (needs env vars)
     │   └── stripe/client.ts                    # Stripe server client (needs env vars)
     ├── types/index.ts                          # All TypeScript interfaces
     └── proxy.ts                                # Auth middleware (renamed from
     middleware.ts for Next.js 16)
     ```

     ---

     ## TypeScript Types (`src/types/index.ts`)

     ```ts
     type Role = "coach" | "trainer" | "client"
     type PackageTier = "Bronze" | "Gold" | "Platinum"
     type InvoiceStatus = "draft" | "sent" | "paid" | "overdue"
     type ProgramStatus = "active" | "completed" | "paused"

     interface Client {
       id: string; trainerId: string; firstName: string; lastName: string;
       email: string; phone?: string; avatarUrl?: string;
       package: PackageTier; waiverSigned: boolean;
       streak: number; lastActive: string; createdAt: string;
     }

     interface Exercise { id: string; name: string; sets: number; reps: string; }
     interface Workout { id: string; name: string; dayNumber: number; exercises:
     Exercise[]; }
     interface Program { id: string; name: string; durationWeeks: number; daysPerWeek:
     number; workouts: Workout[]; }

     interface Measurement {
       id: string; clientId: string; date: string;
       weight: number; bodyFatPercent?: number; waist?: number;
       chest?: number; arms?: number; thighs?: number; notes?: string;
     }

     interface Message {
       id: string; senderId: string; receiverId: string;
       senderName: string; content: string; read: boolean; sentAt: string;
     }

     interface Invoice {
       id: string; clientId: string; clientName: string; invoiceNumber: string;
       amount: number; status: InvoiceStatus; dueDate: string; createdAt: string;
       lineItems: { description: string; quantity: number; unitPrice: number }[];
     }

     interface SessionRequest {
       id: string; clientId: string; clientName: string;
       requestedAt: string; scheduledFor?: string;
       status: "pending" | "confirmed" | "cancelled"; notes?: string;
     }

     interface Announcement { id: string; trainerId: string; content: string; pinned:
     boolean; createdAt: string; }
     interface Habit { id: string; clientId: string; name: string; icon: string; }
     interface HabitLog { id: string; habitId: string; clientId: string; date: string;
     completed: boolean; }
     interface WorkoutLog { id: string; clientId: string; exerciseId: string; exerciseName:
      string; weight: number; repsCompleted: number; rpe: number; loggedAt: string; }
     interface ProgressPhoto { id: string; clientId: string; url: string; takenAt: string;
     notes?: string; }
     ```

     ---

     ## Mock Data (`src/lib/mock/data.ts`)

     ### Trainer
     ```
     James Ismail | jamesismail020@gmail.com | +61452404017 | @trainwitjames
     Location: Goodlife Health Clubs, Richlands, Brisbane QLD
     ```

     ### 6 Clients
     | Name | Package | Streak | Waiver |
     |------|---------|--------|--------|
     | Sarah Mitchell | Gold | 7 | ✓ (current portal user) |
     | Marcus Thompson | Platinum | 15 | ✓ |
     | Emma Wilson | Bronze | 3 | ✗ |
     | Jake Rodriguez | Gold | 22 | ✓ |
     | Olivia Chen | Platinum | 11 | ✓ |
     | Tom Nguyen | Bronze | 1 | ✗ |

     ### Programme: "12-Week Strength Builder"
     - 12 weeks, 3 days/week
     - **Day 1 — Upper Push A:** Bench Press 4×6-8, OHP 3×8-10, Incline DB Press 3×10-12,
     Lateral Raises 3×12-15, Tricep Pushdowns 3×12-15
     - **Day 2 — Lower Body:** Back Squat 4×6-8, Romanian DL 3×8-10, Leg Press 3×10-12,
     Walking Lunges 3×12ea, Calf Raises 4×15-20
     - **Day 3 — Upper Pull B:** Pull-Ups 4×6-8, Barbell Row 4×6-8, Cable Face Pull
     3×15-20, DB Curl 3×10-12, Hammer Curls 3×10-12

     ### 6 Invoices (JFIT-0012 to JFIT-0018)
     Sarah $600 paid, Marcus $800 paid, Emma $320 sent, Jake $600 overdue, Olivia $800
     paid, Tom $320 draft, Sarah $600 sent

     ### Nutrition (Sarah Mitchell)
     2018 cal/day · 155g protein · 210g carbs · 62g fat
     5 meals: Breakfast / Morning Snack / Lunch / Afternoon Snack / Dinner

     ### 4 Habits (Sarah)
     Drink 3L Water · 8 Hours Sleep · No Processed Food · Morning Walk

     ### Utility Formatters
     ```ts
     formatCurrency(amount)        // → "$600.00" (AUD)
     formatDate(dateString)        // → "1 March 2026" (en-AU)
     formatShortDate(dateString)   // → "1 Mar 2026"
     formatRelativeTime(isoString) // → "Today" | "Yesterday" | "3 days ago" | "2 weeks
     ago"
     formatWeight(kg, unit)        // → "67.9kg" or "149.6lbs"
     ```

     ---

     ## Business Info

     | Field | Value |
     |-------|-------|
     | Trainer | James Ismail |
     | Email | jamesismail020@gmail.com |
     | Phone | +61 452 404 017 |
     | Instagram | @trainwitjames |
     | Location | Goodlife Health Clubs, Richlands, Brisbane QLD |
     | Bronze package | $80/week · 2 sessions/week |
     | Gold package | $150/week · 3 sessions/week · nutrition guidance *(most popular)* |
     | Platinum package | $200/week · unlimited sessions · full nutrition plan · priority
     support |

     ---

     ## What's Built vs What's Pending

     ### Built ✅
     - Full marketing site (homepage, about, services, pricing, contact, book, privacy,
     terms, disclaimer)
     - Trainer dashboard (overview, clients, client detail, programmes, exercises,
     messages, invoices, sessions, announcements, settings)
     - Client portal (overview, workouts, workout logger, progress, nutrition, habits,
     messages, sessions, billing, settings)
     - All API routes (clients, messages, invoices, sessions, measurements, workout logs,
     programs, Stripe webhook)
     - Auth middleware (mock cookies, ready for Clerk swap)
     - StatCard, Badge, Avatar UI components
     - DashboardSidebar, PortalSidebar, Navbar, Footer layout components
     - ContactForm component
     - All TypeScript types

     ### Pending / Not Connected ❌
     - Supabase database (all data is mock — needs env vars + real queries)
     - Clerk auth (mock cookie only — middleware stub ready to swap)
     - Stripe live keys (webhook handler built, not live)
     - Resend email (placeholder in settings)
     - Calendly booking URL (placeholder in /book)
     - Progress photos upload
     - New programme builder (`/dashboard/programs/new` — page exists, not built out)
     - PDF download on invoices
     - Forgot password flow

     ---

     ## Environment Variables Needed

     ```env
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
     CLERK_SECRET_KEY=
     NEXT_PUBLIC_SUPABASE_URL=
     NEXT_PUBLIC_SUPABASE_ANON_KEY=
     SUPABASE_SERVICE_ROLE_KEY=
     STRIPE_SECRET_KEY=
     STRIPE_PUBLISHABLE_KEY=
     STRIPE_WEBHOOK_SECRET=
     RESEND_API_KEY=
     NEXT_PUBLIC_APP_URL=
     ```

     ---

     ## How to Run

     ```bash
     cd /home/tuilevita1/Projects/jfit
     npm install
     npm run dev
     # → http://localhost:3000

     # Demo login:
     # Trainer: jamesismail020@gmail.com (any password) → /dashboard
     # Client:  any-other@email.com (any password) → /portal
     ```
    




  ⎿  1 PostToolUse hook ran