import axios from 'axios';

const FoodDatabaseService = {
  searchFoodData: async (foodName) => {
    const url = 'https://api.edamam.com/auto-complete';
    const params = {
      app_id: 'b6f4b5ba',
      app_key: 'b3d7c171d84e70825401b7bae7abb4a3',
      q: foodName,
      limit: 10,
    };

    try {
      const response = await axios.get(url, { params });
      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  },

  searchFoodDetails: async (selectedFood) => {
  const url = 'https://api.edamam.com/api/food-database/v2/parser';
  const params = {
    app_id: 'b6f4b5ba',
    app_key: 'b3d7c171d84e70825401b7bae7abb4a3',
    ingr: selectedFood,
  };

  try {
    const response = await axios.get(url, { params });
    const data = response.data;

    if (data.parsed && data.parsed.length > 0 && data.parsed[0].food && data.parsed[0].food.nutrients) {
      const nutrients = data.parsed[0].food.nutrients;
      // console.log("nutrients : ");
      // console.log(nutrients);
      return nutrients;
    } else {
      console.log('Aucune donnÃ©e');
    }
  } catch (error) {
    console.error(error);
  }
},
  
};

export default FoodDatabaseService;