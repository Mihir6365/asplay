import React from "react";
import { Container } from "react-bootstrap";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export default function Blog() {
  return (
    <div>
      <NavBar />
      <section className="blog_main">
        <Container className="blog_body">
          <h1>Coming soon!</h1>
        </Container>
      </section>
    </div>
  );
}
