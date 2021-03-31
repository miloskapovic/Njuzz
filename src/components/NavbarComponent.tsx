import React, { Dispatch, useState } from "react"
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { connect } from "react-redux";

import { useRouter } from "../helpers/hooks";
import { setSearchTerm, setSortBy } from "../store/actionCreators/newsActionCreators";
import { NewsAction } from "../store/actionTypes/newsActionTypes";

interface Props {
  onSetSearchTerm(searchTerm: string): void;
  onSetSortBy(sortBy: string): void;
}

const NavbarComponent: React.FC<Props> = props => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState<string>('');
  const { onSetSearchTerm, onSetSortBy } = props;
  const isSearchAndSort = router.pathname == '/search'
  console.log(isSearchAndSort)
  console.log(router.pathname)
  const handleSearch = () => {
    onSetSearchTerm(searchInput)
    if (!isSearchAndSort) router.push("/search")
  }

  return (
    <Navbar collapseOnSelect sticky="top" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand className="mr-auto" href="/">Njuzz</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
        {isSearchAndSort &&
          <Nav className="mr-2">
            <NavDropdown title="Sort by" id="collasible-nav-dropdown" onSelect={(e) => onSetSortBy(e || '')}>
              <NavDropdown.Item eventKey="popularity">Popularity</NavDropdown.Item>
              <NavDropdown.Item eventKey="relevance">Relevance</NavDropdown.Item>
              <NavDropdown.Item eventKey="publishedAt">Published date</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        }
        <Form inline className="mt-3 mt-lg-2" onSubmit={() => handleSearch()}>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={e => setSearchInput(e.target.value)} />
          <Button variant="outline-info" onClick={() => handleSearch()}>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<NewsAction>) => ({
  onSetSearchTerm: (searchTerm: string) => {
    dispatch(setSearchTerm(searchTerm));
  },
  onSetSortBy: (sortBy: string) => {
    dispatch(setSortBy(sortBy));
  },
});

export default connect(null, mapDispatchToProps)(NavbarComponent);
