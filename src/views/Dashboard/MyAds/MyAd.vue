<template>
  <div class="mt-3">
    <div class="flex-between mt-3">
      <p class="header3">Manage and view your Ads</p>
      <div class="search-container">
        <span class="search-icon"
          ><i class="fa-solid fa-magnifying-glass"></i
        ></span>
        <input type="text" placeholder="Search here..." />
      </div>
    </div>
    <div class="flex-column main-top-margin text-center">
      <div class="flex-gap grid grid-cols-2  sm:grid-cols-3 md:grid-cols-7">
        <div class="text2 filttle-view active">View all (1)</div>
        <div class="text2 filttle-view">Active Ads (1)</div>
        <div class="text2 filttle-view">Inactive Ads (0)</div>
        <div class="text2 filttle-view">Pending Ads (0)</div>
        <div class="text2 filttle-view">Moderated Ads (0)</div>
      </div>
      <p class="text2 mt-3 text-start">
        Heavy discount on Packages
        <span class="active"
          >View Packages <i class="fa fa-angle-right"></i
        ></span>
      </p>
    </div>
    <div class="border mt-3 flex flex-col md:flex-row p-2 justify-start items-start text-start">
      <div>
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
      <div class="w-full">
        <div class="flex justify-start gap-4 items-center md:justify-between">
          <h1>hen of colder <span class="text-xs">- Hens </span></h1>
          <button>...</button>
        </div>
        <div class="flex flex-row items-center gap-4">
          <h1 class="border-e-2 pe-2 md:pe-16">Rs:2000</h1>
          <h1 class="border-e-2 pe-2 md:pe-16">Active from 6 Jan to 5 Feb</h1>
          <span class="p-2 bg-[#517472] text-white rounded-md">Active</span>
        </div>
        <div class="flex flex-col md:flex-row justify-between mt-2">
          <ul class="flex flex-row  gap-4 text-center items-center">
            <li class="flex gap-2">
              <i class="bi bi-eye"></i>
              <span class="flex flex-col"
                ><h1>36</h1>
                views</span
              >
            </li>
            <li class="flex gap-2">
              <i class="bi bi-telephone"></i>
              <span class="flex flex-col"
                ><h1>0</h1>
                Phone</span
              >
            </li>
            <li class="flex gap-2">
              <i class="bi bi-chat"></i>
              <span class="flex flex-col"
                ><h1>0</h1>
                chats</span
              >
            </li>
          </ul>
          <div class="flex flex-col md:flex-row gap-4">
            <button class="px-12 border border-[#517472] hover:text-white hover:bg-[#517472]">Edit</button>
            <button class="px-12 border bg-[#517472] text-white hover:bg-[#517472]/90">Sell faster now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.search-container {
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 10px;
  width: 300px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.search-container .search-icon {
  font-size: 20px;
  color: #888;
  margin-right: 10px;
}

.search-container input {
  border: none;
  outline: none;
  width: 100%;
  font-size: 16px;
}

.filttle-view {
  border: 2px solid #ced4da;
  padding: 5px 17px;
  border-radius: 20px;
}
.main-top-margin {
  margin-top: 2rem;
}
.active {
  background-color: #ebf1ff;
  color: #3a77ff;
  font-weight: 800;
  border: 2px solid #3a77ff;
}
</style>
