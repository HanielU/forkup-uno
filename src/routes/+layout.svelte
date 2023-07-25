<script lang="ts">
  import "@unocss/reset/tailwind.css";
  import "uno.css";

  export let data: import("./$types").LayoutData;
  const user = data.user;
</script>

<div class="flex flex-col gap-8 square-full min-h-screen">
  <nav class="flex-s-between h-fit px-8 py">
    <h1 class="text-2xl fw-bold">Forkup</h1>

    <div class="flex items-center gap-4">
      {#if user}
        <a href="/profile" class="transition-300 hover-underline">
          {user.username}
        </a>
        <form method="POST" action="/profile?/signOut">
          <button
            class="text-black b bg-white px-4 py-2 transition-300 hover-(bg-black text-white)"
          >
            Sign out
          </button>
        </form>
      {:else}
        <a
          href="/login/github/oauth"
          class="text-black b bg-white px-4 py-2 transition-300 hover:(bg-black text-white)"
        >
          Sign in with Github
        </a>
      {/if}
    </div>
  </nav>

  <main class="flex flex-col p-8 grow">
    <slot />
  </main>

  <footer class="justify-self-end text-center py-4">
    <p>
      Made with 🧡 by the <a
        class="underline"
        href="https://github.com/orange-gang">Orange Gang</a
      >
    </p>
  </footer>
</div>
