import { Link } from "react-router-dom";

function Header({ breadCrumbs, title }) {
  return (
    <header
      className="bg-cover bg-center h-[300px] flex justify-center lg:mt-16"
      style={{
        backgroundImage:
          "linear-gradient(rgba(24,29,56,0.7), rgba(24,29,56,0.7)), url('/src/assets/img/carousel-1.jpg')",
      }}
    >
      <nav className="text-center inline-block">
        <h1 className="lg:text-8xl md:text-4xl text-3xl font-heebo font-bold text-white mt-20">
          {title}
        </h1>
        {breadCrumbs.map((crumb, i) => {
          return (
            <span key={i} className="text-white">
              {crumb.href ? (
                <Link to="/{crumb.href}">{crumb.label}</Link>
              ) : (
                <span>{crumb.label}</span>
              )}
              {i < breadCrumbs.length - 1 && " / "}
            </span>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;
