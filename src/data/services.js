// Each service has tabs; each tab has the fields its request form collects.
const contactFields = [
  { name: "fullName", label: "Full name", type: "text", required: true },
  { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true },
];
const notes = { name: "notes", label: "Additional notes", type: "textarea" };

export const services = [
  {
    slug: "air-tickets",
    title: "Air Tickets",
    icon: "fa-plane",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=70",
    summary: "Best fares on flights worldwide, booked for you 24/7.",
    tabs: [
      {
        label: "Air Tickets 24/7",
        fields: [
          { name: "from", label: "From (city)", type: "text", required: true },
          { name: "to", label: "To (city)", type: "text", required: true },
          { name: "departure", label: "Departure date", type: "date", required: true },
          { name: "return", label: "Return date", type: "date" },
          { name: "passengers", label: "Passengers", type: "number", min: 1, required: true },
          { name: "class", label: "Class", type: "select", options: ["Economy", "Business", "First"] },
        ],
      },
      {
        label: "Fast Track Service",
        fields: [
          { name: "airport", label: "Airport", type: "select", options: ["Heydar Aliyev International (GYD)", "Ganja (KVD)", "Nakhchivan (NAJ)", "Gabala (GBB)"] },
          { name: "service", label: "Service", type: "select", options: ["Arrival", "Departure", "Arrival + Departure"] },
          { name: "date", label: "Flight date", type: "date", required: true },
          { name: "flight", label: "Flight number", type: "text" },
        ],
      },
    ],
  },
  {
    slug: "accommodation",
    title: "Accommodation",
    icon: "fa-home",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=70",
    summary: "Hotels, villas and sanatoriums hand-picked for comfort.",
    tabs: ["Villa & VIP House", "Hotel", "Sanatorium"].map((label) => ({
      label,
      fields: [
        { name: "city", label: "City / region", type: "select", options: ["Baku", "Gabala", "Sheki", "Guba", "Shamakhi", "Naftalan", "Lankaran"] },
        { name: "checkIn", label: "Check-in", type: "date", required: true },
        { name: "checkOut", label: "Check-out", type: "date", required: true },
        { name: "guests", label: "Guests", type: "number", min: 1, required: true },
        { name: "budget", label: "Budget per night (AZN)", type: "number", min: 0 },
      ],
    })),
  },
  {
    slug: "tours",
    title: "Tours",
    icon: "fa-bus",
    image: "https://images.unsplash.com/photo-1603775020644-eb8decd79994?w=1200&q=70",
    summary: "Guided tours across Azerbaijan and abroad.",
    tabs: [
      { label: "Inbound tours", fields: [{ name: "tour", label: "Tour", type: "select", options: ["Baku city tour", "Gobustan & mud volcanoes", "Sheki & Gabala", "Guba & Khinalug"] }] },
      { label: "Welcome to Azerbaijan", fields: [{ name: "country", label: "Your country", type: "text", required: true }] },
      { label: "Outgoing tours", fields: [{ name: "destination", label: "Destination", type: "select", options: ["Turkey", "Georgia", "UAE", "Egypt", "Europe", "Other"] }] },
    ].map((t) => ({
      ...t,
      fields: [...t.fields, { name: "date", label: "Preferred date", type: "date", required: true }, { name: "people", label: "People", type: "number", min: 1, required: true }],
    })),
  },
  {
    slug: "visa",
    title: "Visa Support",
    icon: "fa-id-card",
    image: "https://images.unsplash.com/photo-1544016768-982d1554f0b9?w=1200&q=70",
    summary: "Help with documents and applications for your visa.",
    tabs: [
      {
        label: "Visa",
        fields: [
          { name: "country", label: "Destination country", type: "select", options: ["Schengen", "United Kingdom", "USA", "UAE", "Turkey", "Other"] },
          { name: "visaType", label: "Visa type", type: "select", options: ["Tourist", "Business", "Student", "Transit"] },
          { name: "travelDate", label: "Planned travel date", type: "date" },
        ],
      },
    ],
  },
  {
    slug: "transfer-service",
    title: "Transport Service",
    icon: "fa-car",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=70",
    summary: "Airport transfers, drivers, car rental and cargo.",
    tabs: [
      { label: "Airport Transfer", fields: [{ name: "direction", label: "Direction", type: "select", options: ["Airport → Hotel", "Hotel → Airport"] }, { name: "flight", label: "Flight number", type: "text" }] },
      { label: "Transfer Service", fields: [{ name: "from", label: "Pick-up", type: "text", required: true }, { name: "to", label: "Drop-off", type: "text", required: true }] },
      { label: "Rent a Car", fields: [{ name: "car", label: "Car", type: "select", options: ["Economy", "Sedan", "SUV", "Minivan", "Luxury"] }, { name: "days", label: "Days", type: "number", min: 1, required: true }] },
      { label: "Cargo", fields: [{ name: "from", label: "From", type: "text", required: true }, { name: "to", label: "To", type: "text", required: true }, { name: "weight", label: "Weight (kg)", type: "number", min: 0 }] },
    ].map((t) => ({ ...t, fields: [...t.fields, { name: "date", label: "Date", type: "date", required: true }] })),
  },
];

// Every form ends with contact details and notes.
services.forEach((s) => s.tabs.forEach((t) => { t.fields = [...t.fields, ...contactFields, notes]; }));

export const contact = {
  whatsapp: "9940504442674",
  instagram: "https://www.instagram.com/grandalatravel/",
};
