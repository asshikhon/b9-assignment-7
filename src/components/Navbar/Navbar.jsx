

const Navbar = () => {
    return (
        <div>
                  <div className="navbar lg:my-12 mx-auto pr-5 lg:pr-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-4">
              <li><a className="text-base text-[#424247]">Home</a></li>
              <li><a className="text-base text-[#424247]">Recipes</a></li>
              <li><a className="text-base text-[#424247]">About</a></li>
              <li><a className="text-base text-[#424247]">Search</a></li>
            </ul>
          </div>
      
          <a className="text-2xl text-font-color lg:text-4xl font-extrabold" href="">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-11">
      
            <li><a className="text-base text-[#424247]">Home</a></li>
            <li><a className="text-base text-[#424247]">Recipes</a></li>
            <li><a className="text-base text-[#424247]">About</a></li>
            <li><a className="text-base text-[#424247]">Search</a></li>
          </ul>
        </div>
        <div className="navbar-end gap-3 lg:gap-6">
      
      <div className="relative">
<input className="bg-[#150b2b0d] rounded-[50px] w-[120px] lg:w-auto h-12 pl-10" type="text" placeholder=" Search"/>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute bottom-3 left-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>



      </div>

      <a className="bg-[#0BE58A] p-2 rounded-[50%]" href=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg> </a>
        </div>
      </div>
        </div>
    );
};

export default Navbar;