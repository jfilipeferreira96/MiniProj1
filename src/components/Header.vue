<template>
  <nav class="py-10 mb-12 flex justify-between dark:text-gray-200">
    <h1 class="font-burtons text-xl"><router-link to="/">jFerreira</router-link></h1>
    <ul class="flex items-center">
      <!-- <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} class=" cursor-pointer text-2xl" /></li> -->
      <li class="nav-item">
        <router-link
          class="nav-link block pr-2 lg:px-2 py-2 hover:text-teal-500 focus:text-teal-500 transition duration-150 ease-in-out"
          to="/services"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          Services
        </router-link>
      </li>
      <li class="nav-item mb-2 lg:mb-0">
        <router-link
          class="nav-link block pr-2 lg:px-2 py-2 hover:text-teal-500 focus:text-teal-500 transition duration-150 ease-in-out"
          to="/hoobies"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          Hoobies
        </router-link>
      </li>
      <li>
        <a
          class="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
          href="https://github.com/jfilipeferreira96"
          target="_blank"
        >
          Github
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>
