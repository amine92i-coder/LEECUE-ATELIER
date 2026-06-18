import LegalPage from "../components/LegalPage";
import { company } from "../data/legal";

export default function Datenschutz() {
  return (
    <LegalPage
      docTitle="Datenschutzerklärung"
      title="Datenschutzerklärung"
      intro="Diese Erklärung informiert Sie über die Verarbeitung personenbezogener Daten gemäß DSGVO. · This policy explains how we process personal data under the GDPR."
    >
      <h2>1. Verantwortlicher · Controller</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website ist · The
        controller responsible for data processing on this website is:
      </p>
      <address>
        <strong>{company.legalName}</strong>
        <br />
        {company.street}, {company.postalCity}, {company.country}
        <br />
        Geschäftsführer · Managing Director: {company.managingDirector}
        <br />
        E-Mail: <a href={`mailto:${company.email}`}>{company.email}</a> · Tel:{" "}
        {company.phone}
      </address>

      <h2>2. Allgemeines · General</h2>
      <p>
        Wir verarbeiten personenbezogene Daten nur im erforderlichen Umfang und
        auf Grundlage der DSGVO. Die Nutzung unserer Website ist grundsätzlich
        ohne Angabe personenbezogener Daten möglich; geben Sie Daten ein (z.&nbsp;B.
        über das Anfrageformular), geschieht dies freiwillig.
      </p>
      <p>
        We process personal data only to the extent necessary and on the legal
        bases of the GDPR. Using our website is generally possible without
        providing personal data; where you do provide data (e.g. via the
        enquiry form) this is done voluntarily.
      </p>

      <h2>3. Hosting</h2>
      <p>
        Diese Website wird bei <strong>Vercel Inc.</strong>, 340 S Lemon Ave
        #4133, Walnut, CA 91789, USA, gehostet. Beim Aufruf der Seite verarbeitet
        Vercel als Auftragsverarbeiter technisch notwendige Server-Logdaten
        (z.&nbsp;B. IP-Adresse, Datum/Uhrzeit, abgerufene Datei, Browser- und
        Betriebssystem-Informationen). Rechtsgrundlage ist unser berechtigtes
        Interesse an einem sicheren und stabilen Betrieb (Art.&nbsp;6 Abs.&nbsp;1
        lit.&nbsp;f DSGVO). Eine Übermittlung in die USA erfolgt auf Grundlage
        der EU-Standardvertragsklauseln bzw. des EU-US Data Privacy Framework.
      </p>
      <p>
        This website is hosted by <strong>Vercel Inc.</strong> (USA). When the
        site is accessed, Vercel processes technically necessary server log data
        (e.g. IP address, date/time, requested file, browser and OS
        information) as our processor, based on our legitimate interest in
        secure, stable operation (Art. 6(1)(f) GDPR). Transfers to the USA rely
        on the EU Standard Contractual Clauses and/or the EU-US Data Privacy
        Framework.
      </p>

      <h2>4. SSL-/TLS-Verschlüsselung · Encryption</h2>
      <p>
        Diese Seite nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung.
        Eine verschlüsselte Verbindung erkennen Sie an „https://“ in der
        Adresszeile Ihres Browsers. · For security, this site uses SSL/TLS
        encryption, recognisable by “https://” in your browser’s address bar.
      </p>

      <h2>5. Cookies &amp; Einwilligung · Cookies &amp; Consent</h2>
      <p>
        Wir verwenden ausschließlich technisch notwendige Cookies, die für den
        Betrieb der Website und – im Bestellprozess – für die sichere
        Zahlungsabwicklung über Stripe erforderlich sind. Diese sind nach
        §&nbsp;25 Abs.&nbsp;2 TTDSG einwilligungsfrei. Setzen wir künftig nicht
        notwendige Cookies oder Dienste ein, holen wir zuvor Ihre Einwilligung
        über unseren Cookie-Banner ein (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a
        DSGVO); diese können Sie jederzeit mit Wirkung für die Zukunft
        widerrufen.
      </p>
      <p>
        We use strictly necessary cookies only — required to operate the website
        and, during checkout, for secure payment processing via Stripe. These
        are exempt from consent under § 25(2) TTDSG. Should we use any
        non-essential cookies or services in future, we will first obtain your
        consent via our cookie banner (Art. 6(1)(a) GDPR), which you may
        withdraw at any time with effect for the future.
      </p>

      <h2>6. Anfrage- &amp; Auftragsformular · Enquiry &amp; Commission Form</h2>
      <p>
        Wenn Sie uns über das Auftragsformular kontaktieren, verarbeiten wir die
        von Ihnen angegebenen Daten – insbesondere Name, E-Mail-Adresse,
        Angaben zu Fahrzeug und gewünschtem Leder, Ihre Nachricht sowie ggf.
        hochgeladene Referenzfotos – zur Bearbeitung Ihrer Anfrage und zur
        Anbahnung bzw. Durchführung eines Auftrags. Rechtsgrundlage ist
        Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO (vorvertragliche Maßnahmen /
        Vertrag) sowie Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO (Bearbeitung der
        Anfrage). Wir speichern diese Daten, bis der Zweck entfällt, und beachten
        gesetzliche Aufbewahrungsfristen.
      </p>
      <p>
        When you contact us via the commission form we process the data you
        provide — in particular your name, email address, vehicle and leather
        details, your message and any reference photos uploaded — in order to
        handle your enquiry and to initiate or perform an order. The legal bases
        are Art. 6(1)(b) GDPR (pre-contractual measures / contract) and Art.
        6(1)(f) GDPR (handling the enquiry). We retain this data until its
        purpose ceases, subject to statutory retention periods.
      </p>

      <h2>7. Zahlungsabwicklung über Stripe · Payments via Stripe</h2>
      <p>
        Für die Zahlungsabwicklung nutzen wir den Dienstleister{" "}
        <strong>Stripe Payments Europe, Ltd.</strong>, 1 Grand Canal Street
        Lower, Dublin, Irland. Geben Sie eine Zahlung in Auftrag, werden die zur
        Abwicklung erforderlichen Daten (z.&nbsp;B. Name, Zahlungsdaten,
        Rechnungsbetrag) an Stripe übermittelt und dort eigenverantwortlich
        verarbeitet. Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b
        DSGVO (Vertragserfüllung). Einzelheiten finden Sie in der
        Datenschutzerklärung von Stripe:{" "}
        <a
          href="https://stripe.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          stripe.com/privacy
        </a>
        .
      </p>
      <p>
        We use <strong>Stripe Payments Europe, Ltd.</strong> (Dublin, Ireland)
        to process payments. When you initiate a payment, the data required for
        processing (e.g. name, payment details, amount) is transmitted to and
        processed by Stripe as an independent controller, on the legal basis of
        Art. 6(1)(b) GDPR (performance of contract). See Stripe’s privacy policy
        at the link above for details.
      </p>

      <h2>8. Newsletter</h2>
      <p>
        Wenn Sie sich zu unserem Newsletter anmelden, verarbeiten wir Ihre
        E-Mail-Adresse, um Ihnen Neuigkeiten zuzusenden. Die Anmeldung erfolgt
        auf Grundlage Ihrer Einwilligung (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a
        DSGVO). Sie können den Newsletter jederzeit abbestellen und Ihre
        Einwilligung widerrufen, z.&nbsp;B. über den Abmeldelink in jeder E-Mail.
      </p>
      <p>
        If you subscribe to our newsletter we process your email address to send
        you updates, on the basis of your consent (Art. 6(1)(a) GDPR). You may
        unsubscribe and withdraw your consent at any time, e.g. via the
        unsubscribe link in every email.
      </p>

      <h2>9. Google Fonts</h2>
      <p>
        Zur einheitlichen Darstellung von Schriftarten binden wir Google Fonts
        der Google Ireland Limited ein. Beim Seitenaufruf kann dabei Ihre
        IP-Adresse an Google übermittelt werden. Rechtsgrundlage ist unser
        berechtigtes Interesse an einer ansprechenden Darstellung
        (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO). Weitere Informationen:{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          policies.google.com/privacy
        </a>
        .
      </p>
      <p>
        To display fonts consistently we use Google Fonts (Google Ireland
        Limited). When the page loads, your IP address may be transmitted to
        Google, on the legal basis of our legitimate interest in an appealing
        presentation (Art. 6(1)(f) GDPR).
      </p>

      <h2>10. Ihre Rechte · Your Rights</h2>
      <p>Sie haben nach der DSGVO jederzeit das Recht auf:</p>
      <ul>
        <li>Auskunft (Art. 15) · access</li>
        <li>Berichtigung (Art. 16) · rectification</li>
        <li>Löschung (Art. 17) · erasure</li>
        <li>Einschränkung der Verarbeitung (Art. 18) · restriction</li>
        <li>Datenübertragbarkeit (Art. 20) · data portability</li>
        <li>Widerspruch (Art. 21) · objection</li>
        <li>Widerruf erteilter Einwilligungen · withdrawal of consent</li>
      </ul>
      <p>
        Zur Ausübung genügt eine formlose Mitteilung an{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>. Ihnen steht
        zudem ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu
        (z.&nbsp;B. der Berliner Beauftragten für Datenschutz und
        Informationsfreiheit). · To exercise these rights, an informal message
        to the address above suffices. You also have the right to lodge a
        complaint with a data protection supervisory authority (e.g. the Berlin
        Commissioner for Data Protection and Freedom of Information).
      </p>

      <h2>11. Widerspruchsrecht · Right to Object</h2>
      <p>
        Soweit wir Daten auf Grundlage berechtigter Interessen (Art.&nbsp;6
        Abs.&nbsp;1 lit.&nbsp;f DSGVO) verarbeiten, können Sie der Verarbeitung
        aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit
        widersprechen. · Where we process data on the basis of legitimate
        interests, you may object at any time on grounds relating to your
        particular situation.
      </p>

      <h2>12. Änderungen · Changes</h2>
      <p>
        Wir passen diese Datenschutzerklärung an, sobald Änderungen unserer
        Dienste oder der Rechtslage dies erforderlich machen. Es gilt die jeweils
        auf dieser Seite veröffentlichte Fassung. · We update this policy
        whenever changes to our services or the legal situation require it. The
        version published on this page applies.
      </p>
    </LegalPage>
  );
}
