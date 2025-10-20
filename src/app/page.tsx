"use client";

import { Header } from "@/components";

export default function Home() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 17, 15];
  return (
    <>
      <Header />
      <ul>
        {arr.map(() => {
          return (
            <li key={crypto.randomUUID()}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cupiditate, consequatur velit harum necessitatibus, magnam
                dolores exercitationem quas commodi, architecto quaerat corrupti
                hic alias amet eaque possimus repellendus laborum maiores
                distinctio. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Nesciunt tempora quos fugit quidem nostrum est autem nam
                ad obcaecati molestias consequuntur illo, inventore iure ratione
                accusamus saepe officiis doloremque aut? Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Ipsa nostrum delectus
                laborum cupiditate exercitationem, facilis, maxime voluptates
                consequatur earum saepe totam asperiores at iste, doloribus
                molestias eum distinctio reprehenderit quos? Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Reprehenderit, nisi
                fugiat nam labore culpa, vel aspernatur amet aperiam est
                pariatur quis cupiditate veniam magni, veritatis magnam nulla
                quibusdam quo error.
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
