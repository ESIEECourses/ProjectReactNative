import axios from 'axios';

const FoodDatabaseService = {
  searchFoodData: async (foodName) => {
    const url = 'https://api.edamam.com/api/food-database/v2/parser';
    const params = {
      app_id: 'b6f4b5ba',
      app_key: 'b3d7c171d84e70825401b7bae7abb4a3',
      ingr: foodName,
    };

    try {
      const response = await axios.get(url, { params });
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  },
};

export default FoodDatabaseService;
