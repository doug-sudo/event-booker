/**
 * Holiday weeks for 2026 — blocks all slots (Tue, Wed, Thu, Fri, Sat-Sun) for the week.
 * Dates show the Fri-Sun range for the holiday week.
 * Some holidays are regional (Canada-only).
 */
export const holidays2026 = [
  { name: "New Year's Weekend", week: 1, start: '2026-01-02', end: '2026-01-04', global: true },
  { name: 'Good Friday / Easter', week: 14, start: '2026-04-03', end: '2026-04-05', global: true },
  { name: 'Victoria Day (Canada)', week: 20, start: '2026-05-15', end: '2026-05-17', global: false },
  { name: 'Memorial Day Weekend', week: 21, start: '2026-05-22', end: '2026-05-24', global: true },
  { name: 'Independence Day Weekend', week: 27, start: '2026-07-03', end: '2026-07-05', global: true },
  { name: 'Labor Day Weekend', week: 36, start: '2026-09-04', end: '2026-09-06', global: true },
  { name: 'Thanksgiving (Canada)', week: 41, start: '2026-10-09', end: '2026-10-11', global: false },
  { name: 'Thanksgiving Weekend', week: 48, start: '2026-11-27', end: '2026-11-29', global: true },
  { name: 'Weekend Before Christmas', week: 51, start: '2026-12-18', end: '2026-12-20', global: true },
  { name: 'Christmas / Boxing Day', week: 52, start: '2026-12-25', end: '2026-12-27', global: true },
]
