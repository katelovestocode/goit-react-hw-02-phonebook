import styled from '@emotion/styled'

export const List = styled.ul`
padding: ${p => p.theme.space[2]}px;
font-size:  ${p => p.theme.fontSizes.l};
color: ${p => p.theme.colors.accentColor};
display: flex;
flex-direction: column;
align-items: center;
justify-conten: center;
`
export const ListItem = styled.li`
padding: ${p => p.theme.space[2]}px;
font-size:  ${p => p.theme.fontSizes.l};
color: ${p => p.theme.colors.accentColor};
display: flex;
flex-direction: row;
align-items: center;
justify-conten: center;
`
export const Button = styled.button`
margin-left: ${p => p.theme.space[2]}px;
color: ${p => p.theme.colors.darkAccent};
font-weight: ${p => p.theme.fontWeights.bold};
width: 60px;
padding: ${p => p.theme.space[1]}px;
background-color: ${p => p.theme.colors.ivoryLight};
border:  ${p => p.theme.borders.bold} ${p => p.theme.colors.accentColor};
border-radius:${p => p.theme.radii.normal};
`
export const Text = styled.p`
color: ${p => p.theme.colors.brown};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: 26px;
`

export const Span = styled.span`
color: ${p => p.theme.colors.accentColor};

`