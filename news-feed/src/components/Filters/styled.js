import styled from 'styled-components'

export const ContentButton = styled.div`
display:flex;
justify-content: flex-end;
`

export const StyledInput = styled.button`
pointer-events: ${(props) => props.active ? 'auto' : 'none' }
`