import React, { Component } from 'react'
import { Section, Container, Columns, Column, Title } from 'bloomer'
import Loader from 'react-loader-spinner'
import CardApp from '../Card'
import dayjs from 'dayjs';

import 'dayjs/locale/es'


const API_HOME = 'https://api.canillitapp.com/latest/'

dayjs.locale('es')
class Home extends Component {
    state = {
        newsHome: [],
        loader: false,
        date: dayjs(),
    }

    async componentDidMount() {
        try {
            this.setState({ loader: true })
            const { date } =this.state
            const dateFormater = date.format('YYYY[-]MM[-]DD')
            const response = await fetch(`${API_HOME}${dateFormater}`)
            const newsHome = await response.json()

            this.setState({ newsHome, loader: false })
            
        } catch (error) {
            console.error(error)
        } finally {
            this.setState({ loader:false })
        }


    }

    render() {
        const { newsHome, loader, date } = this.state
        return(
        <Container>
            <Section>
                <Title>{`Home - ${date}`}</Title>
                <div style={{ display:'flex', justifyContent:'center' }}>
                    {loader && <Loader type="Triangle" color="aquamarine" height={80} width={80} />}
                </div>
                <Columns isMultiline>
                    {newsHome.slice(0, 30).map(home => (
                        <Column isSize={{mobile: 8, default: 4}} key={home.news_id}> 
                            <CardApp {...home} />
                        </Column>
                    ))}
                </Columns>
            </Section>
        </Container>
        )
    }
}


export default Home;