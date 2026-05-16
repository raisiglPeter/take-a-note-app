import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

const dummy_data = [
  {
    id: "1",
    title: "Project Ideas",
    content:
      "Build a MERN Google Keep clone with Supabase and Tailwind v4. Focus on mobile-first thumb accessibility.",
    type: "text",
    theme: "theme-blue",
    layout: { x: 0, y: 0, w: 2, h: 2 },
    metadata: {
      isPinned: true,
      labels: ["dev", "portfolio"],
    },
  },
  {
    id: "2",
    title: "Grocery List",
    content: "",
    type: "checklist",
    theme: "theme-green",
    layout: { x: 2, y: 0, w: 2, h: 3 },
    metadata: {
      items: [
        { text: "Pickled red onions ingredients", completed: true },
        { text: "Chicken breast for fajitas", completed: false },
        { text: "Eggs for salad", completed: false },
        { text: "AKG K702 replacement pads", completed: false },
      ],
    },
  },
  {
    id: "3",
    title: "Setup Inspo",
    content:
      "Check out some desk setups for ultra-wide monitors and high-fidelity audio gear.",
    type: "image",
    theme: "theme-yellow",
    layout: { x: 4, y: 0, w: 2, h: 4 },
    metadata: {
      imageUrl:
        "https://images.unsplash.com/photo-1493933319297-393757d7f1d4?auto=format&fit=crop&q=80&w=400",
      imageAlt: "Minimalist desk setup",
    },
  },
  {
    id: "4",
    title: "Gaming Backlog",
    content:
      "Finish the DLC for Elden Ring before starting a new playthrough of Baldur's Gate 3.",
    type: "text",
    theme: "theme-red",
    layout: { x: 0, y: 2, w: 2, h: 2 },
    metadata: {
      reminder: "2026-06-01T10:00:00Z",
    },
  },
  {
    id: "5",
    title: "Weekly Sprint Goals",
    content: "",
    type: "checklist",
    theme: "theme-blue",
    layout: { x: 2, y: 3, w: 2, h: 2 },
    metadata: {
      items: [
        { text: "Implement react-grid-layout", completed: true },
        { text: "Connect Supabase Auth", completed: false },
        { text: "Fix Tailwind v4 CSS squiggles", completed: true },
      ],
    },
  },
];

// src/App.jsx
function App() {
  return (
    <div className="flex flex-col justify-between w-full h-screen overflow-hidden">
      <Header />
      <Main data={dummy_data} />
      <Footer />
    </div>
  );
}

export default App;
