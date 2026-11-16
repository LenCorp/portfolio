function Footer() {
  return (
    <footer className="px-5 pb-8 pt-5 md:px-6">
      <div className="glass-panel mx-auto flex max-w-6xl flex-col gap-2 rounded-2xl px-6 py-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="text-xs text-muted">© {new Date().getFullYear()} Nazrul M Sobirin. All rights reserved.</p>
        <a href="#top" className="text-xs font-medium text-foreground transition hover:text-accent">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default Footer
