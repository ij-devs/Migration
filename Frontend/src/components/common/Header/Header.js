 import "./Header.css";
 function Header({title, userName, empCode, division}){
    return (
      <header className="app-header">
  <div className="logo-box">
    <img src="/images/logo2.png" alt="Gregor Analytics" />
  </div>

  <div className="header-title">
    Contour Budget-(Q3 2025-2026)
  </div>
</header>
    )
}
export default Header;

