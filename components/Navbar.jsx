
const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-white">HighDevs Pvt. Ltd.</div>
        <ul className="flex">
          <li className="ml-6"><Link href="/">Home</Link></li>
          <li className="ml-6"><Link href="/portfolio">Portfolio</Link></li>
          <li className="ml-6"><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
