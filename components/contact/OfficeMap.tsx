import { site } from "@/content/site";

export default function OfficeMap() {
  const query = encodeURIComponent(
    `${site.address.streetAddress}, ${site.address.addressLocality}, ${site.address.plusCode}`
  );

  return (
    <iframe
      title={`${site.name} office location`}
      src={`https://www.google.com/maps?q=${query}&output=embed`}
      className="h-full w-full rounded-brand-md border border-line"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
