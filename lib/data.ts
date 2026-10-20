export const company = {
  name: "WOI Agro Industrial Co. Limited",
  short: "WOI Agro",
  tagline: "Powering sustainable growth",
  email: "info@woiagroindustrialcoltd.co.tz",
  phone: "+255 22 2126566",
  phoneHref: "+255222126566",
  address: "P.O. Box 2259, Dar es Salaam, Tanzania",
};

export type Product = {
  slug: string; name: string; short: string; img: string; cutout?: boolean;
  facts: [string, string][]; specs?: [string, string][]; gallery?: { img: string; label: string }[];
};

export const products: Product[] = [
  { slug: "green-coffee", name: "Green Coffee Beans", short: "Arabica AA, AB, PB & FAQ. Robusta screen 18, 16, 14 & PB.",
    img: "coffee-hands", facts: [
      ["Grades", "Arabica: AA, AB, PB & FAQ. Robusta: Screen 18, 16, 14 & PB"], ["Origin", "Tanzania"],
      ["Harvest", "Arabica July to October. Robusta June to September"], ["Moisture", "10 to 12.5%"],
      ["Packaging", "Jute bag with GrainPro liner"], ["Export capacity", "As per order"]],
    gallery: [{ img: "coffee-sack", label: "Green beans, jute bag" }] },
  { slug: "dried-ginger", name: "Dried Ginger", short: "Whole, sliced or split. Naturally dried, cleaned and sorted.",
    img: "ginger", cutout: true, facts: [
      ["Botanical name", "Zingiber officinale"], ["Origin", "Tanzania"], ["Moisture", "10 to 12%"],
      ["Packaging", "PP or jute bags, 25 or 50 kg"], ["Quantity", "According to buyer requirement"]],
    specs: [["Product type", "Whole / Sliced / Split"], ["Color", "Natural yellow to light brown"], ["Aroma", "Strong natural ginger aroma"],
      ["Taste", "Strong pungent ginger flavor"], ["Moisture content", "10 to 12% max"], ["Foreign matter", "0.5% max"],
      ["Broken pieces", "According to buyer requirement"], ["Mold", "Free from mold"], ["Insects", "Free from live insects"],
      ["Additives", "None"], ["Processing", "Natural drying, cleaned and sorted"]] },
  { slug: "sesame-seeds", name: "Sesame Seeds", short: "Natural sesame, white, cream and black mixture.",
    img: "sesame", facts: [["Color", "White / cream / black (mixture)"], ["Type", "Natural sesame"], ["Origin", "Tanzania"],
      ["Harvest", "June to August"], ["Purity", "98%"], ["Oil content", "45 to 55%"], ["Moisture", "6 to 7%"], ["Packaging", "PP bags, 50 kg"]] },
  { slug: "avocados", name: "Hass Avocados", short: "Hass variety, packed in carton boxes.",
    img: "avocado", cutout: true, facts: [["Variety", "Hass"], ["Origin", "Tanzania"], ["Harvest", "March to August"], ["Packaging", "Carton boxes"]] },
  { slug: "raw-cashew", name: "Raw Cashew Nuts", short: "Raw nuts in 80 kg jute or sisal bags.",
    img: "cashew-raw", facts: [["Origin", "Tanzania"], ["Harvest", "October to January"], ["Moisture", "8 to 10%"], ["Packaging", "80 kg jute / sisal bags"]] },
  { slug: "processed-cashew", name: "Processed Cashew Kernels", short: "Graded kernels, W180 through LP/SP.",
    img: "cashew-kernel", facts: [["Origin", "Tanzania"], ["Kernel grades", "W180, W210, W240, W320, W450, SWP & LP/SP"],
      ["Moisture", "5%"], ["Packaging", "Food-grade export packaging"]] },
  { slug: "spices", name: "Spices", short: "Cloves, black pepper, cinnamon, cardamom. Others on request.",
    img: "clove", cutout: true, facts: [["Range", "Cloves, black pepper, cinnamon, cardamom"], ["Other spices", "Upon request"], ["Origin", "Tanzania"]],
    gallery: [{ img: "clove", label: "Cloves" }, { img: "pepper", label: "Black pepper" }, { img: "cinnamon", label: "Cinnamon" }, { img: "cardamom", label: "Cardamom" }] },
];

// Harvest windows from the product catalog (months 1-12). Ginger & spices have no season stated.
export const harvest = [
  { name: "Arabica coffee", from: 7, to: 10 }, { name: "Robusta coffee", from: 6, to: 9 },
  { name: "Sesame", from: 6, to: 8 }, { name: "Hass avocado", from: 3, to: 8 }, { name: "Raw cashew", from: 10, to: 1 },
];

export const whyWoi = [
  ["Reliable supply", "Export volumes set by your order, not by a fixed catalogue cap."],
  ["Competitive prices", "Direct from a Tanzanian exporter."],
  ["Quality control", "Inspection and traceability on every lot."],
  ["Timely delivery", "Packed and documented to ship on schedule."],
  ["Professional service", "One team from first inquiry to the container."],
];

export const faqs = [
  ["What quantities can you supply?", "Quantities follow the buyer's requirement. Green coffee export capacity is as per order."],
  ["How is the produce packed?", "It depends on the product: jute bags with GrainPro liner for coffee, PP or jute bags for ginger and sesame, 80 kg jute or sisal bags for raw cashew, food-grade export packaging for kernels, carton boxes for avocados."],
  ["When is each crop available?", "See the harvest calendar above. Arabica July to October, Robusta June to September, sesame June to August, avocados March to August, raw cashew October to January."],
  ["Do you supply spices not on the list?", "Yes. Cloves, black pepper, cinnamon and cardamom are standard; other spices are available on request."],
];

export const qaPillars = [
  ["Quality inspection", "Each lot is checked against the product specification before it is packed: moisture, foreign matter, grade and appearance."],
  ["Traceability", "Lots are recorded from sourcing through packing so any shipment can be traced back to its origin."],
  ["Food safety standards", "Handling, drying, sorting and packing follow food safety requirements for export markets."],
  ["Export documentation", "Commercial and shipping paperwork is prepared with the shipment, so the container does not wait on documents."],
];

export const orderSteps = [
  ["Inquiry", "Tell us the product, grade, quantity and destination."],
  ["Specification", "We confirm the specification, packaging and availability for the season."],
  ["Confirmation", "Terms and price are agreed and the order is confirmed."],
  ["Inspection & packing", "The lot is inspected, then packed in the agreed packaging."],
  ["Documentation", "Export documents are prepared for the shipment."],
  ["Shipment", "Goods are loaded and dispatched to your port."],
];

export const values = [
  ["Reliable supply", "Volumes follow the buyer's order. Availability is planned around the harvest calendar."],
  ["Consistent quality", "The grade and moisture you approve are the grade and moisture you receive."],
  ["Honest partnership", "Clear specifications, clear prices and no surprises at the port."],
  ["Sustainable growth", "Our promise is in the logo: powering sustainable growth for Tanzanian agriculture and the buyers we serve."],
];

export const marqueeItems = ["Green coffee", "Raw cashew", "Cashew kernels", "Sesame seeds", "Dried ginger", "Hass avocados", "Cloves", "Black pepper", "Cinnamon", "Cardamom"];
