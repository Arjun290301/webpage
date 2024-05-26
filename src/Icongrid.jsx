export const Icongrid = () => {
    let data = [
      {
        icon: 'bi-window m-auto text-primary',
        title: 'Fully Responsive',
        description: 'lead mb-0">This theme will look great on any device, no matter the size!'
      },
      {
        icon: 'bi-layers m-auto text-primary',
        title: 'Bootstrap 5 Ready',
        description: 'Featuring the latest build of the new Bootstrap 5 framework!'
      },
      {
        icon: 'bi-terminal m-auto text-primary',
        title: 'Easy to Use',
        description: 'Ready to use with your own content, or customize the source files!'
      }
    ];
  
    return (
      <section className="features-icons bg-light text-center">
        <div className="container">
        <div className="row">
          {data.map((e, i) => {
            return <>
              
                <div key={e.title} className="col-lg-4">
                  <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                    <div className="features-icons-icon d-flex"><i className={e.icon}></i></div>
                    <h3>{e.title}</h3>
                    <p className="lead mb-0">{e.description}</p>
                  </div>
                </div>
              
            </>
          })}
          </div>
        </div>
      </section>
    );
  };