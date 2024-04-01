const NavbarAdmin = () => {
  return (
    <header className="w-full md:w-[32rem] h-20 fixed rounded-t-3xl md:rounded-t-none md:rounded-br-3xl bottom-0 md:top-0 flex bg-primary-dark justify-center md:justify-start items-center px-4 md:px-8 z-50 shadow-lg">
      <ul className="flex space-x-12 items-center">
        <li className="my-6">
          <a
            href="/"
            className="text-lg text-white hover:text-slate-300 font-semibold duration-500"
          >
            Home
          </a>
        </li>
        <li className="my-6">
          <a
            href="/admin/aplikasi"
            className="text-lg text-white hover:text-slate-300 font-semibold duration-500"
          >
            Aplikasi
          </a>
        </li>
        <li className="my-6">
          <a
            href="/admin/user"
            className="text-lg text-white hover:text-slate-300 font-semibold duration-500"
          >
            Pengguna
          </a>
        </li>
        <li className="my-6">
          <a
            href="/admin/transaksi"
            className="text-lg text-white hover:text-slate-300 font-semibold duration-500"
          >
            Transaksi
          </a>
        </li>
      </ul>
    </header>
  );
};

export default NavbarAdmin;
