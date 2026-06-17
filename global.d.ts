// Allow importing global CSS files (and other style files) as side-effect imports in TypeScript
// This prevents errors like: "Cannot find module or type declarations for side-effect import of './globals.css'"
declare module '*.css';
declare module '*.scss';
declare module '*.sass';