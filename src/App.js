import { useEffect, useMemo } from "react";
import "./styles.css";

export default function App() {
  const stickySections = useMemo(
    () => [...document.querySelectorAll(".sticky")],
    []
  );

  function transform(section) {
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector(".scroll_section");

    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;

    percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;

    scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
  }

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      for (let i = 0; i < stickySections.length; i++) {
        transform(stickySections[i]);
      }
    });

    // return () => window.removeEventListener("scroll", () => {});
  }, [stickySections]);

  return (
    <main>
      <section>
        <div className="container">
          <h1>Hybrid Scroll</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            dignissimos saepe veritatis vero quae deleniti blanditiis, dolorum
            error voluptas officia labore recusandae aspernatur nobis tempore
            ipsum? Illum commodi natus fugit!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem modi
            cumque fugiat aliquid at aut dolore tenetur atque, officia quis
            recusandae architecto necessitatibus odit enim dolorem. Corporis
            illum quo quod.
          </p>
        </div>
      </section>

      <div className="sticky_parent">
        <div className="sticky">
          <div className="scroll_section">
            <img src="https://placehold.co/200x300" alt="/" />
            <img src="https://placehold.co/300x400" alt="/" />
            <img src="https://placehold.co/200x300" alt="/" />
            <img src="https://placehold.co/200x300" alt="/" />
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            dignissimos saepe veritatis vero quae deleniti blanditiis, dolorum
            error voluptas officia labore recusandae aspernatur nobis tempore
            ipsum? Illum commodi natus fugit!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem modi
            cumque fugiat aliquid at aut dolore tenetur atque, officia quis
            recusandae architecto necessitatibus odit enim dolorem. Corporis
            illum quo quod.
          </p>
        </div>
      </section>

      <div className="sticky_parent">
        <div className="sticky">
          <div className="scroll_section">
            <img src="https://placehold.co/200x300" alt="/" />
            <img src="https://placehold.co/200x300" alt="/" />
            <img src="https://placehold.co/200x300" alt="/" />
            <img src="https://placehold.co/200x300" alt="/" />
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <h1>End</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            dignissimos saepe veritatis vero quae deleniti blanditiis, dolorum
            error voluptas officia labore recusandae aspernatur nobis tempore
            ipsum? Illum commodi natus fugit!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem modi
            cumque fugiat aliquid at aut dolore tenetur atque, officia quis
            recusandae architecto necessitatibus odit enim dolorem. Corporis
            illum quo quod.
          </p>
        </div>
      </section>
    </main>
  );
}
