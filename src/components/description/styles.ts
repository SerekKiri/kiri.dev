import styled from 'styled-components/macro'

const Hidden = styled.span`
    font-size: 20px;
    margin: 0 0 0 6px;
    visibility: hidden;
`

const Wrapper = styled.div`
    font-size: 24px;
    font-style: italic;
    margin: 4px 0 0 24px;

    :hover ${Hidden} {
        visibility: visible;
    }
`

export { Wrapper, Hidden }