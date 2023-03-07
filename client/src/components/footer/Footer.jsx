import "./footer.css";

function Footer(props) {
  return (
    <>
      <div className="footer">
        <div className="fLists">
          <ul className="fList">
            <li className="fListItem">Countries</li>
            <li className="fListItem">Regions</li>
            <li className="fListItem">Cities</li>
            <li className="fListItem">Districs</li>
            <li className="fListItem">Airports</li>
            <li className="fListItem">Hotels</li>
            <li className="fListItem">Places of interest</li>
          </ul>
          <ul className="fList">
            <li className="fListItem">Homes</li>
            <li className="fListItem">Apartments</li>
            <li className="fListItem">Resorts</li>
            <li className="fListItem">Villas</li>
            <li className="fListItem">B&Bs</li>
            <li className="fListItem">Guest houses</li>
          </ul>
          <ul className="fList">
            <li className="fListItem">Unique places to stay</li>
            <li className="fListItem">All destinations</li>
            <li className="fListItem">Discover</li>
            <li className="fListItem">Reviews</li>
            <li className="fListItem">Unpacked: Travel Articles</li>
            <li className="fListItem">Travel communities</li>
            <li className="fListItem">Seasonal and holiday deals</li>
          </ul>
          <ul className="fList">
            <li className="fListItem">Car rental</li>
            <li className="fListItem">Flight finder</li>
            <li className="fListItem">Restaurant reservations</li>
            <li className="fListItem">Lamabooking for Travel Agents</li>
          </ul>
          <ul className="fList">
            <li className="fListItem">About Lamabooking</li>
            <li className="fListItem">Customer Service Help</li>
            <li className="fListItem">Partner help</li>
            <li className="fListItem">Careers</li>
            <li className="fListItem">Sustainability</li>
            <li className="fListItem">Press center</li>
          </ul>
        </div>
      </div>
      <div className="fText">
        Copyright &copy; {new Date().getFullYear()} Lamabooking.
        <br />
        Designed by Jesse Ajioh.
      </div>
    </>
  );
}

export default Footer;
