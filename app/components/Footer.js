export default function Footer() {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 text-center text-white bg-black font-greatVibes">
      <p>&copy; {currentYear} made with ❣️. All rights reserved.</p>
    </footer>
  );
}
