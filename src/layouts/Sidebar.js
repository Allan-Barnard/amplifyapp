import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Home",
    href: "/starter",
    icon: "bi bi-house",
  },
  {
    title: "AI/ML",
    href: "/aiml",
    icon: "bi bi-activity",
  },
  {
    title: "Apps APP-DEV",
    href: "/appdev",
    icon: "bi bi-app-indicator",
  },
  {
    title: "Client ACME",
    href: "/acme",
    icon: "bi bi-cart",
  },
  {
    title: "Client SMITHCO",
    href: "/smithco",
    icon: "bi bi-hammer",
  },
  {
    title: "Template Sample 1",
    href: "/templatesample1",
    icon: "bi bi-house",
  },  
  {
    title: "Template Sample 2",
    href: "/templatesample2",
    icon: "bi bi-app-indicator",
  },
  {
    title: "Template Sample 3",
    href: "/templatesample3",
    icon: "bi bi-cart",
  },
  {
    title: "Template Sample 4",
    href: "/TemplateSample4",
    icon: "bi bi-hammer",
  } 
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
