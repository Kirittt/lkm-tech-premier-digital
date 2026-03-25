import { useEffect } from "react";
import { Cookie, Settings, BarChart3, Shield, ToggleLeft, Mail } from "lucide-react";

const CookiePolicy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <section className="gradient-bg-dark text-white py-20 md:py-28">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-badge bg-white/10 text-white/80 mb-6 inline-block">Legal</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-white/60 text-lg">Last Updated: March 25, 2026</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-10">

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-muted/50 border border-border">
              <Cookie className="h-8 w-8 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="font-display text-xl font-bold text-foreground mt-0 mb-2">What Are Cookies?</h2>
                <p className="text-muted-foreground m-0">Cookies are small text files placed on your device when you visit a website. They help the website recognize your device and remember certain information about your visit, such as your preferences and settings.</p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-3"><Settings className="h-6 w-6 text-primary" /> Types of Cookies We Use</h2>

              <h3 className="font-display text-lg font-semibold mt-6 mb-3">Essential Cookies</h3>
              <p className="text-muted-foreground">These cookies are necessary for the website to function properly. They enable core features such as page navigation, security, and accessibility. The website cannot function properly without these cookies.</p>
              <ul className="text-muted-foreground space-y-1 mt-2">
                <li>Session management and authentication</li>
                <li>Security features and fraud prevention</li>
                <li>Load balancing and server optimization</li>
                <li>Cookie consent preferences</li>
              </ul>

              <h3 className="font-display text-lg font-semibold mt-6 mb-3">Performance Cookies</h3>
              <p className="text-muted-foreground">These cookies collect information about how visitors use our website, such as which pages are visited most often. This data helps us improve the website's performance and user experience.</p>
              <ul className="text-muted-foreground space-y-1 mt-2">
                <li>Google Analytics (anonymized IP tracking)</li>
                <li>Page load time monitoring</li>
                <li>Error tracking and reporting</li>
              </ul>

              <h3 className="font-display text-lg font-semibold mt-6 mb-3">Functional Cookies</h3>
              <p className="text-muted-foreground">These cookies allow the website to remember choices you make and provide enhanced, personalized features.</p>
              <ul className="text-muted-foreground space-y-1 mt-2">
                <li>Language and region preferences</li>
                <li>Font size and display preferences</li>
                <li>Previously viewed job listings or services</li>
              </ul>

              <h3 className="font-display text-lg font-semibold mt-6 mb-3">Marketing Cookies</h3>
              <p className="text-muted-foreground">These cookies track your online activity to help deliver more relevant advertising or to limit how many times you see an ad. These cookies may be set by third-party advertising partners.</p>
              <ul className="text-muted-foreground space-y-1 mt-2">
                <li>LinkedIn Insight Tag</li>
                <li>Google Ads remarketing</li>
                <li>Social media sharing features</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-3"><BarChart3 className="h-6 w-6 text-primary" /> Third-Party Cookies</h2>
              <p className="text-muted-foreground">Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. Third-party services we use include:</p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left p-3 font-semibold text-foreground">Provider</th>
                      <th className="text-left p-3 font-semibold text-foreground">Purpose</th>
                      <th className="text-left p-3 font-semibold text-foreground">Type</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-t border-border"><td className="p-3">Google Analytics</td><td className="p-3">Website analytics</td><td className="p-3">Performance</td></tr>
                    <tr className="border-t border-border"><td className="p-3">LinkedIn</td><td className="p-3">Professional advertising</td><td className="p-3">Marketing</td></tr>
                    <tr className="border-t border-border"><td className="p-3">Google Ads</td><td className="p-3">Advertising</td><td className="p-3">Marketing</td></tr>
                    <tr className="border-t border-border"><td className="p-3">HubSpot</td><td className="p-3">CRM & marketing automation</td><td className="p-3">Functional</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-3"><ToggleLeft className="h-6 w-6 text-primary" /> Managing Your Cookie Preferences</h2>
              <p className="text-muted-foreground">You can control and manage cookies in several ways:</p>
              <ul className="text-muted-foreground space-y-2 mt-3">
                <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies through their settings. Note that blocking all cookies may affect your ability to use certain features of our website.</li>
                <li><strong>Opt-Out Links:</strong> Many third-party advertising networks offer opt-out mechanisms. Visit <a href="https://www.aboutads.info/choices/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">aboutads.info/choices</a> or <a href="https://www.networkadvertising.org/choices/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">networkadvertising.org/choices</a>.</li>
                <li><strong>Google Analytics Opt-Out:</strong> Install the <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-3"><Shield className="h-6 w-6 text-primary" /> Data Retention</h2>
              <p className="text-muted-foreground">Cookie data retention periods vary by type:</p>
              <ul className="text-muted-foreground space-y-2 mt-3">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period (typically 30 days to 2 years) or until manually deleted</li>
                <li><strong>Analytics Data:</strong> Retained in aggregate form for up to 26 months</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Updates to This Policy</h2>
              <p className="text-muted-foreground">We may update this Cookie Policy periodically to reflect changes in our practices or for operational, legal, or regulatory reasons. Any changes will be posted on this page with an updated "Last Updated" date.</p>
            </div>

            <div className="p-6 rounded-2xl bg-muted/50 border border-border">
              <h2 className="font-display text-xl font-bold text-foreground flex items-center gap-3 mt-0"><Mail className="h-6 w-6 text-primary" /> Questions About Cookies?</h2>
              <p className="text-muted-foreground mb-0">Contact us at <a href="mailto:privacy@lkmtech.com" className="text-primary hover:underline">privacy@lkmtech.com</a> or visit our <a href="/contact" className="text-primary hover:underline">Contact Page</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
