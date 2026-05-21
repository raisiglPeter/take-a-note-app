/**
 * Extracts a unique, alphabetically sorted array of tags from an array of notes.
 * @param {Array} data - Array of note objects
 * @returns {Array} Sorted string array of unique tags
 */

export function getUniqueTags(data) {
  if (!Array.isArray(data)) return [];

  const filteredTags = [];

  data.forEach((note) => {
    if (!note.metadata.tags) return;

    note.metadata.tags.forEach((tag) => {
      if (!filteredTags.includes(tag)) {
        filteredTags.push(tag);
      }
    });
  });

  return Array.from(filteredTags).sort();
}
