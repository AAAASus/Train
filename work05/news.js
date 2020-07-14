import React from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import axios from 'axios'
const news = [
    {
        id: 1,
        title: 'news1',
        images: 'http://placehold.it/250×250',
        description: 'news1',
        created_at: '2020-07-10 10:10:10',
        updated_at: '2020-07-10 10:10:10',
    },
    {
        id: 2,
        title: 'news2',
        images: 'http://placehold.it/250×250',
        description: 'news2',
        created_at: '2020-07-10 10:10:10',
        updated_at: '2020-07-10 10:10:10',
    },
    {
        id: 3,
        title: 'news3',
        images: 'http://placehold.it/250×250',
        description: 'news3',
        created_at: '2020-07-10 10:10:10',
        updated_at: '2020-07-10 10:10:10',
    }
]

export default () => (
    <div>
        <Container>
            <Row>
                {news.map((item, key,) => 
                (<Col sm={6}>
                    <Card>
                        <Row>
                            <Col xs={6}>
                                <h3>
                                    {item.title}
                                </h3>
                                <div>
                                    <span>发布日期：{item.created_at}</span>
                                </div>
                            
                            </Col>
                        </Row>
                        
                    </Card>
                {item.title}
                </Col>)
                 )}
            </Row>
        </Container>


    </div>
)
