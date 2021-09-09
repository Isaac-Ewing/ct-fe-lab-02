export const getChars = () => {
  return fetch('https://ac-vill.herokuapp.com/villagers')
    .then((res) => res.json())
    .then((json) =>
      json.map((villager) => ({
        id: villager._id,
        name: villager.name,
        quote: villager.quote,
        personality: villager.personality
      }))
    );
};
