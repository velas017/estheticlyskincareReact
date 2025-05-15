'use client';


const Navbar: React.FC = () => {


  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Stories', href: '/stories' },
    { label: 'Tech', href: '/tech' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      
    </nav>
  );
};

export default Navbar;
