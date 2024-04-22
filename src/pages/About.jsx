const AboutPage = () => {
  return (
    <main className="w-full py-12 bg-gray-100">
      <div className="m-auto flex justify-center flex-col max-w-3xl gap-6 px-4">
        <h1 className="font-roboto text-3xl font-bold tracking-tighter sm:text-5xl pb-4">
          About our Mission
        </h1>
        <p className="text-gray-500 text-justify">
          Welcome to {import.meta.env.VITE_COMPANY_NAME}, a platform created
          with the heart of the community in mind.
        </p>
        <p className="text-gray-500 text-justify">
          We are a small company passionate about connecting people and
          strengthening community bonds. Born out of the need to create a space
          where members of a community can meet, share, and participate in
          meaningful events, our mission is simple: to make collaboration and
          celebration more accessible to everyone.
        </p>
        <p className="text-gray-500 text-justify">
          With {import.meta.env.VITE_COMPANY_NAME}, we offer an easy and
          efficient way for anyone, from anywhere, to create and share events
          that matter. Whether it&apos;s a local cooking class, a craft
          workshop, an educational lecture, or a live music night, there&apos;s
          always something exciting happening in our community.
        </p>
        <p className="text-gray-500 text-justify">
          What sets us apart is our inclusive and flexible approach. Some events
          are offered for free, as an expression of generosity and mutual
          support. Others may have an associated cost, either a fixed amount or
          a voluntary contribution. We believe in freedom of choice and in
          valuing the work of our event creators, while also striving to ensure
          that everyone has access to the experiences they desire.
        </p>
        <p className="text-gray-500 text-justify">
          Our commitment goes beyond simply listing events. We want every
          interaction on our platform to be meaningful. That&apos;s why we make
          it easy for members of the community to sign up and share events,
          allowing them to organize their personal calendars with ease and
          efficiency.
        </p>
        <p className="text-gray-500 text-justify">
          At {import.meta.env.VITE_COMPANY_NAME}, we believe in the power of
          community. We&apos;re here to empower individuals to share their
          talents, passions, and knowledge, while fostering unity and collective
          growth. Join us as we build together a future where everyone can
          connect, learn, and thrive.
        </p>
        <p className="text-gray-500 text-justify">
          Welcome to our community. We look forward to creating, celebrating,
          and growing together with you.
        </p>
      </div>
    </main>
  );
};

export default AboutPage;
