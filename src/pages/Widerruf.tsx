import LegalPage from "../components/LegalPage";
import { company } from "../data/legal";

export default function Widerruf() {
  return (
    <LegalPage
      docTitle="Widerrufsbelehrung"
      eyebrow="Rechtliches · Cancellation"
      title="Widerrufsbelehrung"
      intro="Informationen zum Widerrufsrecht für Verbraucher. · Information on the right of withdrawal for consumers."
    >
      <div className="callout">
        <strong>Wichtig · Important.</strong> Bei Waren, die nach Ihren
        individuellen Vorgaben angefertigt oder eindeutig auf Ihre persönlichen
        Bedürfnisse zugeschnitten sind (Maßanfertigung / Personalisierung),
        besteht <strong>kein Widerrufsrecht</strong> (§&nbsp;312g Abs.&nbsp;2
        Nr.&nbsp;1 BGB). Da der Großteil unserer Stücke individuell gefertigt
        wird, betrifft dies die meisten Bestellungen. · For goods made to your
        individual specifications or clearly personalised, there is{" "}
        <strong>no right of withdrawal</strong> (§ 312g(2) no. 1 BGB). As most
        of our pieces are bespoke, this applies to most orders.
      </div>

      <h2>Widerrufsrecht · Right of Withdrawal</h2>
      <p>
        Soweit es sich nicht um eine Maßanfertigung handelt, haben Sie das Recht,
        binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu
        widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem
        Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist,
        die Waren in Besitz genommen haben bzw. hat.
      </p>
      <p>
        Where the goods are not a bespoke/personalised item, you have the right
        to withdraw from this contract within fourteen days without giving any
        reason. The withdrawal period is fourteen days from the day on which you,
        or a third party other than the carrier indicated by you, take
        possession of the goods.
      </p>
      <p>
        Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen
        Erklärung (z.&nbsp;B. ein per Post versandter Brief oder eine E-Mail)
        über Ihren Entschluss informieren:
      </p>
      <address>
        <strong>{company.legalName}</strong>
        <br />
        {company.street}, {company.postalCity}, {company.country}
        <br />
        E-Mail: <a href={`mailto:${company.email}`}>{company.email}</a>
        <br />
        Telefon: {company.phone}
      </address>
      <p>
        Sie können dafür das untenstehende Muster-Widerrufsformular verwenden,
        das jedoch nicht vorgeschrieben ist. Zur Wahrung der Widerrufsfrist
        reicht es aus, dass Sie die Mitteilung über die Ausübung des
        Widerrufsrechts vor Ablauf der Frist absenden. · To exercise the right
        of withdrawal you must inform us by a clear statement (e.g. a letter or
        email) of your decision. You may use the model form below, though this is
        not mandatory. To meet the deadline it is sufficient to send your
        communication before the period expires.
      </p>

      <h2>Folgen des Widerrufs · Consequences of Withdrawal</h2>
      <p>
        Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die
        wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit
        Ausnahme zusätzlicher Kosten für eine andere Lieferart als die günstigste
        Standardlieferung), unverzüglich und spätestens binnen vierzehn Tagen ab
        Eingang Ihrer Widerrufsmitteilung zurückzuzahlen. Wir verwenden dasselbe
        Zahlungsmittel wie bei der ursprünglichen Transaktion; Entgelte fallen
        dafür nicht an.
      </p>
      <p>
        If you withdraw from this contract, we will reimburse all payments
        received from you, including delivery costs (except for supplementary
        costs arising from a delivery type other than the cheapest standard
        delivery), without undue delay and within fourteen days at the latest.
        We use the same means of payment as the original transaction; you will
        not be charged any fees.
      </p>
      <p>
        Wir können die Rückzahlung verweigern, bis wir die Waren wieder
        zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie
        die Waren zurückgesandt haben. Sie tragen die unmittelbaren Kosten der
        Rücksendung. · We may withhold reimbursement until we have received the
        goods back or you have supplied proof of return. You bear the direct
        cost of returning the goods.
      </p>

      <h2>Ausschluss des Widerrufsrechts · Exclusion</h2>
      <p>
        Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von Waren,
        die nicht vorgefertigt sind und für deren Herstellung eine individuelle
        Auswahl oder Bestimmung durch den Verbraucher maßgeblich ist oder die
        eindeutig auf die persönlichen Bedürfnisse des Verbrauchers zugeschnitten
        sind (§&nbsp;312g Abs.&nbsp;2 Nr.&nbsp;1 BGB). · The right of withdrawal
        does not apply to contracts for the supply of goods that are made to the
        consumer’s specifications or are clearly personalised.
      </p>

      <h2>Muster-Widerrufsformular · Model Withdrawal Form</h2>
      <p>
        (Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses Formular
        aus und senden Sie es zurück. · If you wish to withdraw from the
        contract, please complete and return this form.)
      </p>
      <div className="callout">
        An {company.legalName}, {company.street}, {company.postalCity},{" "}
        {company.email}:
        <br />
        <br />
        Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen
        Vertrag über den Kauf der folgenden Waren (*):
        <br />— Bestellt am (*) / erhalten am (*):
        <br />— Name des/der Verbraucher(s):
        <br />— Anschrift des/der Verbraucher(s):
        <br />— Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf
        Papier):
        <br />— Datum:
        <br />
        <br />
        (*) Unzutreffendes streichen · Delete as appropriate.
      </div>
    </LegalPage>
  );
}
