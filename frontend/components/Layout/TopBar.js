import React from 'react';
import { useRouter } from 'next/router'


function TopBar() {
  const router = useRouter();
  const currentPath = router.asPath;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/">Security Developer Test</a>
        <div className="collapse navbar-collapse" style={{ marginLeft: '4rem' }} id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
            <a className={`nav-link ${currentPath === '/' ? 'text-warning' : 'text-white'}`} aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item" style={{ marginLeft: '1.5rem' }}>
              <a className={`nav-link ${currentPath === '/cv' ? 'text-warning' : 'text-white'}`} href="/cv">CV</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
