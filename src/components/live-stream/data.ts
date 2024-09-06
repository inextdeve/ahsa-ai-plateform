const columns = [
  { name: "VIOLATION", uid: "violation" },
  { name: "ID", uid: "id" },
  { name: "SEVERITY", uid: "severity" },
  { name: "LOCATION", uid: "location" },
];

const violations = [
  {
    id: 1,
    violation: "Dust",
    severity: "low",
    location: "https://maps.app.goo.gl/UqV42iojyRGZGS4Q8",
  },
  {
    id: 2,
    violation: "Dust",
    severity: "high",
    location: "https://maps.app.goo.gl/UqV42iojyRGZGS4Q8",
  },
  {
    id: 3,
    violation: "Pole",
    severity: "low",
    location: "https://maps.app.goo.gl/UqV42iojyRGZGS4Q8",
  },
  {
    id: 4,
    violation: "Waste",
    severity: "med",
    location: "https://maps.app.goo.gl/UqV42iojyRGZGS4Q8",
  },
  {
    id: 5,
    violation: "Accident",
    severity: "low",
    location: "https://maps.app.goo.gl/UqV42iojyRGZGS4Q8",
  },
];

export { columns, violations };
