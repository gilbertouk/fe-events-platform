const PrivacyPage = () => {
  return (
    <main className="w-full py-12 bg-gray-100">
      <div className="m-auto flex justify-center flex-col max-w-3xl gap-6 px-4">
        <div className="space-y-2">
          <h1 className="font-roboto text-3xl font-bold tracking-tighter sm:text-5xl pb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-left sm:text-justify">
            Our Privacy Policy applies to all visitors, users, and others who
            access the Service. The policy outlines the types of information
            that may be collected and recorded by the website and how it is
            used.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="font-roboto text-xl font-bold tracking-tighter sm:text-2xl">
            Information Collection
          </h2>
          <p className="text-gray-500 text-left sm:text-justify">
            We collect several different types of information for various
            purposes to provide and improve our Service to you.
          </p>
          <ul className="list-disc list-inside grid gap-2">
            <li className="text-gray-500 text-left sm:text-justify">
              All personal information you provide when registering an account.
            </li>
            <li className="text-gray-500 text-left sm:text-justify">
              Your IP address, browser type, and device information when
              accessing the website.
            </li>
            <li className="text-gray-500 text-left sm:text-justify">
              Information collected through cookies and similar tracking
              technologies.
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="font-roboto text-xl font-bold tracking-tighter sm:text-2xl">
            Use of Information
          </h2>
          <p className="text-gray-500 text-left sm:text-justify">
            We may use the information we collect for various purposes,
            including to:
          </p>
          <ul className="list-disc list-inside grid gap-2">
            <li className="text-gray-500 text-left sm:text-justify">
              Provide and maintain the Service.
            </li>
            <li className="text-gray-500 text-left sm:text-justify">
              Notify you about changes to our Service.
            </li>
            <li className="text-gray-500 text-left sm:text-justify">
              Allow you to participate in interactive features of our Service
              when you choose to do so.
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="font-roboto text-xl font-bold tracking-tighter sm:text-2xl">
            Sharing of Information
          </h2>
          <p className="text-gray-500 text-left sm:text-justify">
            We do not sell, trade, or otherwise transfer your personal
            information to third parties. This does not include trusted third
            parties who assist us in operating our website, conducting our
            business, or servicing you, as long as those parties agree to keep
            this information confidential.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="font-roboto text-xl font-bold tracking-tighter sm:text-2xl">
            Third-Party Services
          </h2>
          <p className="text-gray-500 text-left sm:text-justify">
            Our Service may contain links to other sites. If you click on a
            third-party link, you will be directed to that site. Note that these
            external sites are not operated by us. Therefore, we strongly advise
            you to review the Privacy Policy of these websites. We have no
            control over and assume no responsibility for the content, privacy
            policies, or practices of any third-party sites or services.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="font-roboto text-xl font-bold tracking-tighter sm:text-2xl">
            User Rights
          </h2>
          <p className="text-gray-500 text-left sm:text-justify">
            You have the right to access your personal information, correct any
            inaccuracies, and request the deletion of your data. If you have any
            questions about our Privacy Policy or want to exercise your rights,
            please contact us using the information provided below.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="font-roboto text-xl font-bold tracking-tighter sm:text-2xl">
            Contact Us
          </h2>
          <p className="text-gray-500 text-left sm:text-justify">
            If you have any questions about our Privacy Policy, the practices of
            this site, or your dealings with this site, please contact us.
          </p>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPage;
