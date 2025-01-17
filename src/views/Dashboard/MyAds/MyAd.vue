<template>
    <div class="mt-3">
        <div class="flex-between mt-3">
            <p class="header3">Manage and view your Ads</p>
            <div class="search-container">
                <span class="search-icon"><i class="fa-solid fa-magnifying-glass"></i></span>
                <input type="text" placeholder="Search here...">
            </div>
        </div>
        <div class="flex-column main-top-margin">
            <div class="flex-gap">
                <div class="text2 filttle-view active">View all (1)</div>
                <div class="text2 filttle-view">Active Ads (1)</div>
                <div class="text2 filttle-view">Inactive Ads (0)</div>
                <div class="text2 filttle-view">Pending Ads (0)</div>
                <div class="text2 filttle-view">Moderated Ads (0)</div>
            </div>
            <p class="text2 mt-3">Heavy discount on Packages <span class="active">View Packages <i class="fa fa-angle-right"></i></span></p>
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
.active-link{
    color: #3a77ff;
    font-weight: 600;
}
</style>
