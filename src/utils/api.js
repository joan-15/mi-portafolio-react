export const fetchData = async (endpoint) => {
    try {
      const response = await fetch(endpoint);
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  