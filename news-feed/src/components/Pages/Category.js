import React, { Component } from 'react'
import { Section, Container, Columns, Column, Title } from 'bloomer'
import Loader from 'react-loader-spinner'
import CardApp from '../Card'


const API_CATEGORY = 'https://api.canillitapp.com/news/category/'


class Category extends Component {
    state = {
        news: [],
        categoryName: '',
        loader: false,
    }

    async componentDidUpdate(preProps){
        if (this.props.match.params.category !== preProps.match.params.category){
            try {
                this.setState({ loader: true })
                const categories = [
                    { name: 'politica', id: 1 },
                    { name: 'internacionales', id: 2 },
                    { name: 'tecnologia', id: 3 },
                    { name: 'espectaculos', id: 4 },
                    { name: 'deportes', id: 5 }
                ]
                const { match } = this.props
                const { id, name } = categories.find(obj => obj.name === match.params.category)
                
                const response = await fetch(`${API_CATEGORY}${id}`)
                const infoCategory = await response.json()
                this.setState({ news: infoCategory, loader: false, categoryName: name }, () => {
                    console.log(this.state.categories)
                })
                
                
            } catch (error) {
                console.error(error)
                
            } finally {
                this.setState({ loader: false })
            }
        }
    }

    async componentDidMount() {
        try {
            this.setState({ loader: true })
            const categories = [
                { name: 'politica', id: 1 },
                { name: 'internacionales', id: 2 },
                { name: 'tecnologia', id: 3 },
                { name: 'espectaculos', id: 4 },
                { name: 'deportes', id: 5 }
            ]
            const { match } = this.props
            const { id, name } = categories.find(obj => obj.name === match.params.category)
            
            const response = await fetch(`${API_CATEGORY}${id}`)
            const infoCategory = await response.json()
            this.setState({ news: infoCategory, loader: false, categoryName: name })
            
            
        } catch (error) {
            console.error(error)
            
        } finally {
            this.setState({ loader: false })
        }

    }

    render() {
        const { news, loader, categoryName } = this.state
        return(
            
        <Container>
            <div style={{ display:'flex', justifyContent:'center'}}>
                {loader && <Loader type="Triangle" color="aquamarine" height={80} width={80} />}
            </div>
            <Section>
            <Title isSize={3}>{loader === false ? `Noticias de ${categoryName}` : ''}</Title>
                <Columns isMultiline>
                    {news.slice(0, 25).map(data => (
                        <Column isSize={{mobile: 8, default: 4}} key={data.news_id}> 
                            <CardApp {...data} />
                        </Column>
                    ))}
                </Columns>
            </Section>
        </Container>
                
        
        )
    }
}
export default Category;