import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" onClick={closeMenu}>
            <svg width="120" height="60" viewBox="0 0 4061 2050" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
              animation: 'logoAnimation 3s ease forwards'
            }}>
              <style>
                {`
                  @keyframes logoAnimation {
                    from { opacity: 0; }
                    to { opacity: 1; }
                  }
                  .nav-logo path {
                    stroke-dashoffset: 22908.274191611294px;
                    stroke-dasharray: 22908.274191611294px;
                    animation: LineAnimation 3s ease forwards;
                  }
                  .nav-logo path:nth-child(2) {
                    animation-delay: 0s;
                  }
                  .nav-logo path:nth-child(3) {
                    animation-delay: 0.8s;
                  }
                  .nav-logo path:nth-child(4) {
                    animation-delay: 1s;
                  }
                  .nav-logo path:nth-child(5) {
                    animation-delay: 1.5s;
                  }
                  @keyframes LineAnimation {
                    to {
                      stroke-dashoffset: 0px;
                    }
                  }
                `}
              </style>
              <path d="M 820.38 575.009
C 1050.71 343.675, 1367.58 0, 792.38 38.5086
C 73.3795 156.009, -129.121 555.009, 314.879 740.509
C 758.879 926.009, 1039.88 1015.51, 890.88 1322.01
C 741.88 1628.51, -174.621 2313.51, 30.8795 1839.01
C 195.279 1459.41, 766.38 1027.18, 1031.38 858.509
C 1131.71 753.509, 1306.48 603.109, 1202.88 841.509
C 1244.38 753.675, 1274.88 625.109, 1064.88 813.509
C 802.38 1049.01, 1111.38 1042.51, 1255.88 795.009
C 1215.21 866.842, 1162.88 990.809, 1278.88 912.009
C 1394.88 833.209, 1433.21 784.175, 1437.88 769.509
C 1400.38 818.675, 1328.68 920.209, 1341.88 933.009
C 1358.38 949.009, 1488.88 785.509, 1491.38 813.509
C 1493.88 841.509, 1448.88 914.509, 1460.88 933.009
C 1472.88 951.509, 1617.88 814.509, 1619.88 828.009
C 1621.88 841.509, 1524.38 982.509, 1706.38 912.009
C 1888.38 841.509, 1925.38 814.509, 1865.38 788.509
C 1805.38 762.509, 1642.38 975.009, 1798.38 954.009
C 1954.38 933.009, 2081.88 799.509, 2002.38 806.509
C 1922.88 813.509, 1876.88 963.009, 1955.38 944.509
C 2018.18 929.709, 2121.55 846.342, 2165.38 806.509
C 2135.71 844.842, 2078.48 923.809, 2086.88 933.009
C 2095.28 942.209, 2154.71 876.175, 2183.38 842.009
L 2367.88 820.509" stroke="#c4a574" strokeWidth="50" />
              <path d="M 3793.88 185.009
L 3805.38 144.009
L 1917.38 252.009
C 1732.38 250.009, 1398.28 227.909, 1541.88 155.509
C 1721.38 65.0086, 2471.38 71.0086, 2595.38 252.009
C 2719.38 433.009, 2887.38 494.009, 2296.88 1537.01
C 2494.21 1112.84, 2895.38 268.909, 2921.38 286.509
L 2947.38 300.509" stroke="#c4a574" strokeWidth="50" />
              <path d="M 2488.88 640.509
L 2478.88 601.509
L 3008.38 581.009
L 2981.88 569.009" stroke="#c4a574" strokeWidth="50" />
              <path d="M 2941.38 866.009
L 2970.88 830.509
C 2995.71 770.509, 3018.38 683.109, 2936.38 757.509
C 2833.88 850.509, 2738.88 965.509, 2860.38 908.009
C 2957.58 862.009, 2999.55 823.509, 3008.38 813.509
C 2994.05 839.675, 2979.68 895.409, 3036.88 881.009
C 3094.08 866.609, 3185.21 783.175, 3218.88 752.009
C 3188.21 793.175, 3119.88 896.009, 3129.88 908.009
C 3142.38 923.009, 3193.38 772.009, 3265.88 791.009
L 3437.88 776.009
C 3394.88 825.175, 3326.78 920.409, 3398.38 908.009
C 3487.88 892.509, 3566.38 794.009, 3447.38 769.509
L 3513.88 803.009
L 3639.88 795.509
C 3606.55 838.342, 3556.38 920.809, 3622.38 908.009
C 3704.88 892.009, 3797.38 740.509, 3652.88 795.509
L 3725.38 783.509
C 3757.05 786.342, 3827.68 788.809, 3856.88 776.009
C 3904.05 750.509, 3991.28 713.509, 3962.88 769.509
C 3971.05 750.509, 3971.48 722.309, 3907.88 761.509
C 3828.38 810.509, 3776.38 895.509, 3856.88 878.509
C 3921.28 864.909, 4019.05 777.509, 4059.88 735.509
C 3917.38 977.342, 3687.48 1413.21, 3907.88 1222.01" stroke="#c4a574" strokeWidth="50" />
            </svg>
          </Link>
        </div>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} onClick={(e) => e.target === e.currentTarget && closeMenu()}>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMenu}>About</Link></li>
          <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''} onClick={closeMenu}>Services</Link></li>
          <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''} onClick={closeMenu}>Projects</Link></li>
          <li><Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''} onClick={closeMenu}>Blog</Link></li>
          <li><Link to="/social" className={location.pathname === '/social' ? 'active' : ''} onClick={closeMenu}>Social</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;