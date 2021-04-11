let farm = [
  cats = [
    {
      name: "MamaCat",
      old: 2,
      children: [
        {
          name: "Peter",
          old: 2
        },
        {
          name: "Wolfgang",
          old: 3
        },
        {
          name: "Philip",
          old: 3
        }
      ]
    },
    {
      name: "MamaCat2",
      old: 2,
      children: [
        {
          name: "Judi",
          old: 2
        },
        {
          name: "Wolter",
          old: 3
        },
        {
          name: "Mores",
          old: 3
        }
      ]
    }
  ]

  ,
  dogs = [
    {
      name: "FatherDog",
      old: 7,
      children: [
        {
          name: "Less",
          old: 4
        },
        {
          name: "Werner",
          old: 4
        }
      ]
    }
  ],
  cows = [
    {
      name: "MamaCow",
      old: 10,
      children: [
        {
          name: "Barbara",
          old: 2
        },
        {
          name: "Marta",
          old: 3
        }
      ]
    }
  ]

]

let calcFarmOld = () => {
  let [cats, dogs, cows] = farm

  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  let catsOld = cats.map(cats => (cats.old))
  let childrenCatsOld = cats.map(cat => cat.children.map(item => item.old))
  let dogsOld = cats.map(dogs => (dogs.old))
  let childrenDogsOld = cats.map(dogs => dogs.children.map(item => item.old))
  let cowsOld = cats.map(cows => (cows.old))
  let childrenCowsOld = cats.map(cows => cows.children.map(item => item.old))

  let sumCats = catsOld.reduce(reducer)
  let sumCatsChildren = childrenCatsOld.flat().reduce(reducer)
  let sumDogs = dogsOld.reduce(reducer)
  let sumDogsChildren = childrenDogsOld.flat().reduce(reducer)
  let sumCows = cowsOld.reduce(reducer)
  let sumCowsChildren = childrenCowsOld.flat().reduce(reducer)
  let sumAllAnimalsFarm = []
  sumAllAnimalsFarm.concat(sumCats, sumCatsChildren, sumDogs, sumDogsChildren, sumCows, sumCowsChildren)

  console.log(sumAllAnimalsFarm.concat(sumCats, sumCatsChildren, sumDogs, sumDogsChildren, sumCows, sumCowsChildren))
}
calcFarmOld(farm)
