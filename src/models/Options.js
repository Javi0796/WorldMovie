const OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: import.meta.env.VITE_DBMOVIE_APP_KEY,
    }
  }

export default OPTIONS;