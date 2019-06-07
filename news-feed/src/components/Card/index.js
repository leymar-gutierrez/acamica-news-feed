import React, { Component } from 'react'
import { Card, Image, MediaContent, Content, Title, Subtitle, CardContent, CardImage, Media} from 'bloomer'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import dayjs from 'dayjs'
import 'dayjs/locale/es'

dayjs.locale('es')
 const StyledTextCard = styled.span`
  position: absolute;
  top: 0px;
  right: 0px;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  background: rgba(252, 75, 99, 0.6);
  padding: 4px 14px;
  border-radius: 0px 0px 0px 5px;
  z-index: 1;
`
const CardComponent = styled(Card)`
  height: 100%;
`


const CardApp = ({ url, title, date, img_url, source_name }) => {
    const dateFormater = dayjs.unix(date).format('dddd[,] D [de] MMMM [de] YYYY [a las] HH:mm')
    return(
        <CardComponent>
            <CardImage>
                <StyledTextCard>Noticias</StyledTextCard>
               <a href={url} target="_blanck"><Image isRatio='4:3' src={img_url} /></a>
            </CardImage>
            <CardContent>
                <Media>
                    <MediaContent>
                        <Title isSize={4}>{title}</Title>
                        <Subtitle isSize={6}>{source_name}</Subtitle>
                    </MediaContent>
                </Media>
                <Content>
                    <small>{dateFormater} <a href={url} target="_blanck">{source_name}</a> </small>
                </Content>
            </CardContent>
        </CardComponent>
    )
}
export default CardApp