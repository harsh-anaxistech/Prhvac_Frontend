import React from "react";
import BgImage from "../../assets/Privacy-banner"; // Assuming this is a valid path to your image

const Policy = () => {
  return (
    <>
      {/* Breadcrumb Hero Section */}
      <div
        className="relative w-full h-[300px] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(102, 163, 210, 0.6), rgba(102, 163, 210, 0.4)), url(${BgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="relative z-10 px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
            Privacy Policy
          </h1>
        </div>
      </div>

      {/* Policy Section */}
      <section className="py-16 lg:py-16 bg-gray-50">
        <div className="max-w-7 xl mx-auto text-justify px-4 sm:px-6 lg:px-8 text-gray-800">
          <p className="mb-6 leading-relaxed">
            **PR HVAC Private Limited** promotes the Internet use of fair
            information practices. Because this website and other methods of
            internet communication want to demonstrate its commitment to your
            privacy, it has agreed to disclose its information.
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            Information Collection and Use
          </h3>
          <p className="mb-6 leading-relaxed">
            **PR HVAC Private Limited** is the sole owner of the information
            collected on this site or gathered through other electronic means.
            We will not sell, share, or rent this information to others in ways
            different from what is disclosed in this statement.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Log Files</h3>
          <p className="mb-6 leading-relaxed">
            We may use IP addresses to analyze trends, administer the site,
            track user's movement, and gather broad demographic information for
            aggregate use. IP addresses are not linked to personally
            identifiable information.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Links</h3>
          <p className="mb-6 leading-relaxed">
            This website and other internet methods of communication may contain
            links to other sites. Please be aware that we [**PR HVAC Private
            Limited**] are not responsible for the privacy practices of such
            other sites. We encourage our users to be aware when they leave our
            site and to read the privacy statements of each and every website
            that collects personally identifiable information. This privacy
            statement applies solely to information collected by this website.
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            Notification of Changes
          </h3>
          <p className="mb-6 leading-relaxed">
            If we decide to change our privacy policy, we will post those
            changes on our Homepage so our users are always aware of what
            information we collect, how we use it, and under what circumstances,
            if any, we disclose it. If at any point we decide to use personally
            identifiable information in a manner different from that stated at
            the time it was collected, we will notify users by way of an email.
            Users will have a choice as to whether or not we use their
            information in this different manner. We will use information in
            accordance with the privacy policy under which the information was
            collected.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Questions / Comments</h3>
          <p className="mb-6 leading-relaxed">
            Please direct any questions or comments about our privacy policy to{" "}
            <a
              href="mailto:prhvacpvtltd@gmail.com"
              className="text-blue-600 hover:underline"
            >
              prhvacpvtltd@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
};

export default Policy;
