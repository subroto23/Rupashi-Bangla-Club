import Navbar from "../../Layout/Header/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, useLoaderData } from "react-router-dom";
const NewsViews = () => {
  const newsData = useLoaderData();
  const { id, title, source } = newsData;
  return (
    <div>
      <Navbar />
      <Outlet />
      <div className="pt-20 pb-12 container mx-auto px-4 text-justify">
        <div>
          <h1>{(id, title, source)}</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio corporis
          dolorem rem voluptatem! Corporis, quos. Quis quia, commodi aut aliquam
          recusandae vero reiciendis accusantium similique? Repudiandae eos
          ducimus mollitia necessitatibus minus velit soluta consectetur
          voluptate quos ipsam, officiis iure nesciunt illo! Blanditiis
          excepturi minima, minus natus tempora quae aperiam nisi sapiente!
          Culpa consequatur laboriosam sunt vitae sit hic tempora facilis
          corrupti vero, corporis eveniet quas rem labore voluptatum? Iusto
          eligendi similique, eaque explicabo minus delectus tempore repellendus
          asperiores quasi, sequi sit, illo quo? Enim, facilis itaque.
          Consequatur labore aut eligendi ipsam porro ullam assumenda
          asperiores. Illo, in praesentium dolorum excepturi provident molestiae
          incidunt quidem dolor. Ducimus perferendis libero, exercitationem,
          praesentium, neque qui dignissimos adipisci earum eveniet voluptatum
          itaque? Excepturi exercitationem deserunt vel sint nulla? Qui
          obcaecati vero magnam iste, vitae totam rerum nam itaque sit debitis
          nostrum earum tenetur provident assumenda necessitatibus inventore,
          nisi reiciendis. Dicta, corporis! Mollitia culpa, aut officiis
          temporibus ad commodi? Quibusdam quam natus voluptates incidunt illo
          sint dolore error rerum provident amet? Quis, harum esse ab facilis
          commodi aut nemo iste, obcaecati reiciendis magnam voluptate deserunt.
          Illo nihil veritatis iure nobis excepturi, aliquid cumque officia,
          laboriosam repellat numquam totam vero necessitatibus tempore quam
          delectus dicta error animi laudantium! Eum, dignissimos nihil cumque
          rem iusto expedita saepe nobis impedit quaerat possimus cum
          voluptatibus tempora pariatur accusantium quibusdam quos illo sint
          eius quasi inventore tenetur ratione officia veniam? Reprehenderit
          sint non ullam sunt modi doloribus vero placeat, ipsum obcaecati atque
          distinctio nihil magni exercitationem tenetur similique mollitia
          necessitatibus officiis accusamus repudiandae et debitis eaque
          sapiente, sit cumque! Accusamus iusto deleniti aspernatur assumenda
          dignissimos quam minus suscipit in atque? Cupiditate nihil id ipsam
          asperiores nobis! Porro placeat quidem repellendus. Tenetur ullam
          molestias esse ab suscipit necessitatibus sequi nesciunt tempora neque
          repudiandae accusantium corrupti mollitia omnis, at quo pariatur
          voluptates voluptas cumque. Necessitatibus porro vitae saepe pariatur.
          Nisi veritatis beatae dolorum minima maxime? Quibusdam, accusamus
          natus suscipit maiores obcaecati reprehenderit ut aliquam soluta
          voluptatum magnam ratione recusandae laboriosam blanditiis ipsa
          commodi molestias sint distinctio labore laborum hic dolorem? Animi
          error blanditiis facere impedit aspernatur deleniti enim eveniet velit
          voluptatibus, eaque voluptas doloribus consequuntur voluptates quia
          esse, numquam ullam unde optio tempore? Sint ex aperiam nostrum
          nesciunt tempora distinctio itaque, corrupti cum minima molestias nisi
          pariatur nulla quod quos necessitatibus soluta id explicabo nihil
          natus! Totam, dolore aliquid! Similique fugiat iste sunt illum
          assumenda praesentium quis consectetur expedita animi dolorum! Facere
          possimus tempora blanditiis, modi cum accusamus dolorum tempore!
          Laudantium, perferendis doloremque. Architecto quis inventore neque
          cupiditate vel nobis fugit quo unde tempora natus, rerum eos, nemo
          omnis perspiciatis earum molestias sequi accusantium maiores dicta.
          Quisquam sit recusandae vel tempora nulla voluptatum aut vitae.
          Inventore exercitationem rerum cum quaerat ducimus minus dolores
          placeat voluptatum consequuntur error illum maxime, enim animi,
          incidunt sunt autem hic optio natus quos eum nesciunt ipsa. Quaerat,
          iure. Ratione quaerat voluptas iusto laborum libero perferendis et
          exercitationem voluptates, totam pariatur enim aliquid dolorum natus
          facere quo labore cum adipisci optio molestiae fugiat, nostrum
          consequuntur? Nisi, recusandae tempore?
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsViews;
