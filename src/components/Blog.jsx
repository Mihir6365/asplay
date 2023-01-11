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
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo est,
            necessitatibus dolores excepturi amet accusamus error voluptatibus!
            Culpa rerum illum, porro nesciunt omnis, ipsam quidem aliquam
            delectus debitis sit, reprehenderit sed. Explicabo odio vel, ex aut
            recusandae placeat cumque a est amet, quaerat ipsam distinctio
            assumenda temporibus molestias, ab enim pariatur magni neque
            necessitatibus. Rerum porro, earum repellat, sequi pariatur magni
            exercitationem praesentium nesciunt modi, hic doloremque odio quasi
            ab iste consequuntur quod dignissimos ullam illo sunt! Quaerat
            fugiat, cum ipsum, ab perferendis commodi dolores voluptate cumque
            numquam sed est optio ad nemo perspiciatis. Nihil reprehenderit
            architecto vitae ea animi! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Minima nam, doloremque ad laborum dolore quaerat
            quos sed optio aspernatur laudantium quas vitae dolorum animi fugit
            cumque vero distinctio reprehenderit iste asperiores saepe ipsam
            omnis, aliquid quibusdam? Eaque ratione voluptatum tenetur maxime
            molestias molestiae id sunt laudantium vitae ducimus earum amet,
            temporibus aspernatur, cupiditate dignissimos obcaecati eius rerum
            asperiores doloremque ullam? Architecto explicabo quos sit ducimus
            quisquam? Porro, eligendi neque.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            natus similique cumque atque non numquam vitae accusamus, itaque a
            quibusdam fuga at iure esse dolores iusto rerum consectetur sequi
            explicabo deserunt asperiores laudantium debitis! Nemo reprehenderit
            distinctio modi exercitationem laboriosam nulla! Cum suscipit
            voluptas tenetur consequatur deleniti voluptate nemo facere
            corrupti, non fugit molestiae animi veritatis sed exercitationem,
            magnam cupiditate illo magni optio id autem! Nobis aliquam
            voluptates nesciunt alias fuga quas voluptatum sed fugiat, iusto
            odio!
          </p>
        </Container>
      </section>
    </div>
  );
}
