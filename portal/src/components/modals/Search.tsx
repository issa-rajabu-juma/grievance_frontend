import React from 'react'

const Search = () => {
  return (
    <>
    <div className="offcanvas offcanvas-end" id="modalSearch" tabIndex={-1} role="dialog" aria-hidden="true">
        
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
            <i className="fe fe-x" aria-hidden="true"></i>
          </button>
        
          <div className="offcanvas-header lh-fixed fs-lg">
            <strong className="mx-auto">Search</strong>
          </div>
        
          <div className="offcanvas-body">
            <form>
              <div className="row">
                <div className="col-md-6">
                   <div className="form-group">
                <select className="form-select" id="modalSearchCategories">
                  <option>Status</option>
                  <option>Open</option>
                  <option>Ongoing</option>
                  <option>Resolved</option>
                </select>
              </div>
                </div>
                <div className="col-md-6">
                   <div className="form-group">
                <select className="form-select" id="modalSearchCategories2">
                  <option>Severity</option>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>
                </div>
              
              </div>
             
              <div className="input-group input-group-merge">
                <input className="form-control" type="search" placeholder="Search" />
                <div className="input-group-append">
                  <button className="btn btn-outline-border" type="submit">
                    <i className="fe fe-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        
          <div className="offcanvas-body border-top fs-sm">
        
            <p>Search Results:</p>
        
            <div className="row align-items-center position-relative mb-5">
              <div className="col position-static">
                <p className="mb-0 fw-bold">
                  <a className="stretched-link text-body" href="product.html">Malalamiko ya wafugaji</a> <br />
                  <span className="text-muted">Issa Rajabu Juma - Mwanza</span>
                </p>
              </div>
              <hr />
            </div>

             <div className="row align-items-center position-relative mb-5">
              <div className="col position-static">
                <p className="mb-0 fw-bold">
                  <a className="stretched-link text-body" href="product.html">Malalamiko ya wafugaji</a> <br />
                  <span className="text-muted">Issa Rajabu Juma - Mwanza</span>
                </p>
              </div>
              <hr />
            </div>

            <div className="row align-items-center position-relative mb-5">
              <div className="col position-static">
                <p className="mb-0 fw-bold">
                  <a className="stretched-link text-body" href="product.html">Malalamiko ya wafugaji</a> <br />
                  <span className="text-muted">Issa Rajabu Juma - Mwanza</span>
                </p>
              </div>
              <hr />
            </div>

            <div className="row align-items-center position-relative mb-5">
              <div className="col position-static">
                <p className="mb-0 fw-bold">
                  <a className="stretched-link text-body" href="product.html">Malalamiko ya wafugaji</a> <br />
                  <span className="text-muted">Issa Rajabu Juma - Mwanza</span>
                </p>
              </div>
              <hr />
            </div>
           
        
            <a className="btn btn-link px-0 text-reset" href="#">
              View All <i className="fe fe-arrow-right ms-2"></i>
            </a>
        
          </div>
        
          <div className="offcanvas-body d-none">
        
            <p className="mb-3 fs-sm text-center">
              Nothing matches your search
            </p>
        
            <p className="mb-0 fs-sm text-center">
              😞
            </p>
        
          </div>
        
        </div>
    </>
  )
}

export default Search