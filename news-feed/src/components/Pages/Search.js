import React, { Component } from 'react'
import CardApp from '../Card'
import { Section, Container, Columns, Column, Title } from 'bloomer'
import Loader from 'react-loader-spinner'
import dayjs from 'dayjs';

import 'dayjs/locale/es'

const API_FILTER = 'https://api.canillitapp.com/search/'

class Search extends Component {
    state= {
        dataFilter: [],
        loader: false,
        date:dayjs()
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.query !== prevProps.match.params.query) {
            this.fetchFilterItem()
        }
    }  
    componentDidMount(){
        this.fetchFilterItem()
    }
    
    async fetchFilterItem() {
        const { query } = this.props.match.params
        console.log(query)
    
        try {
          this.setState({ loader: true })
    
          const response = await fetch(`${API_FILTER}${query}`)
          const data = await response.json()
          this.setState({ dataFilter: data, loader:false })

        } catch (error) {
          this.setState({ error: String(error) })
        } finally {
          this.setState({ loader: false })
        }
      } 

    render() {
        const{dataFilter, date, loader} = this.state
        return(
            <Container>
                <Section>
                    <Title>{`Resultado de busqueda - ${date}`}</Title>
                    <div style={{ display:'flex', justifyContent:'center' }}>
                        {loader && <Loader type="Triangle" color="aquamarine" height={80} width={80} />}
                    </div>
                    <Columns isMultiline>
                        {dataFilter.slice(0, 30).map(filter => (
                            <Column isSize={{mobile: 8, default: 4}} key={filter.news_id}> 
                                <CardApp {...filter} />
                            </Column>
                        ))}
                    </Columns>
                </Section>
            </Container>
        )
    }
}
export default Search