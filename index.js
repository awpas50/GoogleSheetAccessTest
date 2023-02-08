const SHEET_ID = '1hb2XiLriTd_RzLYDDxsQwSmflKVDJCdSnY-5VNqYR68';
const REFRESH_TOKEN = '1//04HL6a9oDLk66CgYIARAAGAQSNwF-L9IraNYLBrypFllx2E94rIh1VUE0EjVD_J0Cj0G2gBnmthEqwyOFdjo4A2DNr1jhOaHjxqI';
const ACCESS_TOKEN = 'ya29.a0AVvZVspKK9sc3TY3EnJmc0_BTjVYdyVVJw73x3tJlwozuPxuCfcfcRv3qGM6ADbOt4OxVY2wmpiwRI895aVQETcURcX0GwfgiirTge7hNLhuW-lQjbGlKdM8iolcWc-JRScyluUsqufrYavaUnRGjBmFDqNoaCgYKAQ4SARMSFQGbdwaIn8LinHz-4lS1ULe4cnv2pw0163';
const RANGE = 'A1:B5';
const PAGE1_ID = '0';
const PAGE2_ID = '185204935';
const PAGE2_NAME = '2 - Samsung';

getSheetValues = async () =>{
    const request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${PAGE2_NAME}!${RANGE}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`  
    }
    });
    const data = await request.json();
    console.log(data);
    return data;
  }

  document.getElementById("testButton").onclick = getSheetValues;