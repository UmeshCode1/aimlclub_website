Place member photos here as JPG or PNG (ideally square).
Recommended source size: 512x512 to 1024x1024.
Run `npm run images:optimize` (auto-runs before build) to create compressed WEBP versions.

Usage in data:
- In `src/data/content.ts`, set `image: '/images/team/<filename>.webp'` for a member.
- If `image` is omitted, the UI falls back to initials.
