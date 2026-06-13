import MenuBanner from "../../components/shared/banner/MenuBanner";

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By accessing and using this website, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.",
  },
  {
    title: "Use of the Website",
    body: "You may use this website for lawful purposes only. You agree not to use this site in any way that is unlawful, harmful, or fraudulent, or that could damage, disable, or impair the website.",
  },
  {
    title: "Orders and Payments",
    body: "When you place an order through our website, you agree to provide accurate and complete information. We reserve the right to refuse or cancel any order at our discretion.",
  },
  {
    title: "Intellectual Property",
    body: "All content on this website, including text, graphics, logos, and images, is the property of Bermiz Restaurant and is protected by applicable intellectual property laws.",
  },
  {
    title: "Limitation of Liability",
    body: "To the fullest extent permitted by law, Bermiz Restaurant shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or our services.",
  },
  {
    title: "Third-Party Links",
    body: "Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites and encourage you to review their terms and policies.",
  },
  {
    title: "Changes to Terms",
    body: "We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting. Your continued use of the website constitutes acceptance of the updated terms.",
  },
  {
    title: "Contact Us",
    body: "If you have any questions about these Terms of Use, please reach out to us through our Contact Us page.",
  },
];

const TermsOfUse = () => {
  return (
    <div>
      <MenuBanner
        image="https://i.postimg.cc/HsjdKK8s/contact-bg.png"
        title="Terms Of Use"
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

export default TermsOfUse;
