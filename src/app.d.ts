// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  interface Locals {
    auth: import("lucia-auth").AuthRequest;
  }
  // interface PageData {}
  // interface Error {}
  // interface Platform {}
}

/// <reference types="lucia" />
declare global {
  namespace Lucia {
    type Auth = import("$lib/server/lucia").Auth;
    type UserAttributes = {};
  }
}
