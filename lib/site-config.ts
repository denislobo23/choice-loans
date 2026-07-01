// Central place to wire up real contact + lead-routing details.
// Everything here is a placeholder — replace before going live.

export const siteConfig = {
  name: "ChoiceLoans",
  domain: "choiceloans.com.au",
  url: "https://choiceloans.com.au",

  // TODO: replace with your real tracked number (e.g. CallRail-style number)
  phoneDisplay: "1300 000 000",
  phoneHref: "tel:1300000000",

  // TODO: replace with a monitored inbox
  email: "enquiries@choiceloans.com.au",

  // TODO: replace with your real Formspree form ID (from your Formspree dashboard)
  // Sign up at https://formspree.io, create a form, and paste the ID (the part after "f/")
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",

  // ChoiceLoans operates as a pure lead-referral/information site — it does not
  // hold an Australian Credit Licence and does not provide credit assistance.
  // Enquiries are referred to third-party lenders/brokers/partners who handle
  // any credit assistance and lending decisions themselves.
  // See app/legal/credit-guide/page.tsx ("How We Work") for the full disclosure.

  abn: "", // TODO: add ABN — needed across the legal pages before launch
};
