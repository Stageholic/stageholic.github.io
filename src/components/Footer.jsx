export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400 dark:text-gray-500">
        <p>&copy; {new Date().getFullYear()} Stageholic. All rights reserved.</p>
        <p>
          Built with React &middot; Hosted on GitHub Pages
        </p>
      </div>
    </footer>
  );
}
