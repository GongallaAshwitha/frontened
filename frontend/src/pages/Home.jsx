import React from 'react'

const Home = () => {
  return (
    <div>
     <img src="/Zesteybite.webp" class="img-fluid w-100 pt-1" alt="..."/ >
     <div class="row row-cols-1 row-cols-md-2 g-4 m-2">
  <div class="col">
    <div class="card">
      <img src="/recipe.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Veg Recipes</h5>
        <p class="card-text">Veggie Delights: Explore the Best Vegetarian Recipes</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/salads.jpg" class="card-img-top" alt="..."/ >
      <div class="card-body">
        <h5 class="card-title">Healthy Salads</h5>
        <p class="card-text">Fresh and nutritious salads packed with flavor.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/quick.jpg" class="card-img-top" alt="..."/ >
      <div class="card-body">
        <h5 class="card-title">Quick & Easy Meals</h5>
        <p class="card-text">Fast and delicious meals for busy days.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/desserts.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Desserts</h5>
        <p class="card-text">Sweet treats to satisfy your cravings</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home