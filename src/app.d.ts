// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
// declare namespace App {
// 	// interface Locals {}
// 	// interface PageData {}
// 	// interface Error {}
// 	// interface Platform {}
// }

declare namespace App {
  interface Locals {
  }

  interface Platform {
    context: {
      waitUntil(promise: Promise<never>): void;
    };
    caches: CacheStorage & { default: Cache };
  }

  interface Session {
  }

  interface Stuff {
  }
}
