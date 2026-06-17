import LegalPage from "../components/LegalPage";
import { company, odrUrl } from "../data/legal";

export default function Impressum() {
  return (
    <LegalPage
      docTitle="Impressum"
      eyebrow="Rechtliches · Legal Notice"
      title="Impressum"
      intro="Angaben gemäß § 5 TMG · Information pursuant to § 5 German Telemedia Act (TMG)."
    >
      <h2>Diensteanbieter · Service Provider</h2>
      <address>
        <strong>{company.legalName}</strong>
        <br />
        {company.street}
        <br />
        {company.postalCity}
        <br />
        {company.country}
      </address>

      <h2>Vertreten durch · Represented by</h2>
      <p>Geschäftsführer · Managing Director: {company.managingDirector}</p>

      <h2>Kontakt · Contact</h2>
      <p>
        Telefon · Phone:{" "}
        <a href={`tel:${company.phone.replace(/\s+/g, "")}`}>{company.phone}</a>
        <br />
        E-Mail · Email: <a href={`mailto:${company.email}`}>{company.email}</a>
      </p>

      <h2>Handelsregister · Commercial Register</h2>
      <p>
        Registergericht · Register Court: {company.registerCourt}
        <br />
        Registernummer · Registration Number: {company.registerNumber}
      </p>

      <h2>Umsatzsteuer · VAT</h2>
      {company.vatId ? (
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG · VAT ID pursuant
          to § 27a German VAT Act:
          <br />
          <strong>{company.vatId}</strong>
        </p>
      ) : (
        <p>
          Eine Umsatzsteuer-Identifikationsnummer wird nachgereicht, sobald sie
          erteilt wurde. · A VAT identification number will be added once it has
          been issued.
        </p>
      )}
      {company.taxNumber && <p>Steuernummer · Tax Number: {company.taxNumber}</p>}

      <h2>Verantwortlich für den Inhalt · Responsible for Content</h2>
      <p>
        Gemäß § 18 Abs. 2 MStV · pursuant to § 18 (2) German Media State Treaty:
      </p>
      <address>
        {company.contentResponsible}
        <br />
        {company.street}, {company.postalCity}
      </address>

      <h2>EU-Streitschlichtung · EU Dispute Resolution</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a href={odrUrl} target="_blank" rel="noopener noreferrer">
          {odrUrl}
        </a>
        . Unsere E-Mail-Adresse finden Sie oben.
      </p>
      <p>
        The European Commission provides a platform for online dispute
        resolution (ODR) at the link above. You can find our email address in
        this legal notice.
      </p>

      <h2>Verbraucherstreitbeilegung · Consumer Dispute Resolution</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen. · We are neither
        willing nor obliged to participate in dispute resolution proceedings
        before a consumer arbitration board.
      </p>

      <h2>Haftung &amp; Urheberrecht · Liability &amp; Copyright</h2>
      <p>
        Die Inhalte dieser Seiten wurden mit größtmöglicher Sorgfalt erstellt.
        Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte sowie
        für Inhalte externer Links, auf deren Gestaltung wir keinen Einfluss
        haben, übernehmen wir keine Gewähr. Die durch uns erstellten Inhalte und
        Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
      </p>
      <p>
        The content of these pages was created with the greatest possible care.
        We assume no liability for the accuracy, completeness or timeliness of
        the content, nor for the content of external links over which we have no
        control. Content and works created by us are subject to German copyright
        law.
      </p>
    </LegalPage>
  );
}
