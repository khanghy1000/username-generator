<script lang="ts">
  import "@fontsource/inter";
  import { getUserName } from "./lib/getUserName";
  import { getPascalCase } from "./lib/getPascalCase";

  let suffix = "";
  let prefix = "";
  let usePascalCase = false;

  let userName = getUserName();
  let displayName = "";

  let copied = false;

  $: {
    displayName = usePascalCase
      ? prefix + getPascalCase(userName) + suffix
      : prefix + userName + suffix;
    copied = false;
  }
</script>

<div class="container">
  <h1 class="title">User Name Generator</h1>
  <div class="input-group">
    <label for="prefix">Prefix</label>
    <input type="text" id="prefix" bind:value={prefix} />
  </div>

  <div class="input-group">
    <label for="suffix">Suffix</label>
    <input type="text" id="suffix" bind:value={suffix} />
  </div>

  <div class="input-group">
    <label for="usePascalCase">Use PascalCase</label>
    <input type="checkbox" id="usePascalCase" bind:checked={usePascalCase} />
  </div>

  <div class="input-group">
    <label for="output">Output</label>
    <input type="text" id="output" bind:value={displayName} readonly />
    <button
      class="btn btn-dark"
      on:click={() => {
        navigator.clipboard.writeText(displayName);
        copied = true;
      }}>Copy</button
    >
  </div>

  <button
    class="btn"
    on:click={() => {
      userName = getUserName();
      copied = false;
    }}>Generate</button
  >

  <div class="tooltip" class:hidden={!copied}>
    <p>Copied to clipboard.</p>
  </div>
</div>

<style>
  * {
    color: white;
    font-family: inter, sans-serif;
  }

  .container {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 600px;
    margin: 0 auto;
  }

  input[type="text"] {
    background: inherit;
    outline: none;
    border: 1px solid #303030;
    padding: 10px;
    color: white;
    border-radius: 12px;
    width: 100%;
  }

  input:focus {
    border: 1px solid #505050;
  }

  .input-group {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 14px;
  }

  .btn {
    background-color: #2572ed;
    border: 0;
    padding: 8px 8px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 15px;
  }

  .btn:hover {
    background-color: #317ffb;
  }

  .btn.btn-dark {
    background-color: #303030;
  }

  .btn.btn-dark:hover {
    background-color: #404040;
  }

  .title {
    text-align: center;
    margin-bottom: 20px;
  }

  .tooltip {
    background-color: rgb(23 201 100);
    padding: 12px 20px;
    text-align: center;
    border-radius: 10px;
  }

  .hidden {
    display: none;
  }
</style>
