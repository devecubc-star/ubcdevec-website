const CALENDAR_ID = 'devec.ubc@gmail.com';
const CALENDAR_SRC = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(CALENDAR_ID)}&ctz=America%2FVancouver`;

// NOTE: this calendar must be set to "public" in Google Calendar's
// Settings & Sharing for events to actually appear here — otherwise the
// embed renders but shows nothing.
export function CalendarEmbed() {
  return (
    <div className="h-full min-h-[420px] w-full overflow-hidden rounded-2xl border border-navy/10">
      <iframe
        src={CALENDAR_SRC}
        title="UBC Development Economics Club Events Calendar"
        className="h-full w-full"
        style={{ border: 0 }}
        loading="lazy"
      />
    </div>
  );
}
