export function Footer() {
  return (
    <footer className="bg-[theme(colors.paper-light)] mt-20 border-t border-gray-200 py-6 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} My Project
    </footer>
  );
}
