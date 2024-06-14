<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav id="navigation-bar">
    <ul>
      <li>
        <div>
          Home
          <ul>
            <li>User Dashboard</li>
            <li>Saved Comics</li>
          </ul>
        </div>
      </li>
      
      <li>
        <div>
          Comics:
          <ul>
            <li>Graphic Novels</li>
            <li>Mangas</li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>

  <div>
    <h1>Latest Updates:</h1>
    <div>
      <img src="https://mangadex.org/covers/051a49d7-dbd8-45eb-bf2a-4c04ab3e2e88/54a85696-84b4-4652-a731-a71acc1a2a09.jpg.256.jpg">
      <p>Ch. 700 - Hey!</p>
      <p>Author: Lorem Ipsum</p>
    </div>

    <div>
      <img src="https://mangadex.org/covers/051a49d7-dbd8-45eb-bf2a-4c04ab3e2e88/54a85696-84b4-4652-a731-a71acc1a2a09.jpg.256.jpg">
      <p>Ch. 700 - Hey!</p>
      <p>Author: Lorem Ipsum</p>
    </div>

    <div>
      <img src="https://mangadex.org/covers/051a49d7-dbd8-45eb-bf2a-4c04ab3e2e88/54a85696-84b4-4652-a731-a71acc1a2a09.jpg.256.jpg">
      <p>Ch. 700 - Hey!</p>
      <p>Author: Lorem Ipsum</p>
    </div>
  </div>
  
  <RouterView/>
</template>