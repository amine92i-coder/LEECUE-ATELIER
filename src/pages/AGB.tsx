import { Link } from "react-router-dom";
import LegalPage from "../components/LegalPage";
import { company } from "../data/legal";

export default function AGB() {
  return (
    <LegalPage
      docTitle="AGB"
      eyebrow="Rechtliches · Terms"
      title={
        <>
          Allgemeine
          <br />
          Geschäftsbedingungen
        </>
      }
      intro="AGB für Verbraucherverträge im Fernabsatz. · General Terms & Conditions for distance contracts with consumers."
    >
      <h2>§ 1 Geltungsbereich · Scope</h2>
      <p>
        Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge, die Sie
        als Verbraucher oder Unternehmer mit der {company.legalName}
        {" "}(nachfolgend „wir“ oder „{company.brand}“) über diese Website oder im
        Anschluss an eine Anfrage über das Auftragsformular schließen. Abweichende
        Bedingungen erkennen wir nicht an, sofern wir ihnen nicht ausdrücklich
        zugestimmt haben.
      </p>
      <p>
        These Terms apply to all contracts you conclude with{" "}
        {company.legalName} (“we” / “{company.brand}”) as a consumer or business,
        via this website or following an enquiry through the commission form.
      </p>

      <h2>§ 2 Vertragspartner · Contracting Party</h2>
      <p>
        Der Vertrag kommt zustande mit der {company.legalName},{" "}
        {company.street}, {company.postalCity}, vertreten durch den
        Geschäftsführer {company.managingDirector}. · The contract is concluded
        with {company.legalName}, represented by its Managing Director{" "}
        {company.managingDirector}.
      </p>

      <h2>§ 3 Vertragsschluss · Formation of Contract</h2>
      <p>
        Unsere Produktdarstellungen stellen kein bindendes Angebot dar, sondern
        eine Aufforderung zur Abgabe einer Anfrage. Da unsere Stücke individuell
        gefertigt werden, läuft der Vertragsschluss in der Regel wie folgt ab:
      </p>
      <ul>
        <li>Sie senden uns eine Anfrage mit Ihren Wünschen.</li>
        <li>
          Wir erstellen ein individuelles Angebot (Design, Leder, Preis,
          Lieferzeit).
        </li>
        <li>
          Mit Ihrer Bestätigung des Angebots und – soweit vereinbart – der
          Zahlung über Stripe kommt der Vertrag zustande.
        </li>
      </ul>
      <p>
        Our product presentations are not a binding offer but an invitation to
        submit an enquiry. As our pieces are individually made, the contract is
        usually formed once you approve our individual offer (design, leather,
        price, lead time) and — where agreed — complete payment via Stripe.
      </p>

      <h2>§ 4 Maßanfertigung · Bespoke Manufacture</h2>
      <p>
        Der wesentliche Teil unseres Sortiments wird nach Ihren individuellen
        Vorgaben angefertigt (Maßanfertigung / Personalisierung). Geringfügige,
        materialbedingte Abweichungen in Maserung, Farbe und Struktur natürlicher
        Leder sind kein Mangel, sondern Ausdruck der handwerklichen
        Einzelfertigung. Bitte beachten Sie die Hinweise zum Widerrufsrecht in §
        7. · The majority of our range is made to your individual
        specifications. Minor, material-related variations in grain, colour and
        texture of natural leather are not defects but a hallmark of handmade,
        one-by-one production. Please note the cancellation information in § 7.
      </p>

      <h2>§ 5 Preise &amp; Zahlung · Prices &amp; Payment</h2>
      <p>
        Alle Preise verstehen sich als Endpreise. Etwaige Versand-, Zoll- oder
        Einfuhrkosten werden gesondert ausgewiesen bzw. mitgeteilt. Die Zahlung
        erfolgt über unseren Zahlungsdienstleister Stripe (u.&nbsp;a. Kredit-/
        Debitkarte). Eine Anzahlung wird erst fällig, nachdem Sie Design und
        Angebot freigegeben haben.
      </p>
      <p>
        All prices are final prices. Any shipping, customs or import charges are
        shown or communicated separately. Payment is handled via our payment
        provider Stripe. No deposit is due until you have approved your design
        and quote.
      </p>

      <h2>§ 6 Lieferung &amp; Lieferzeit · Delivery &amp; Lead Time</h2>
      <p>
        Da jedes Stück auf Bestellung gefertigt wird, teilen wir Ihnen die
        voraussichtliche Fertigungs- und Lieferzeit im individuellen Angebot mit.
        Der Versand erfolgt weltweit. Angegebene Fristen sind, sofern nicht
        ausdrücklich als verbindlich bezeichnet, unverbindliche Richtwerte. ·
        As each piece is made to order, we state the expected production and
        delivery time in your individual offer. We ship worldwide. Unless
        expressly designated as binding, stated periods are non-binding
        estimates.
      </p>

      <h2>§ 7 Widerrufsrecht · Right of Withdrawal</h2>
      <p>
        Als Verbraucher steht Ihnen grundsätzlich ein 14-tägiges Widerrufsrecht
        zu. Bei Waren, die nach Ihren individuellen Vorgaben angefertigt oder
        eindeutig auf Ihre persönlichen Bedürfnisse zugeschnitten sind, ist das
        Widerrufsrecht jedoch nach §&nbsp;312g Abs.&nbsp;2 Nr.&nbsp;1 BGB
        ausgeschlossen. Einzelheiten und das Muster-Widerrufsformular finden Sie
        in unserer{" "}
        <Link to="/widerruf">Widerrufsbelehrung</Link>.
      </p>
      <p>
        As a consumer you generally have a 14-day right of withdrawal. However,
        for goods made to your individual specifications or clearly personalised,
        the right of withdrawal is excluded under § 312g(2) no. 1 German Civil
        Code (BGB). For details and the model withdrawal form, see our{" "}
        <Link to="/widerruf">cancellation policy</Link>.
      </p>

      <h2>§ 8 Eigentumsvorbehalt · Retention of Title</h2>
      <p>
        Die gelieferte Ware bleibt bis zur vollständigen Bezahlung unser
        Eigentum. · Delivered goods remain our property until paid in full.
      </p>

      <h2>§ 9 Gewährleistung · Statutory Warranty</h2>
      <p>
        Es gelten die gesetzlichen Mängelrechte. Als Verbraucher haben Sie bei
        Sachmängeln die gesetzlichen Gewährleistungsrechte nach §§&nbsp;434&nbsp;ff.
        BGB. · The statutory rights regarding defects apply. As a consumer you
        have the statutory warranty rights under §§ 434 et seq. BGB.
      </p>

      <h2>§ 10 Haftung · Liability</h2>
      <p>
        Wir haften unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für
        Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.
        Bei einfacher Fahrlässigkeit haften wir nur bei Verletzung einer
        wesentlichen Vertragspflicht (Kardinalpflicht) und begrenzt auf den
        vertragstypischen, vorhersehbaren Schaden. Im Übrigen ist die Haftung
        ausgeschlossen.
      </p>
      <p>
        We are liable without limitation for intent and gross negligence and for
        damage to life, body or health. In cases of slight negligence we are
        liable only for breach of a material contractual obligation and limited
        to foreseeable damage typical of the contract. Liability is otherwise
        excluded.
      </p>

      <h2>§ 11 Streitbeilegung · Dispute Resolution</h2>
      <p>
        Informationen zur EU-Online-Streitbeilegung finden Sie in unserem{" "}
        <Link to="/impressum">Impressum</Link>. Zur Teilnahme an einem
        Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind
        wir nicht verpflichtet und nicht bereit. · Information on EU online
        dispute resolution is provided in our{" "}
        <Link to="/impressum">legal notice</Link>. We are not obliged and not
        willing to participate in proceedings before a consumer arbitration
        board.
      </p>

      <h2>§ 12 Schlussbestimmungen · Final Provisions</h2>
      <p>
        Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des
        UN-Kaufrechts; zwingende Verbraucherschutzvorschriften des Staates Ihres
        gewöhnlichen Aufenthalts bleiben unberührt. Sollte eine Bestimmung
        unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen
        unberührt.
      </p>
      <p>
        The law of the Federal Republic of Germany applies, excluding the UN
        Convention on Contracts for the International Sale of Goods; mandatory
        consumer-protection provisions of your country of habitual residence
        remain unaffected. Should any provision be invalid, the remaining
        provisions remain effective.
      </p>
    </LegalPage>
  );
}
