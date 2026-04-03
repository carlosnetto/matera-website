import PageHero from '../../shared/components/PageHero';

export default function PrivacyPolicy() {
  const sectionStyle: React.CSSProperties = { marginBottom: '40px' };
  const h2Style: React.CSSProperties = { fontSize: '1.5rem', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '16px' };
  const pStyle: React.CSSProperties = { color: '#444', lineHeight: 1.8, marginBottom: '16px' };

  return (
    <>
      <PageHero title="Privacy Policy" />

      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>

          <div style={sectionStyle}>
            <p style={pStyle}>
              We are Matera Inc, a company of Matera group that develops technology for the financial market: traditional and digital banking, fintechs and risk management. We are committed to protecting your privacy and we value transparency in our relationship with our customers, employees, suppliers and partners. This document will therefore inform you in a clear and accessible way about how we use personal data: how it is collected, used, shared and stored in our company, along with other pertinent information on the subject. It is important that you read this document carefully and, should you have any doubts, simply contact our channel using this email <a href="mailto:privacy@matera.com" style={{ color: 'var(--matera-purple)', fontWeight: 600 }}>privacy@matera.com</a>. This Policy relates solely and exclusively to personal data handled by the Matera Inc. For the policies applicable to your personal data handled by third parties, we suggest you visit their respective websites.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>Information We Collect</h2>
            <p style={pStyle}>In order to conduct our business activities, we need to obtain information about you.</p>
            <p style={{ ...pStyle, fontWeight: 600 }}>1. Information provided by you</p>
            <p style={pStyle}>
              (I) Contact data: If you contact us via our website or request further information from us, you can provide us with your name and email address, the content of your message, the company you represent, its line of business, your position, your company's revenues, and its business objectives.
            </p>
            <p style={pStyle}>
              (II) Social Network Data: If you make contact through a third-party marketing platform, we collect your first name, last name, e-mail, phone number, company, line of business, job title, company revenue, business objectives and the content of your message from such platforms.
            </p>
            <p style={pStyle}>
              In addition, we may also collect behavior information from users who visit Matera Inc's website but do not perform a conversion action, as well as monitoring information regarding campaign performance, such as impressions, clicks, cost per click, among other information.
            </p>
            <p style={{ ...pStyle, fontWeight: 600 }}>2. Information generated when you speak with us</p>
            <p style={pStyle}>
              (I) Access logs: Matera automatically collects application access logs, which include the IP address, with date and time, used to access our website.
            </p>
            <p style={pStyle}>
              (II) Communications with Matera Inc: When you communicate with Matera Inc, we collect information about your communications, including metadata such as date, IP and time of communications and all their content, as well as any other information you wish to provide us with.
            </p>
            <p style={pStyle}>
              (III) When you download our e-book, we collect the following data by means of a third-party platform: full name, phone number, e-mail, corporate email, job title, company, and from this contact data we may send you information about events that may be of interest to you.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>How We Use Your Information</h2>
            <p style={pStyle}>
              We are committed to your privacy, so all data and information about you is treated as confidential. Matera Inc is committed to handling your information for specific, legitimate purposes, and always ensuring your right to be informed about such purposes. To this end, please read the following reasons why we use your information:
            </p>
            <ul style={{ color: '#444', lineHeight: 1.8, paddingLeft: '20px', marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>To contact you and offer you the most appropriate Matera solutions for your business</li>
              <li>To send you messages regarding support or services, such as alerts, notifications and updates</li>
              <li>To communicate with you about products, services, special offers, news, updates, information on events and other matters you may be interested in, always ensuring your right to stop receiving our communications if you prefer</li>
              <li>To send you tailored advertising according to your tastes, interests and other information collected</li>
              <li>To customize our services to be increasingly suited to your tastes and interests</li>
              <li>To create services, products and features</li>
              <li>Detection and prevention of fraud, spam and security incidents</li>
              <li>To better understand your behavior and build behavior profiles</li>
              <li>For any purpose you authorize at the time of data collection</li>
              <li>To comply with legal and regulatory obligations</li>
              <li>To exercise our rights in a regular manner in legal, administrative, or arbitration proceedings</li>
              <li>To enforce contracts</li>
            </ul>
            <p style={pStyle}>
              If necessary, we may use personal data for purposes not foreseen in this Privacy Policy, however, we guarantee that the treatment of this data will be within your legitimate expectations.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>For How Long Will We Keep Your Information?</h2>
            <p style={pStyle}>
              Your information will be kept with us for the period of time necessary to fulfill the purposes informed in this document. All data collected will be deleted from our servers when you request this or when it is no longer necessary or relevant to provide you with our services. After the termination of our relationship, we may keep your information as necessary for the regular exercise of the right of defense in any judicial or extrajudicial proceedings, legal or regulatory obligations, and/or compliance with contracts, in which the use of your personal data is necessary, within the legally prescribed time limits.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>Sharing of Information About You</h2>
            <p style={pStyle}>
              The Matera Group will share your personal information with third parties only in the ways described herein. To enable the Matera Group to perform its activities, we may collect, store, process and transfer personal data between any of the countries in which Matera or its third parties operate. By submitting your personal data to Matera Inc or its group companies, you expressly agree to such data transfers in accordance with this Privacy Policy. The Matera Group reserves the right to share or provide your personal data to any regulatory or government authorities in order to comply with legal and/or regulatory obligations that directly or indirectly require the Matera Group to provide certain personal data.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>Use of Cookies on Our Website</h2>
            <p style={pStyle}>
              Cookies are small simple text files that can be placed on your device to store information about you and your browsing experience. When you visit a website, this information is sent to your web browser and stored, so that you have personalized experiences on your next visits. This allows for more efficient browsing and eliminates the need to repeatedly enter the same information. On our website we use Google Analytics cookies to assess how users interact with our website content. You can manage your cookie options at any time by setting your browser options to block, clear, or notify you when you receive cookies. However, refusing the use of some cookies may limit access to some areas, and prevent you from receiving personalized information. Google Analytics does not use sensitive information such as biometrics, health, political or religious opinion, trade union membership, etc. If the need arises to process such information, this document will be revised and you will be notified through the contact channel you have provided or through a notice posted on our site.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>Information Security</h2>
            <p style={pStyle}>
              Matera Inc will use commercially reasonable efforts to safeguard the security of personal data in our possession. Accordingly, we will take reasonable and proportionate measures to keep it secure from loss, alteration, destruction or leakage. These measures include: All of your data is confidential and only duly authorized persons will have access to it. Any use of this information will be in accordance with this Policy. Our servers are located in different places to ensure stability and security, and can only be accessed through previously authorized communication channels. Matera Inc considers your privacy to be extremely important and will do everything in its power to protect it.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>Your Rights as Owner of Your Personal Data</h2>
            <p style={pStyle}>
              Given that you are the owner of your information, the applicable legislation ensures your right to check free of charge and easily how and for how long your information is treated, as well as the completeness of your personal data. On this point, all requests will be: attended to free of charge; submitted to validation of your identity (so that the answers to requests are only given to the owner of the personal data). If you need to exercise your rights as a data owner, please send an e-mail to <a href="mailto:privacy@matera.com" style={{ color: 'var(--matera-purple)', fontWeight: 600 }}>privacy@matera.com</a>. We emphasize that in certain situations your request may be rejected, either for formal reasons (such as the impossibility of proving your identity) or for legal reasons (such as the request to delete data which the owners of the platform have the right to keep on it). You can be sure that, in the event of it being impossible to meet your request, we will provide every reasonable justification.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>Updating of This Privacy Policy</h2>
            <p style={pStyle}>
              Matera Inc reserves the right to change this Policy as often as necessary in order to provide you with more security, convenience, and to improve your experience. For this reason, it is very important that you access and read our Policy periodically and, to make this easier, the date of the last update is shown at the beginning of the Policy.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
