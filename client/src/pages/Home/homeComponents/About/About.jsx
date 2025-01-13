const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/030/786/776/small_2x/professional-mechanic-working-in-auto-repair-shop-car-service-and-maintenance-concep-generative-ai-photo.jpeg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-success">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
