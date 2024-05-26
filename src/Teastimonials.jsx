import React from 'react'

export const Teastimonials = () => {
    let data =[
        {
            img:'assets/img/testimonials-1.jpg',
            name:'Margaret E.',
            comment:'This is fantastic! Thanks so much guys!'

        },
        {
            img:'assets/img/testimonials-2.jpg',
            name:'Fred S.',
            comment:"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."

        },
        {
            img:'assets/img/testimonials-3.jpg',
            name:'Sarah W.',
            comment:'Thanks so much for making these free resources available to us!'

        },
    ]
  return <>
  <section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                {
                    data.map((e,i)=>{
                        return<>
                        <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src={e.img} alt="..." />
                            <h5>{e.name}</h5>
                            <p className="font-weight-light mb-0">{e.comment}</p>
                        </div>
                    </div>
                        </>
                    })
                }  
                </div>
            </div>
        </section>
  </>
}
export default Teastimonials;
