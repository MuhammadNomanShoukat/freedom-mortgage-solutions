import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

import NavbarMenu from "../navbar/navbar.components";
import Footer from "../footer/footer.component";
import ScrollUp from "../scroll-up/scroll-up.component";

function BaseLayout({ children }) {
  return (
    <Fragment>
      <Container fluid className="p-0">
        <NavbarMenu />
        {children}
        <Footer />
      </Container>
      <ScrollUp />
    </Fragment>
  );
}

export default BaseLayout;
