import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 dark:border-gray-600 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="opacity-80 text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} SolStrive. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="hover:underline text-gray-600 dark:text-gray-400">
            Privacy
          </Link>
          <Link href="/terms" className="hover:underline text-gray-600 dark:text-gray-400">
            Terms
          </Link>
          <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:underline text-gray-600 dark:text-gray-400">
            X
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:underline text-gray-600 dark:text-gray-400">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}


