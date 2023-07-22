import axios from 'axios';

export const getValue = async () => {
  try {

    const response = await axios.post(`http://localhost:4000/variable`, {
      query: `
      query{
        GetVariables{
          valueX
          valueY
          valueZ
        }
      }
      `,
    });

    if (response.data.errors) {
      throw new Error(response.data.errors[0].message);
    }

    return response.data.data.GetVariables;
  } catch (error) {
     console.log(error)
  }
};



