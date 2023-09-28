import React from 'react'

const Search = () => {
  return (
    <>
    <div className="offcanvas offcanvas-end" id="modalSearch" tabIndex={-1} role="dialog" aria-hidden="true">
        
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
            <i className="fe fe-x" aria-hidden="true"></i>
          </button>
        
          <div className="offcanvas-header lh-fixed fs-lg">
            <strong className="mx-auto">Search Products</strong>
          </div>
        
          <div className="offcanvas-body">
            <form>
              <div className="form-group">
                <label className="visually-hidden" htmlFor="modalSearchCategories">Categories:</label>
                <select className="form-select" id="modalSearchCategories">
                  <option selected>All Categories</option>
                  <option>Women</option>
                  <option>Men</option>
                  <option>Kids</option>
                </select>
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
              <div className="col-4 col-md-3">
        
                <img className="img-fluid" src="assets/img/products/product-5.jpg" alt="..." />
        
              </div>
              <div className="col position-static">
        
                <p className="mb-0 fw-bold">
                  <a className="stretched-link text-body" href="product.html">Leather mid-heel Sandals</a> <br />
                  <span className="text-muted">$129.00</span>
                </p>
        
              </div>
            </div>
            <div className="row align-items-center position-relative mb-5">
              <div className="col-4 col-md-3">
        
                <img className="img-fluid" src="assets/img/products/product-6.jpg" alt="..." />
        
              </div>
              <div className="col position-static">
        
                <p className="mb-0 fw-bold">
                  <a className="stretched-link text-body" href="product.html">Cotton floral print Dress</a> <br />
                  <span className="text-muted">$40.00</span>
                </p>
        
              </div>
            </div>
            <div className="row align-items-center position-relative mb-5">
              <div className="col-4 col-md-3">
        
                <img className="img-fluid" src="assets/img/products/product-7.jpg" alt="..." />
        
              </div>
              <div className="col position-static">
        
                <p className="mb-0 fw-bold">
                  <a className="stretched-link text-body" href="product.html">Leather Sneakers</a> <br />
                  <span className="text-primary">$85.00</span>
                </p>
        
              </div>
            </div>
            <div className="row align-items-center position-relative mb-5">
              <div className="col-4 col-md-3">
        
                <img className="img-fluid" src="assets/img/products/product-8.jpg" alt="..." />
        
              </div>
              <div className="col position-static">
        
                <p className="mb-0 fw-bold">
                  <a className="stretched-link text-body" href="product.html">Cropped cotton Top</a> <br />
                  <span className="text-muted">$29.00</span>
                </p>
        
              </div>
            </div>
            <div className="row align-items-center position-relative mb-5">
              <div className="col-4 col-md-3">
        
                <img className="img-fluid" src="assets/img/products/product-9.jpg" alt="..." />
        
              </div>
              <div className="col position-static">
        
                <p className="mb-0 fw-bold">
                  <a className="stretched-link text-body" href="product.html">Floral print midi Dress</a> <br />
                  <span className="text-muted">$50.00</span>
                </p>
        
              </div>
            </div>
        
            <a className="btn btn-link px-0 text-reset" href="shop.html">
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