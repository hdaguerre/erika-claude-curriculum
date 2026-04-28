/**
 * progress.js — Erika's Curriculum Progress Manager
 * Stores progress in localStorage so it persists across browser sessions.
 * Key: "erika_curriculum_progress" → JSON array of completed day numbers
 */

const STORAGE_KEY = "erika_curriculum_progress";

/**
 * Load the current completed-days array from localStorage.
 * Returns an empty array if nothing has been saved yet.
 */
function _loadCompleted() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

/**
 * Persist the completed-days array to localStorage.
 */
function _saveCompleted(arr) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
}

/**
 * Mark a day as complete.
 * @param {number} dayNum — the day number (1–20)
 */
function markComplete(dayNum) {
  const completed = _loadCompleted();
  if (!completed.includes(dayNum)) {
    completed.push(dayNum);
    _saveCompleted(completed);
  }
}

/**
 * Check whether a specific day is complete.
 * @param {number} dayNum
 * @returns {boolean}
 */
function isComplete(dayNum) {
  return _loadCompleted().includes(dayNum);
}

/**
 * Return the number of completed days.
 * @returns {number}
 */
function getCompletedCount() {
  return _loadCompleted().length;
}

/**
 * Return a summary object with the completed array and percentage.
 * @returns {{ completed: number[], percentage: number }}
 */
function getProgress() {
  const completed = _loadCompleted();
  const percentage = Math.round((completed.length / 20) * 100);
  return { completed, percentage };
}

/**
 * Reset all progress (shows a confirmation dialog first).
 * Returns true if reset, false if the user cancelled.
 */
function resetProgress() {
  const confirmed = window.confirm(
    "Are you sure you want to reset all progress? This cannot be undone."
  );
  if (confirmed) {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  }
  return false;
}
