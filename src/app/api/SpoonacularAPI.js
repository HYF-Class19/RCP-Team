
export const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.SPOONACULAR_API_KEY,
          "X-RapidAPI-Host": process.env.SPOONACULAR_API_HOST,
        },
      };