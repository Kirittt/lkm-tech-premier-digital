import { useEffect } from "react";
import { Shield, Lock, Eye, Database, UserCheck, Globe, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="gradient-bg-dark text-white py-20 md:py-28">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-badge bg-white/10 text-white/80 mb-6 inline-block">Legal</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-white/60 text-lg">Last Updated: March 25, 2026</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-10">

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-muted/50 border border-border">
              <Shield className="h-8 w-8 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="font-display text-xl font-bold text-foreground mt-0 mb-2">Our Commitment to Your Privacy</h2>
                <p className="text-muted-foreground m-0">LKM Tech ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any way.</p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-3"><Database className="h-6 w-6 text-primary" /> Information We Collect</h2>
              <h3 className="font-display text-lg font-semibold mt-6 mb-3">Personal Information</h3>
              <p className="text-muted-foreground">We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="text-muted-foreground space-y-2 mt-3">
                <li>Fill out a contact form or request information</li>
                <li>Apply for a job or submit your resume</li>
                <li>Subscribe to our newsletter or blog</li>
                <li>Register for events or webinars</li>
                <li>Engage with our staffing and recruitment services</li>
              </ul>
              <p className="text-muted-foreground mt-4">This information may include your name, email address, phone number, mailing address, resume/CV, employment history, educational background, professional certifications, and any other information you choose to provide.</p>

              <h3 className="font-display text-lg font-semibold mt-6 mb-3">Automatically Collected Information</h3>
              <p className="text-muted-foreground">When you access our website, we may automatically collect certain information including:</p>
              <ul className="text-muted-foreground space-y-2 mt-3">
                <li>IP address and browser type</li>
                <li>Operating system and device information</li>
                <li>Pages visited and time spent on each page</li>
                <li>Referring website addresses</li>
                <li>Click patterns and interaction data</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-3"><Eye className="h-6 w-6 text-primary" /> How We Use Your Information</h2>
              <p className="text-muted-foreground">We use the information we collect for the following purposes:</p>
              <ul className="text-muted-foreground space-y-2 mt-3">
                <li><strong>Service Delivery:</strong> To provide IT services, staffing solutions, and recruitment services</li>
                <li><strong>Communication:</strong> To respond to inquiries, send service updates, and provide customer support</li>
                <li><strong>Job Matching:</strong> To match candidates with appropriate employment opportunities</li>
                <li><strong>Marketing:</strong> To send newsletters, industry insights, and promotional communications (with your consent)</li>
                <li><strong>Website Improvement:</strong> To analyze usage patterns and improve our website and services</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
                <li><strong>Security:</strong> To detect, prevent, and address technical issues and security threats</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-3"><Lock className="h-6 w-6 text-primary" /> Data Security</h2>
              <p className="text-muted-foreground">We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
              <ul className="text-muted-foreground space-y-2 mt-3">
                <li>SSL/TLS encryption for data in transit</li>
                <li>Encrypted storage for sensitive data at rest</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Access controls and authentication protocols</li>
                <li>Employee training on data protection best practices</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-3"><Globe className="h-6 w-6 text-primary" /> Information Sharing & Disclosure</h2>
              <p className="text-muted-foreground">We do not sell your personal information. We may share your information with:</p>
              <ul className="text-muted-foreground space-y-2 mt-3">
                <li><strong>Client Companies:</strong> When you are a candidate, we share relevant professional information with potential employers as part of our recruitment services</li>
                <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website and services</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-3"><UserCheck className="h-6 w-6 text-primary" /> Your Rights</h2>
              <p className="text-muted-foreground">Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul className="text-muted-foreground space-y-2 mt-3">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request your data in a structured, machine-readable format</li>
                <li><strong>Restriction:</strong> Request restriction of processing of your personal information</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Third-Party Links</h2>
              <p className="text-muted-foreground">Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Children's Privacy</h2>
              <p className="text-muted-foreground">Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Changes to This Policy</h2>
              <p className="text-muted-foreground">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after any changes indicates your acceptance of the updated policy.</p>
            </div>

            <div className="p-6 rounded-2xl bg-muted/50 border border-border">
              <h2 className="font-display text-xl font-bold text-foreground flex items-center gap-3 mt-0"><Mail className="h-6 w-6 text-primary" /> Contact Us</h2>
              <p className="text-muted-foreground mb-0">If you have any questions about this Privacy Policy or our data practices, please contact us at <a href="mailto:privacy@lkmtech.com" className="text-primary hover:underline">privacy@lkmtech.com</a> or visit our <a href="/contact" className="text-primary hover:underline">Contact Page</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
