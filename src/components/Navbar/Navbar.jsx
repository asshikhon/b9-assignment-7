

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

<img className="absolute left-3 bottom-3 text-[#424247]" src="../../../images/Frame -1.svg" alt="" />

      </div>

      <a className="bg-[#0BE58A] p-2 rounded-[50%]" href=""><img src="../../../images/Frame-2.svg" alt="" /> </a>
        </div>
      </div>
        </div>
    );
};

export default Navbar;