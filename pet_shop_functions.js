myFunctions = {
  // Write your functions here
  getName(petShop){
    return petShop.name;
  },
  
  getTotalCash(petShop){
    return petShop.admin.totalCash;
  },
  
  addOrRemoveCash(petShop, cashValue){
    petShop.admin.totalCash += cashValue;
    return petShop.admin.totalCash;
  },

  getPetsSold(petShop){
    return petShop.admin.petsSold;
  },

  increasePetsSold(petShop,numberOfPetsSold){
    petShop.admin.petsSold += numberOfPetsSold;
  },
  getStockCount(petShop){
    return petShop.pets.length;
  },
  getPetsByBreed(petShop, breed){
    let numberOfPets=0;
    for (pets of petShop.pets)
    {
      if (pets.breed === breed){
        numberOfPets ++;
      }
    }
    return numberOfPets;
  },
  getPetByName(petShop, name){
    for (pets of petShop.pets){
      if (pets.name === name){
        return pets;
      }
    }
  },
  removePetByName(petShop,name){
    // not sure why it has to be backwards? can you do it forwards and just do i-- if it splices to make sure position is correct?
    for (var i= petShop.pets.length-1; i>=0; i--){
      if( petShop.pets[i].name === name){
        petShop.pets.splice(i,1);
      }
    }
  },
  addPetToStock(petShop,newPet){
    petShop.pets.push(newPet);
  },
  getCustomersCash(customer){
    return customer.cash;
  },
  getCustomersCashTotal(customers){
    let customerTotal =0;
    for (customer of customers){
      customerTotal += customer.cash;
    }
    return customerTotal;
  },
  removeCustomerCash(customer, number){
    customer.cash -= number;
  },
  getCustomerPetCount(customer){
    return customer.pets.length;
  },
  addPetToCustomer(customer, newPet){
    customer.pets.push(newPet);
  },
  
  customerCanAffordPet(customer,newPet){
    if(customer.cash>= newPet.price){
      return true;
    }
    else{
      return false;
    }
  },
  sellPetToCustomer(petShop,pet,customer){
    if (pet != undefined && myFunctions.customerCanAffordPet(customer,pet)){    
    customer.pets.push(pet);
    myFunctions.removePetByName(petShop,pet.name);
    myFunctions.increasePetsSold(petShop,1);
    myFunctions.removeCustomerCash(customer,pet.price);
    myFunctions.addOrRemoveCash(petShop,pet.price);
    }
  }
};

module.exports = myFunctions;
