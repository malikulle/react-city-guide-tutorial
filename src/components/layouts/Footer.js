import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <h4>Lorem</h4>
              <ul className="list-unstyled">
                <li>Lorem İpsum</li>
                <li>Lorem İpsum</li>
                <li>Lorem İpsum</li>
                <li>Lorem İpsum</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Lorem</h4>
              <ul className="list-unstyled">
                <li>Lorem İpsum</li>
                <li>Lorem İpsum</li>
                <li>Lorem İpsum</li>
                <li>Lorem İpsum</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Lorem</h4>
              <ul className="list-unstyled">
                <li>Lorem İpsum</li>
                <li>Lorem İpsum</li>
                <li>Lorem İpsum</li>
                <li>Lorem İpsum</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Lorem</h4>
              <ul className="list-unstyled">
                <li>Lorem İpsum</li>
                <li>Lorem İpsum</li>
                <li>Lorem İpsum</li>
                <li>Lorem İpsum</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} City Guide Ap
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`

.footer-middle {
    background : var(--mainDark);
    padding-top : 3rem;
    color : var(--mainWhite);
}
.footer-bottom {
    padding-top : 3rem;
    padding-bottom : 3rem;
}
`;
