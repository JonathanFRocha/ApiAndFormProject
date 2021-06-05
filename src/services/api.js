//          As funções abaixo fazem uma chamada para as respectivas urls e devolvem na page Cats
export const getTagList = async () => {
  try {
    const res = await fetch("https://cataas.com/api/tags");
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

export const getCatList = async () => {
  try {
    const res = await fetch("https://cataas.com/api/cats");
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};
