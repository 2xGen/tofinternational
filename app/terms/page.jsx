import Link from 'next/link';

export const metadata = {
  title: 'Terms and conditions - TOF Sports',
  description:
    'What you agree to when you register your interest in TOF Sports International.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white px-4 pb-20 pt-28 text-tof-indigo">
      <article className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tof-indigo/60">
          TOF Sports International
        </p>
        <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight md:text-5xl">
          Terms and conditions
        </h1>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-tof-indigo/80 md:text-lg md:leading-8">
          <p>
            Registering your interest on this website is a request to be kept informed. It is not
            an order, and it is not a contract for products, licences or services.
          </p>
          <p>By submitting the form, you agree that:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              TOF Sports may use the name, email address, country and role you provide to contact
              you about international availability and opportunities to work with TOF Sports.
            </li>
            <li>
              Those details are handled as described in the{' '}
              <Link href="/privacy" className="font-semibold text-tof-indigo underline underline-offset-2">
                privacy policy
              </Link>
              .
            </li>
            <li>
              You can ask us to stop contacting you, or to delete these details, by emailing{' '}
              <a href="mailto:info@tofsports.nl" className="font-semibold text-tof-indigo underline underline-offset-2">
                info@tofsports.nl
              </a>
              .
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}
