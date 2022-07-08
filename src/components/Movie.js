function Movie({casting, categories, cover_url, id, imbd, min_age, runtime, summary, title}) {
  return (
    <div className="movie-card">
      <div className="img-src">
        <img src={cover_url} height={500} width={350} />
      </div>
      <div className="movie-content">
        <h1 className="movie-title">{title}</h1>
        <p className="movie-summary">{summary}</p>
        <div className="movie-casting"><b>Casting</b>: {casting.join(', ') }</div> 
        <div className="movie-categories"><b>Categories</b>: {categories.join(', ')}</div>
        <div className="movie-imbd"><b>Imbd</b>: {imbd}</div>
        <div className="movie-age"><b>Min.age</b>: {min_age}</div>
        <div className="movie-runtime"><b>Runtime</b>Runtime: {runtime}</div>
      </div>
    </div>
  )
}

export default Movie;
