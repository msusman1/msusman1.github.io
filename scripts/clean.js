const fs = require('fs');

try {
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
  }
} catch (err) {
  // If rmdir fails due to indexer locks, clear contents inside dist
  try {
    const entries = fs.readdirSync('dist');
    for (const entry of entries) {
      try {
        fs.rmSync(`dist/${entry}`, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
      } catch (innerErr) {
        // continue
      }
    }
  } catch (e) {
    // ignore
  }
}
