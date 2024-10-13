// src/services/newsService.ts
export const fetchNews = () => {
    return Promise.resolve([
      { id: 1, title: "Temple Festival Announcement", description: "The temple festival will be held next week." },
      { id: 2, title: "Pooja Timings Update", description: "The pooja timings have been updated for the summer season." },
      { id: 3, title: "Special Rituals for Melbanta Deva", description: "Special rituals will be conducted for Melbanta Deva on the 15th of this month." }
    ]);
  };
  