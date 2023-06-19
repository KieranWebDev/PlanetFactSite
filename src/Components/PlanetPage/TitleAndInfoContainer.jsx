import styled from 'styled-components';
import { breakPoints } from '../../breakPointAndImgSizes';
// icons
import SourceIcon from '../../assets/icon-source.svg';

const StyledContainer = styled.section`
  grid-area: titleInfo;
  padding: 0 1.5rem;
  text-align: center;

  @media (min-width: ${breakPoints.tablet}) {
    text-align: left;
    padding: 0;
    padding-left: 1.5em;
    ${'' /* padding-right: 1em; */}
  }
`;
const StyledH1 = styled.h1`
  font-size: var(--font-size-lg);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 400;
  margin-bottom: 0.5em;

  @media (min-width: ${breakPoints.tablet}) {
  }
`;

const StyledP = styled.p`
  font-size: var(--font-size-sm);
  font-size: 15px;
  line-height: var(--standard-line-height);
  font-weight: 300;
  opacity: 0.9;
  margin-bottom: 1.9em;
`;

const StyledLink = styled.div`
  color: var(--secondary-font-color);

  a {
    color: inherit;
    font-weight: 700;
    margin: 0 3px;
    text-decoration: none;
  }

  a img {
    margin-left: 3px;
    vertical-align: middle;
  }

  & a:hover {
    color: white;
    text-decoration: underline;
  }
  ${
    '' /* & a:hover img {
    opacity:1
    fill: white;
  } */
  }
`;

export default function TitleAndInfoContainer({ planetName, displayedInfo }) {
  //   console.log(displayedInfo);

  return (
    <StyledContainer>
      <StyledH1>{planetName}</StyledH1>
      <StyledP>{displayedInfo.planetDecriptionText}</StyledP>
      <StyledLink>
        Source :
        <a target="_blank" rel="noreferrer" href={displayedInfo.planetWikiLink}>
          Wikipedia
          <img src={SourceIcon} alt="link icon" />
        </a>
      </StyledLink>
    </StyledContainer>
  );
}
