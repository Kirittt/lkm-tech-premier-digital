import { useEffect } from "react";
import { FileWarning, AlertCircle, CheckCircle, XCircle, RefreshCcw, Mail } from "lucide-react";

const DMCAPolicy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <section className="gradient-bg-dark text-white py-20 md:py-28">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-badge bg-white/10 text-white/80 mb-6 inline-block">Legal</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">DMCA Policy</h1>
            <p className="text-white/60 text-lg">Last Updated: March 25, 2026</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-10">

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-muted/50 border border-border">
              <FileWarning className="h-8 w-8 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="font-display text-xl font-bold text-foreground mt-0 mb-2">Digital Millennium Copyright Act Notice</h2>
                <p className="text-muted-foreground m-0">LKM Tech respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 ("DMCA"), we will respond promptly to claims of copyright infringement committed using our website or services.</p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-3"><AlertCircle className="h-6 w-6 text-primary" /> Filing a DMCA Takedown Notice</h2>
              <p className="text-muted-foreground">If you believe that content on our website infringes your copyright, please submit a written notification containing the following information:</p>
              <ol className="text-muted-foreground space-y-3 mt-3">
                <li><strong>Identification of the copyrighted work</strong> that you claim has been infringed, or a representative list if multiple works are involved.</li>
                <li><strong>Identification of the infringing material</strong> and its location on our website (URL or detailed description) so we can locate it.</li>
                <li><strong>Your contact information,</strong> including your name, address, telephone number, and email address.</li>
                <li><strong>A statement that you have a good faith belief</strong> that the use of the material is not authorized by the copyright owner, its agent, or the law.</li>
                <li><strong>A statement, under penalty of perjury,</strong> that the information in the notification is accurate and that you are the copyright owner or authorized to act on behalf of the owner.</li>
                <li><strong>Your physical or electronic signature</strong> (or that of the person authorized to act on behalf of the copyright owner).</li>
              </ol>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-3"><CheckCircle className="h-6 w-6 text-primary" /> How We Process Notices</h2>
              <p className="text-muted-foreground">Upon receipt of a valid DMCA takedown notice, LKM Tech will:</p>
              <ul className="text-muted-foreground space-y-2 mt-3">
                <li>Remove or disable access to the allegedly infringing material</li>
                <li>Notify the content provider, member, or user that material has been removed</li>
                <li>Provide the content provider with information on how to submit a counter-notification</li>
                <li>Terminate access for repeat infringers in appropriate circumstances</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-3"><RefreshCcw className="h-6 w-6 text-primary" /> Counter-Notification</h2>
              <p className="text-muted-foreground">If you believe that material was removed or disabled as a result of mistake or misidentification, you may submit a counter-notification containing:</p>
              <ol className="text-muted-foreground space-y-3 mt-3">
                <li>Your physical or electronic signature</li>
                <li>Identification of the material that was removed and its previous location</li>
                <li>A statement under penalty of perjury that you have a good faith belief the material was removed as a result of mistake or misidentification</li>
                <li>Your name, address, and telephone number</li>
                <li>A statement that you consent to the jurisdiction of the federal district court for the judicial district in which your address is located</li>
              </ol>
              <p className="text-muted-foreground mt-4">Upon receipt of a valid counter-notification, we will forward it to the original complainant. If the original complainant does not file a court action within 10 business days, we may restore the removed material.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-3"><XCircle className="h-6 w-6 text-primary" /> Repeat Infringers</h2>
              <p className="text-muted-foreground">In accordance with the DMCA and other applicable laws, LKM Tech has adopted a policy of terminating, in appropriate circumstances, users or account holders who are deemed to be repeat infringers. We may also, in our sole discretion, limit access to our website and/or terminate the accounts of any users who infringe any intellectual property rights of others.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Good Faith</h2>
              <p className="text-muted-foreground">Please note that under Section 512(f) of the DMCA, any person who knowingly materially misrepresents that material is infringing, or that material was removed or disabled by mistake or misidentification, may be subject to liability for damages, including costs and attorney fees.</p>
            </div>

            <div className="p-6 rounded-2xl bg-muted/50 border border-border">
              <h2 className="font-display text-xl font-bold text-foreground flex items-center gap-3 mt-0"><Mail className="h-6 w-6 text-primary" /> DMCA Agent Contact</h2>
              <div className="text-muted-foreground space-y-1">
                <p className="mb-2">Send all DMCA notices and counter-notifications to:</p>
                <p><strong>DMCA Agent</strong></p>
                <p>LKM Tech</p>
                <p>Email: <a href="mailto:dmca@lkmtech.com" className="text-primary hover:underline">dmca@lkmtech.com</a></p>
                <p className="mb-0">Or visit our <a href="/contact" className="text-primary hover:underline">Contact Page</a> for additional ways to reach us.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DMCAPolicy;
