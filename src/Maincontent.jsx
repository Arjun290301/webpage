import img1 from './../assets/img/bg-showcase-1.jpg'
import img2 from './../assets/img/bg-showcase-2.jpg'
import img3 from './../assets/img/bg-showcase-3.jpg'
export const Maincontent = () => {
    let data = [
      {
        img: `${img1}`,
        text: 'Fully Responsive Design',
        discription:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"
      },
      {
        img: `${img2}`,
        text: 'Updated For Bootstrap 5',
        discription:"Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!"
      },
      {
        img: `${img3}`,
        text: 'Easy to Use & Customize',
        discription:"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"
      }
    ];
  
    return (
      <section class="showcase">
      <div class="container-fluid p-0">
        {data.map((e, i) => {
          return (
            <div key={i} class="row g-0">
              {i % 2 === 0? (
                <>
                  <div class="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: `url('${e.img}')` }}></div>
                  <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                    <h2>{e.text}</h2>
                    <p class="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                  </div>
                </>
              ) : (
                <>
                  <div class="col-lg-6 text-white showcase-img" style={{ backgroundImage: `url('${e.img}')` }}></div>
                  <div class="col-lg-6 my-auto showcase-text">
                    <h2>{e.text}</h2>
                    <p class="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>

    );
  };
  export default Maincontent;