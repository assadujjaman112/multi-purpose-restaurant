import MenuBanner from "../../components/shared/banner/MenuBanner";

const sections = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly to us, such as your name, email address, phone number, and delivery address when you create an account, place an order, or contact us.",
  },
  {
    title: "How We Use Your Information",
    body: "We use the information we collect to process your orders, send order confirmations and updates, respond to your comments and questions, and improve our services.",
  },
  {
    title: "Information Sharing",
    body: "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except as necessary to fulfil your order (e.g. delivery partners) or as required by law.",
  },
  {
    title: "Data Security",
    body: "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.",
  },
  {
    title: "Cookies",
    body: "We may use cookies and similar tracking technologies to enhance your experience on our website. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date.",
  },
  {
    title: "Contact Us",
    body: "If you have any questions about this Privacy Policy, please contact us through our Contact Us page or email us directly.",
  },
];

const PrivacyPolicy = () => {
  return (
    <div>
      <MenuBanner
        image="https://i.postimg.cc/HsjdKK8s/contact-bg.png"
        title="Privacy Policy"
      />
      <div className="relative">
        <span className="w-[1px] h-full absolute left-[11.5%] -z-10 bg-[#99A9AD1A]" />
        <span className="w-[1px] h-full absolute left-[30.7%] -z-10 bg-[#99A9AD1A]" />
        <span className="w-[1px] h-full absolute left-[50%] -z-10 bg-[#99A9AD1A]" />
        <span className="w-[1px] h-full absolute left-[69.3%] -z-10 bg-[#99A9AD1A]" />
        <span className="w-[1px] h-full absolute left-[88.5%] -z-10 bg-[#99A9AD1A]" />

        <div className="w-11/12 lg:w-[65%] mx-auto py-12 lg:py-20">
          <p className="text-[#99A9AD] text-sm mb-10">
            Effective date: January 1, 2026
          </p>

          <div className="flex flex-col gap-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-white font-elsie text-2xl md:text-3xl mb-3">
                  {section.title}
                </h2>
                <p className="text-[#99A9AD] text-base md:text-lg leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#99A9AD1A] h-[1px]" />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
