function Movie({casting, categories, cover_url, id, imbd, min_age, runtime, summary, title}) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={cover_url} height={500} width={300} />
    </div>
  )
}

export default Movie;
