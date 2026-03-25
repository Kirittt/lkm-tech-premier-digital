import { useEffect } from "react";
import { FileText, Scale, AlertTriangle, Users, CreditCard, ShieldCheck, Mail } from "lucide-react";

const TermsConditions = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <section className="gradient-bg-dark text-white py-20 md:py-28">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-badge bg-white/10 text-white/80 mb-6 inline-block">Legal</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-white/60 text-lg">Last Updated: March 25, 2026</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-10">

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-muted/50 border border-border">
              <FileText className="h-8 w-8 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="font-display text-xl font-bold text-foreground mt-0 mb-2">Agreement to Terms</h2>
                <p className="text-muted-foreground m-0">By accessing or using the LKM Tech website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the website or use our services.</p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-3"><Scale className="h-6 w-6 text-primary" /> Use of Services</h2>
              <p className="text-muted-foreground">LKM Tech provides IT services, technology consulting, staffing solutions, and recruitment services. By using our services, you agree to:</p>
              <ul className="text-muted-foreground space-y-2 mt-3">
                <li>Provide accurate and complete information when requested</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt the website or services</li>
                <li>Not attempt to gain unauthorized access to any part of our systems</li>
                <li>Not use our services to transmit spam, malware, or harmful content</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-3"><Users className="h-6 w-6 text-primary" /> Staffing & Recruitment Services</h2>
              <h3 className="font-display text-lg font-semibold mt-6 mb-3">For Candidates</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>You represent that all information provided in your application and resume is truthful and accurate</li>
                <li>You authorize LKM Tech to share your professional information with potential employers</li>
                <li>You understand that submission of your resume does not guarantee employment</li>
                <li>You agree to inform LKM Tech of any changes in your availability or employment status</li>
              </ul>
              <h3 className="font-display text-lg font-semibold mt-6 mb-3">For Clients</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>You agree to provide accurate job descriptions and requirements</li>
                <li>You will not directly solicit candidates presented by LKM Tech outside of our engagement</li>
                <li>Payment terms are as specified in individual service agreements</li>
                <li>You agree to provide a safe and legal working environment for placed candidates</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-3"><ShieldCheck className="h-6 w-6 text-primary" /> Intellectual Property</h2>
              <p className="text-muted-foreground">All content on the LKM Tech website, including but not limited to text, graphics, logos, images, software, and design elements, is the property of LKM Tech or its content suppliers and is protected by United States and international copyright, trademark, and other intellectual property laws.</p>
              <p className="text-muted-foreground mt-3">You may not:</p>
              <ul className="text-muted-foreground space-y-2 mt-3">
                <li>Reproduce, distribute, or display any content without prior written consent</li>
                <li>Modify, create derivative works from, or reverse engineer any materials</li>
                <li>Use our trademarks, logos, or branding without authorization</li>
                <li>Remove any copyright or proprietary notices from materials</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-3"><CreditCard className="h-6 w-6 text-primary" /> Payment Terms</h2>
              <p className="text-muted-foreground">For IT services and staffing solutions:</p>
              <ul className="text-muted-foreground space-y-2 mt-3">
                <li>Payment terms are specified in individual service agreements and statements of work</li>
                <li>Invoices are due within the timeframe specified in the agreement (typically Net 30)</li>
                <li>Late payments may be subject to interest charges as specified in the agreement</li>
                <li>All fees are non-refundable unless otherwise stated in writing</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-3"><AlertTriangle className="h-6 w-6 text-primary" /> Limitation of Liability</h2>
              <p className="text-muted-foreground">To the fullest extent permitted by applicable law, LKM Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:</p>
              <ul className="text-muted-foreground space-y-2 mt-3">
                <li>Your use or inability to use our services</li>
                <li>Any unauthorized access to or use of our servers</li>
                <li>Any interruption or cessation of transmission to or from our services</li>
                <li>Any bugs, viruses, or similar harmful code transmitted through our services</li>
                <li>Any errors or omissions in any content</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Indemnification</h2>
              <p className="text-muted-foreground">You agree to defend, indemnify, and hold harmless LKM Tech, its officers, directors, employees, and agents from any claims, damages, obligations, losses, or expenses arising from your use of our services or violation of these terms.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Governing Law</h2>
              <p className="text-muted-foreground">These Terms and Conditions shall be governed by and construed in accordance with the laws of the United States and the state in which LKM Tech maintains its principal offices, without regard to conflict of law principles.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Modifications to Terms</h2>
              <p className="text-muted-foreground">LKM Tech reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services following any changes constitutes acceptance of the revised terms.</p>
            </div>

            <div className="p-6 rounded-2xl bg-muted/50 border border-border">
              <h2 className="font-display text-xl font-bold text-foreground flex items-center gap-3 mt-0"><Mail className="h-6 w-6 text-primary" /> Questions?</h2>
              <p className="text-muted-foreground mb-0">If you have questions about these Terms and Conditions, contact us at <a href="mailto:legal@lkmtech.com" className="text-primary hover:underline">legal@lkmtech.com</a> or visit our <a href="/contact" className="text-primary hover:underline">Contact Page</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
