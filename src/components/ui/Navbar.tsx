import { Link } from "react-router";
import { Search, PenLine } from "lucide-react";

function Navbar () {
    return (
        <header className="sticky top-0 z-40 border-b border-border/60 glass">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="group flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-linear-to-br from-primary to-accent-cyan shadow-[0_0_20px_-4px] shadow-primary/60 transition-transform group-hover:scale-105">
            <PenLine className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-semibold tracking-tight">
            Ember<span className="text-gradient-accent">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {[
            { to: "/", label: "Home" },
            { to: "/explore", label: "Explore" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-foreground bg-surface-elevated" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-surface"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="#"
            className="rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
          >
            Authors
          </a>
          <a
            href="#"
            className="rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
          >
            About
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </Link>
          <Link
            to="/"
            className="hidden h-9 items-center rounded-full border border-border bg-surface px-4 text-sm font-medium text-foreground transition-colors hover:border-primary/40 sm:inline-flex"
          >
            Sign in
          </Link>
          <Link
            to="/"
            className="h-9 w-9 overflow-hidden rounded-full border border-border ring-2 ring-transparent transition-all hover:ring-primary/40"
            aria-label="Profile"
          >
            <img
              src="https://i.pravatar.cc/80?img=5"
              alt=""
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
      </div>
    </header>
    )
};

export default Navbar;