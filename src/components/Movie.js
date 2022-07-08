function Movie({casting, categories, cover_url, id, imbd, min_age, runtime, summary, title}) {
  return (
    <div className="movie-card">
      <div className="img-src">
        <img src={cover_url} height={500} width={350} />
      </div>
      <div className="movie-content">
        <h1>{title}</h1>
        <p>{summary}</p>
        <div>Casting: {casting.join(', ') }</div> 
        <div>Categories: {categories.join(', ')}</div>
        <div>Id: {id}</div>
        <div>Imbd: {imbd}</div>
        <div>Min. Age: {min_age}</div>
        <div>Runtime: {runtime}</div>
      </div>
    </div>
  )
}

export default Movie;
