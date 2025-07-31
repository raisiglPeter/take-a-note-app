import Card from "../ui/Card";

const notes = [
  {
    id: 1001,
    title: "Grocery List 🛒",
    description:
      "Milk, Eggs, Bread, Bananas, Ground Beef, Spinach, Cereal, Milk, Eggs, Bread, Bananas, Ground Beef, Spinach, Cereal",
    images: [],
    pinned: true,
    checkbox: true,
  },
  {
    id: 1002,
    title: "Workout Routine 💪",
    description:
      "Monday: Chest + Triceps\nWednesday: Back + Biceps\nFriday: Legs + Core\nSunday: Yoga",
    images: [],
    pinned: true,
    checkbox: false,
  },
  {
    id: 1003,
    title: "React Dev Notes ⚛️",
    description:
      "Use `useEffect` for side-effects\nUse `useState` to manage local state\nAvoid prop drilling with Context. Use `useEffect` for side-effects\nUse `useState` to manage local state\nAvoid prop drilling with Context. Use `useEffect` for side-effects\nUse `useState` to manage local state\nAvoid prop drilling with Context",
    images: [],
    pinned: true,
    checkbox: false,
  },
  {
    id: 1004,
    title: "Book Recommendations 📚",
    description:
      "Atomic Habits by James Clear\nDeep Work by Cal Newport\nThe Pragmatic Programmer",
    images: [],
    pinned: false,
    checkbox: false,
  },
  {
    id: 1005,
    title: "Travel Checklist ✈️",
    description:
      "Passport\nPower Adapter\nToiletries\nSnacks\nMap of destination\nEmergency contacts",
    images: [],
    pinned: false,
    checkbox: true,
  },
  {
    id: 1006,
    title: "Gift Ideas 🎁",
    description:
      "Wireless earbuds\nCustom mug\nBoard games\nScratch-off map\nNovelty socks.manage local state Avoid prop drilling with Context. Use `useEffect` for side-effects Use `useState` to manage local state Avoid prop drilling with Context. Use `useEffect` for side-effects Use `useState` to. manage local state Avoid prop drilling with Context. Use `useEffect` for side-effects Use `useState` to manage local state Avoid prop drilling with Context. Use `useEffect` for side-effects Use `useState` to. manage local state Avoid prop drilling with Context. Use `useEffect` for side-effects Use `useState` to manage local state Avoid prop drilling with Context. Use `useEffect` for side-effects Use `useState` to",
    images: [],
    pinned: false,
    checkbox: true,
  },
  {
    id: 1007,
    title: "Coding Ref: JavaScript Snippets 💻",
    description:
      "Debounce function\nArray flattening\nRegex ,manage local state Avoid prop drilling with Context. Use `useEffect` for side-effects Use `useState` to manage local state Avoid prop drilling with Context. Use `useEffect` for side-effects Use `useState` to, manage local state Avoid prop drilling with Context. Use `useEffect` for side-effects Use `useState` to manage local state Avoid prop drilling with Context. Use `useEffect` for side-effects Use `useState` to, manage local state Avoid prop drilling with Context. Use `useEffect` for side-effects Use `useState` to manage local state Avoid prop drilling with Context. Use `useEffect` for side-effects Use `useState` tofor email validation.Use `useEffect` for side-effects\nUse `useState` to manage local state\nAvoid prop drilling with ContextUse `useEffect` for side-effects\nUse `useState` to manage local state\nAvoid prop drilling with Context. ",
    images: [],
    pinned: true,
    checkbox: false,
  },
  {
    id: 1008,
    title: "Daily Affirmations 🌞",
    description:
      "I am capable.\nI am resilient.\nI choose positivity.\nI learn from mistakes.",
    images: [],
    pinned: false,
    checkbox: true,
  },
  {
    id: 1009,
    title: "Meal Prep Plan 🍽️",
    description:
      "Mon: Stir-fry\nTue: Pasta Salad\nWed: Chicken Wraps\nThu: Lentil Soup\nFri: Tacos",
    images: [],
    pinned: false,
    checkbox: false,
  },
  {
    id: 1010,
    title: "App Feature Ideas 💡",
    description:
      "User profiles\nSearch functionality\nDark mode toggle\nDrag-and-drop notes\nOffline sync",
    images: [],
    pinned: true,
    checkbox: false,
  },
];

function Main({ twoColumns = true }) {
  const pinnedNotes = notes.filter((note) => note.pinned);
  const unpinnedNotes = notes.filter((note) => !note.pinned);

  return (
    <main className="w-full p-2 bg-[var(--bg-mid)] grow overflow-y-auto mx-auto space-y-6">
      {/* Pinned Section */}
      {pinnedNotes.length > 0 && (
        <section>
          <h2 className="text-sm font-semibold text-muted mb-2 px-1">
            📌 Pinned Notes
          </h2>
          <div
            className={`w-full ${
              twoColumns ? "columns-2 md:columns-3 lg:columns-4" : "columns-1"
            } gap-2`}
          >
            {pinnedNotes.map((note) => (
              <div key={note.id} className="break-inside-avoid mb-2">
                <Card title={note.title} description={note.description} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Unpinned Section */}
      <section>
        <h2 className="text-sm font-semibold text-muted mb-2 px-1">📝 Notes</h2>
        <div
          className={`w-full ${
            twoColumns ? "columns-2 md:columns-3 lg:columns-4" : "columns-1"
          } gap-2`}
        >
          {unpinnedNotes.map((note) => (
            <div key={note.id} className="break-inside-avoid mb-2">
              <Card title={note.title} description={note.description} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
